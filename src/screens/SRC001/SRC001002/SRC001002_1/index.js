import { View, Text, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SPHeader, ITAlbum, ITSong, SPControl } from '../../../../components';
import Color from '../../../../assest/colors';
import { SPImgDF } from '../../../../assest/images/Default';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');

const SRCOO1OO2_1 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isShowControl = useSelector(state => state.playSongReducer.isShowControl);
    const itemSongPlaying = useSelector(state => state.playSongReducer.itemSongPlaying);
    const indexSong = useSelector(state => state.playSongReducer.indexSong);
    const [listSong, setListSong] = useState([
        {
            _id: 1,
            url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
            songName: 'Song 1',
            songDetail: 'Song 1 songDetail',
            link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
        },
        {
            _id: 2,
            url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
            songName: 'Song 2',
            songDetail: 'Song 2 songDetail',
            link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
        },
        {
            _id: 3,
            url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
            songName: 'Song 3',
            songDetail: 'Song 3 songDetail',
            link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
        },
        {
            _id: 4,
            url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
            songName: 'Song 4',
            songDetail: 'Song 4 songDetail',
            link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
        },
        {
            _id: 5,
            url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
            songName: 'Song 5',
            songDetail: 'Song 5 songDetail',
            link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
        },
        {
            _id: 6,
            url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
            songName: 'Song 6',
            songDetail: 'Song 6 songDetail',
            link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
        },
    ]);
    const [isShowHeaderTitleOpacity, setIsShowHeaderTitleOpacity] = useState(0);
    const [isShowAlbumOpacity, setIsShowAlbumOpacity] = useState(1);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.y;
        if (scrollPosition > 10 && scrollPosition < 20) {
            setIsShowHeaderTitleOpacity(0.2);
            setIsShowAlbumOpacity(0.9);
        } else if (scrollPosition > 20 && scrollPosition < 40) {
            setIsShowHeaderTitleOpacity(0.4);
            setIsShowAlbumOpacity(0.7);
        } else if (scrollPosition > 40 && scrollPosition < 60) {
            setIsShowHeaderTitleOpacity(0.6);
            setIsShowAlbumOpacity(0.5);
        } else if (scrollPosition > 60 && scrollPosition < 80) {
            setIsShowHeaderTitleOpacity(0.8);
            setIsShowAlbumOpacity(0.3);
        } else if (scrollPosition > 80) {
            setIsShowHeaderTitleOpacity(1);
            setIsShowAlbumOpacity(0.2);
        } else {
            setIsShowHeaderTitleOpacity(0);
            setIsShowAlbumOpacity(1);
        }
    }

    const handlePlayShuffle = () => {
        console.log('play shuffle');
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.mainColor,
        }}>
            <SPHeader
                hasIconLeft={true}
                iconLeft={'arrow-back-outline'}
                iconLeftOnPress={() => navigation.goBack()}
                hasTitle={true}
                title={'Album Phan Manh Quynh'}
                titleOpacity={isShowHeaderTitleOpacity}
            />
            {
                isShowControl && (
                    <SPControl
                        url={itemSongPlaying.url ? itemSongPlaying.url : SPImgDF}
                        songName={itemSongPlaying.songName ? itemSongPlaying.songName : 'Song Name Undefined'}
                        songDetail={itemSongPlaying.songDetail ? itemSongPlaying.songDetail : 'Song Detail Undefined'}
                        indexSong={indexSong ? indexSong : 0}
                        navigation={navigation}
                        isReplay={false}
                    />
                )
            }
            <ScrollView
                onScroll={(event) => handleScroll(event)}
                style={{
                    flex: 1,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    height: '100%',
                    marginBottom: isShowControl ? 55 : 0
                }}
            >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <ITAlbum
                        url={SPImgDF}
                        widthImg={width - 100}
                        heightImg={width - 100}
                        hasIcon={true}
                        iconName={'play-outline'}
                        iconSize={50}
                        iconColor={Color.white}
                        albumName={'Nhung bai hat hay nhat cua Phan Manh Quynh'}
                        albumSize={20}
                        albumColor={Color.white}
                        detail={'10 songs - 1 hour 30 minutes'}
                        detailSize={14}
                        detailColor={Color.white}
                        justifyContent={'center'}
                        alignItems={'center'}
                        opacity={isShowAlbumOpacity}
                    />

                    <View style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 30,
                        marginBottom: 10,
                        width: '100%',
                    }}>
                        <View style={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 50,
                            flex: 1,
                        }}>
                            <Icon
                                name={'download-outline'}
                                size={24}
                                color={Color.white}
                            />
                            <Text style={{
                                color: Color.white,
                                fontSize: 12,
                                fontFamily: 'Roboto-reguler',
                            }}>Download</Text>

                        </View>

                        <View style={{
                            backgroundColor: Color.buttonColor,
                            height: 50,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 3,
                            marginLeft: 10,
                        }}>
                            <TouchableOpacity onPress={() => handlePlayShuffle()}>
                                <Text style={{
                                    color: Color.white,
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto-Bold'
                                }}>
                                    PLAY SHUFFLE
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            height: 50,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flex: 1
                        }}>
                            <Icon
                                name={'heart-outline'}
                                size={24}
                                color={Color.white}
                            />
                            <Text style={{
                                color: Color.white,
                                fontSize: 12,
                                fontFamily: 'Roboto-reguler',
                            }}>Like</Text>
                        </View>

                    </View>

                    {
                        listSong.length > 0 && listSong.map((item, index) => {
                            return (
                                <View
                                    key={item._id.toString()}
                                    style={{
                                        width: '100%',
                                        paddingHorizontal: 10,

                                    }}
                                >
                                    <ITSong
                                        url={item.url}
                                        imgWidth={50}
                                        imgHeight={50}
                                        songName={item.songName}
                                        songNameSize={16}
                                        songNameColor={Color.white}
                                        songDetail={item.songDetail}
                                        songDetailSize={12}
                                        songDetailColor={Color.white}
                                        hasIconRight={true}
                                        iconRight={'ellipsis-horizontal-outline'}
                                        iconSize={20}
                                        iconRightColor={Color.white}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                        onPress={() => console.log('song')}
                                    />
                                </View>
                            )


                        })
                    }

                </View>


            </ScrollView>
        </View>
    )
}

export default SRCOO1OO2_1;