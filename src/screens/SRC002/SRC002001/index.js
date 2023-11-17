import { View, Text, FlatList, ScrollView, Image, Animated, Easing, Dimensions } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import Color from '../../../assest/colors';
import { Slider } from '@miblanchard/react-native-slider';
import { SPHeader, ITAlbum, SPTab, SPTabGroup1, SPControl } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { SPImgDF } from '../../../assest/images/Default';
import { PROGRESS } from '../../../redux/actions';
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

    const [timePosition, setTimePosition] = useState('');
    const [timeDuration, setTimeDuration] = useState('');

    useEffect(() => {
        //set time position la thoi gian hien tai cua bai hat theo dang mm:ss
        const minutesPosition = Math.floor(position / 60);
        const secondsPosition = Math.floor(position % 60);
        const timePosition = `${minutesPosition < 10 ? '0' + minutesPosition : minutesPosition}:${secondsPosition < 10 ? '0' + secondsPosition : secondsPosition}`;
        setTimePosition(timePosition);
        const minutesDuration = Math.floor(duration / 60);
        const secondsDuration = Math.floor(duration % 60);
        const timeDuration = `${minutesDuration < 10 ? '0' + minutesDuration : minutesDuration}:${secondsDuration < 10 ? '0' + secondsDuration : secondsDuration}`;
        setTimeDuration(timeDuration);
    }, [progress]);

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [rotateValue]);

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
        seekToPosition(value*duration/100);
        dispatch({
            type: PROGRESS,
            payload: progress,
        });
    };


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
            }}>
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

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 30,
                    paddingHorizontal: 20,
                }}>
                    <Icon
                        name="heart-outline"
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
                        marginTop: 10,
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


            </View>
        </View>
    )
}

export default SRC002001;