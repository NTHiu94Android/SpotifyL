import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { NEXT, PREVIOUS, PAUSE, REPLAY, PROGRESS, PLAY } from '../../redux/actions';
import Color from '../../assest/colors';
import React, { useEffect, useState } from 'react';
import TrackPlayer, {
    useProgress, useTrackPlayerEvents
} from 'react-native-track-player';
import * as Progress from 'react-native-progress';

const SPControl = ({
    url,
    songName,
    songDetail,
    indexSong,
    navigation
}) => {
    const dispatch = useDispatch();
    const width = Dimensions.get('window').width;
    const isPlay = useSelector(state => state.playSongReducer.isPlaying);
    const listSong = useSelector(state => state.playSongReducer.listSong);
    const listTrack = listSong.map((item, index) => {
        return {
            id: item.pk,
            url: item.link,
            title: item.songName,
            artist: item.songDetail,
            artwork: item.url,
        }
    });

    const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);
    const progress = useSelector(state => state.playSongReducer.progress);
    const { position, duration } = useProgress();

    //--------Thanh progress-----------
    useEffect(() => {
        const durationNew = duration == 0 ? 1 : duration;
        const calculatedProgress = (position / durationNew) * 100;
        dispatch({
            type: PROGRESS, payload: calculatedProgress.toFixed(0)
        });
    }, [position, duration]);

    //--------Tu dong chuyen bai hat----------
    useTrackPlayerEvents(['playback-track-changed'], async (event) => {
        console.log('Track changed:', event);
        const trackObject = await TrackPlayer.getTrack(event.nextTrack);
        const itemSongNew = {
            pk : trackObject.id,
            link : trackObject.url,
            songName : trackObject.title,
            songDetail : trackObject.artist,
            url : trackObject.artwork,
        }
        // if(indexSong == trackObject.id) return;
        dispatch({ type: PLAY, payload: {
            isPlaying: true,
            itemSongPlaying:  itemSongNew ,
            listSong: listSong,
            indexSong: indexSong,
        } });
    });

    //-------Play nhac khi chon bai hoac chuyen bai-----------
    useEffect(() => {
        const setupPlayerAndPlay = async () => {
            if (!isPlayerInitialized) {
                await TrackPlayer.setupPlayer();
                await TrackPlayer.add(listTrack);
                setIsPlayerInitialized(true);
            }
            await TrackPlayer.play();
            await TrackPlayer.skip(indexSong);
            dispatch({
                type: PROGRESS, payload: 0
            });
        };
        setupPlayerAndPlay();
    }, [indexSong]);

    //---------Play/Pause nhac----------
    const playMusic = async () => {
        if (isPlay) {
            dispatch({ type: PAUSE });
            await TrackPlayer.pause();
        } else {
            dispatch({ type: REPLAY });
            await TrackPlayer.play();
        }
    }

    //--------Chuyen bai tiep theo----------
    const nextMusic = async () => {
        dispatch({
            type: NEXT, payload: {
                indexSong: indexSong,
            }
        });
        // await TrackPlayer.skipToNext();
    }

    //-------Quay lai bai truoc---------
    const previousMusic = async () => {
        dispatch({
            type: PREVIOUS, payload: {
                indexSong: indexSong,
            }
        });
        // await TrackPlayer.skipToPrevious();
    }

    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            position: 'absolute',
            zIndex: 1000,
            height: 55,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: Color.bottobTabColor,
        }}>
            <Progress.Bar
                progress={progress / 100}
                height={2}
                color={Color.buttonColor}
                backgroundColor={Color.white}
                width={width}
            />
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    flex: 1,
                    paddingHorizontal: 10,
                    width: '100%'
                }}
                onPress={() => navigation.navigate('SRC002')}
            >


                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image
                        source={{ uri: url }}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 40,
                        }}
                        resizeMode='cover'
                    />
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginLeft: 10
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Roboto-Bold',
                            color: Color.white
                        }}>
                            {songName}
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Roboto-Regular',
                            color: Color.white
                        }}>
                            {songDetail}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Icon
                        name="skip-previous"
                        size={30}
                        color={Color.white}
                        onPress={() => previousMusic()}
                    />
                    {
                        isPlay ? (
                            <Icon
                                name="pause-circle-outline"
                                size={30}
                                color={Color.white}
                                onPress={() => playMusic()}
                            />
                        ) : (
                            <Icon
                                name="play-circle-outline"
                                size={30}
                                color={Color.white}
                                onPress={() => playMusic()}
                            />
                        )
                    }

                    <Icon
                        name="skip-next"
                        size={30}
                        color={Color.white}
                        onPress={() => nextMusic()}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SPControl