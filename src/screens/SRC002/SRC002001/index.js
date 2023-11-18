import { View, Text, Image, Animated, Easing, Dimensions } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import Color from '../../../assest/colors';
import { Slider } from '@miblanchard/react-native-slider';
import { SPHeader } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, { useProgress, RepeatMode } from 'react-native-track-player';
import { SPImgDF } from '../../../assest/images/Default';
import {
    PROGRESS, PAUSE, REPLAY, NEXT, PREVIOUS,
    RANDOM, REPEAT,
} from '../../../redux/actions';

const widthScreen = Dimensions.get('window').width;

const SRC002001 = ({ navigation }) => {
    const defaultUrl = SPImgDF;
    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.playSongReducer.isPlaying);
    const itemSongPlaying = useSelector(state => state.playSongReducer.itemSongPlaying);
    const indexSong = useSelector(state => state.playSongReducer.indexSong);
    const listSongReducer = useSelector(state => state.playSongReducer.listSong);
    const progress = useSelector(state => state.playSongReducer.progress);
    const { position, duration } = useProgress();
    const rotateValue = useRef(new Animated.Value(0)).current;

    const timePosition = useSelector(state => state.playSongReducer.timeStart);
    const timeDuration = useSelector(state => state.playSongReducer.timeEnd);

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [rotateValue, isPlaying]);

    const spin = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });


    const seekToPosition = async (newPosition) => {
        if (newPosition >= 0 && newPosition <= duration) {
            await TrackPlayer.seekTo(newPosition);
        }
    };

    const setProgress = (value) => {
        const progress = Math.floor(value);
        seekToPosition(value * duration / 100);
        dispatch({
            type: PROGRESS,
            payload: progress,
        });
    };

    //---------Play/Pause nhac----------
    const playMusic = async () => {
        if (isPlaying) {
            dispatch({ type: PAUSE });
            await TrackPlayer.pause();
        } else {
            dispatch({ type: REPLAY });
            await TrackPlayer.play();
        }
    }

    //--------Chuyen bai tiep theo----------
    const nextMusic = async (indexSong) => {
        dispatch({
            type: NEXT, payload: {
                indexSong: indexSong,
            }
        });
        // await TrackPlayer.skipToNext();
    }

    //-------Quay lai bai truoc---------
    const previousMusic = async (indexSong) => {
        dispatch({
            type: PREVIOUS, payload: {
                indexSong: indexSong,
            }
        });
        // await TrackPlayer.skipToPrevious();
    }
    // ------Random bai hat---------
    const isRandom = useSelector(state => state.playSongReducer.isRandom);
    const randomMusic = async () => {
        console.log('isRandom', isRandom);
        dispatch({
            type: RANDOM, payload: {
                isRandom: !isRandom,
            }
        });
    }

    // ------Lap lai bai hat---------
    const isRepeat = useSelector(state => state.playSongReducer.isRepeat);
    const [countSetRepeat, setCountSetRepeat] = useState(0);

    useEffect(() => {
        console.log('isRepeat', isRepeat);
        if (isRepeat === 0) {
            setCountSetRepeat(0);
        } else if (isRepeat === 1) {
            setCountSetRepeat(1);
        } else if (isRepeat === 2) {
            setCountSetRepeat(2);
        }
    }, [isRepeat]);

    const repeatMusic = async (type) => {
        dispatch({
            type: REPEAT, payload: {
                isRepeat: type,
            }
        });
        if (type === 0) {
            TrackPlayer.setRepeatMode(RepeatMode.Off);
        }
        if (type === 1) {
            TrackPlayer.setRepeatMode(RepeatMode.Track);
        }
        if (type === 2) {
            TrackPlayer.setRepeatMode(RepeatMode.Queue);
        }
    }

    const handleSetTypeRepeat = () => {
        if (countSetRepeat === 0) {
            repeatMusic(1);
            setCountSetRepeat(1);
        } else if (countSetRepeat === 1) {
            repeatMusic(2);
            setCountSetRepeat(2);
        } else if (countSetRepeat === 2) {
            repeatMusic(0);
            setCountSetRepeat(0);
        }
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.bottobTabColor,
        }}>
            <SPHeader
                backgroundColor={Color.bottobTabColor}
                hasTitle={true}
                title={'Now Playing'}
                titleSize={20}
                hasIconLeft={true}
                iconLeft="chevron-down"
                iconLeftSize={20}
                iconLeftOnPress={() => navigation.goBack()}
            />

            <View style={{
                flex: 1,
                alignItems: 'center',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
            }}>
                {/* View dia xoay vong tron */}
                <View style={{
                    width: widthScreen - 80,
                    height: widthScreen - 80,
                    borderRadius: widthScreen - 80,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                }}>
                    <Animated.Image
                        source={{ uri: itemSongPlaying?.url || defaultUrl }}
                        style={[
                            {
                                width: '100%',
                                height: '100%',
                                resizeMode: 'cover',
                            },
                            isPlaying ? { transform: [{ rotate: spin }] } : null,
                        ]}
                    />
                </View>

                {/* View thong tin bai hat */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 30,
                    paddingHorizontal: 20,
                }}>
                    {/* Icon share */}
                    <Icon
                        name="share-outline"
                        size={24}
                        color={Color.white}
                    />

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: Color.white,
                            fontSize: 18,
                            fontWeight: 'bold',
                            fontFamily: 'Roboto-Bold',
                        }}>
                            {itemSongPlaying.songName ? itemSongPlaying.songName : 'Title'}
                        </Text>

                        <Text style={{
                            color: Color.white,
                            fontSize: 14,
                            fontFamily: 'Roboto-Bold',
                            opacity: 0.6,
                            marginTop: 5,
                        }}>
                            {itemSongPlaying.artist ? itemSongPlaying.artist : 'Artist'}
                        </Text>

                    </View>

                    <Icon
                        name="heart-outline"
                        size={24}
                        color={Color.white}
                    />

                </View>

                {/* View thanh tien trinh */}
                <View style={{
                    width: '100%',
                    marginTop: 30,
                    paddingHorizontal: 20,
                    alignItems: 'stretch',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        width: '100%',
                    }}>
                        <Slider
                            style={{
                                width: '100%',
                                height: 10,
                                backgroundColor: Color.buttonColor
                            }}
                            value={progress}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor={Color.buttonColor}
                            maximumTrackTintColor={Color.white}
                            thumbStyle={{
                                width: 12,
                                height: 12,
                                borderRadius: 12,
                                backgroundColor: Color.buttonColor,
                            }}
                            onValueChange={(value) => setProgress(value)}
                        />
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            color: Color.white,
                            fontSize: 12,
                            fontFamily: 'Roboto-Bold',
                            opacity: 0.6,
                        }}>
                            {timePosition ? timePosition : '00:00'}
                        </Text>

                        <Text style={{
                            color: Color.white,
                            fontSize: 12,
                            fontFamily: 'Roboto-Bold',
                            opacity: 0.6,
                        }}>
                            {timeDuration ? timeDuration : '00:00'}
                        </Text>

                    </View>
                </View>

                {/* View control */}
                <View style={{
                    width: '100%',
                    marginTop: 30,
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}>
                    <IconComunity
                        name="shuffle-variant"
                        size={24}
                        color={isRandom ? Color.buttonColor : Color.white}
                        onPress={() => randomMusic()}
                    />

                    <IconComunity
                        name="skip-previous"
                        size={40}
                        color={Color.white}
                        onPress={() => previousMusic(indexSong)}
                    />
                    {
                        isPlaying ? (
                            <IconComunity
                                name="pause-circle"
                                size={50}
                                color={Color.buttonColor}
                                onPress={() => playMusic()}
                            />
                        ) : (
                            <IconComunity
                                name="play-circle"
                                size={50}
                                color={Color.buttonColor}
                                onPress={() => playMusic()}
                            />
                        )
                    }
                    <IconComunity
                        name="skip-next"
                        size={40}
                        color={Color.white}
                        onPress={() => nextMusic(indexSong)}
                    />

                    {
                        isRepeat === 0 ? (
                            <IconComunity
                                name="repeat"
                                size={24}
                                color={Color.white}
                                onPress={() => handleSetTypeRepeat()}
                            />
                        ) : (
                            isRepeat === 1 ? (
                                <IconComunity
                                    name="repeat-once"
                                    size={24}
                                    color={Color.buttonColor}
                                    onPress={() => handleSetTypeRepeat()}
                                />
                            ) : (
                                <IconComunity
                                    name="repeat"
                                    size={24}
                                    color={Color.buttonColor}
                                    onPress={() => handleSetTypeRepeat()}
                                />
                            )
                        )
                    }

                </View>

                {/* View swipe up */}
                <View style={{
                    width: '100%',
                    marginTop: 30,
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: 30,
                }}>
                    <Icon
                        name="chevron-up"
                        size={24}
                        color={Color.white}
                    />
                    <Text style={{
                        color: Color.white,
                        fontSize: 12,
                        fontFamily: 'Roboto-Bold',
                        opacity: 0.6,
                        marginTop: 5,
                    }}>
                        Swipe up to view lyrics
                    </Text>
                </View>


            </View>
        </View>
    )
}

export default SRC002001;