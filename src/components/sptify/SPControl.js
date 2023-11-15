import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { PLAY, NEXT, PREVIOUS, PAUSE, REPLAY } from '../../redux/actions';
import Color from '../../assest/colors';
import React, { useEffect, useState } from 'react';
import TrackPlayer from 'react-native-track-player';

const SPControl = ({
    url,
    songName,
    songDetail,
    indexSong,
    link,
    pk
}) => {

    const dispatch = useDispatch();
    const isPlay = useSelector(state => state.playSongReducer.isPlaying);
    const listSong = useSelector(state => state.playSongReducer.listSong);
    const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);

    useEffect(() => {
        console.log('indexSong spcontrol', {
            indexSong: indexSong,
            pk: pk,
        });
        const listTrack = listSong.map((item, index) => {
            return {
                id: item.pk,
                url: item.link,
                title: item.songName,
                artist: item.songDetail,
                artwork: item.url,
            }
        });
        const setupPlayerAndPlay = async () => {
            // if(!isPlayerInitialized) {
            //     setIsPlayerInitialized(true);
            //     await TrackPlayer.setupPlayer();
            //     await TrackPlayer.add(listTrack);
            //     await TrackPlayer.play();
            // }else{
            //     await TrackPlayer.skip(indexSong);
            // }
            if(!isPlayerInitialized) {
                await TrackPlayer.setupPlayer();
                await TrackPlayer.add(listTrack);
                setIsPlayerInitialized(true);
            }
            await TrackPlayer.play();
            await TrackPlayer.skip(indexSong);

            
        };
        setupPlayerAndPlay();
    }, [indexSong]);

    const playMusic = async () => {
        if (isPlay) {
            dispatch({ type: PAUSE });
            await TrackPlayer.pause();
        } else {
            dispatch({ type: REPLAY });
            await TrackPlayer.play();
        }
    }

    const nextMusic = async () => {
        dispatch({
            type: NEXT, payload: {
                indexSong: indexSong,
            }
        });
        // await TrackPlayer.skipToNext();
    }
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
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
        </View>
    )
}

export default SPControl