import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Color from '../../../assest/colors';
import { SPHeader, ITAlbum, SPTab, SPTabGroup1, SPControl } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import {SPImgDF} from '../../../assest/images/Default'

const Home = () => {
  const navigation = useNavigation();
  const defaultUrl = SPImgDF;
  const isShowControl = useSelector(state => state.playSongReducer.isShowControl);
  const itemSongPlaying = useSelector(state => state.playSongReducer.itemSongPlaying);
  const indexSong = useSelector(state => state.playSongReducer.indexSong);
  const listSongReducer = useSelector(state => state.playSongReducer.listSong);

  const [listAlbum, setListAlbum] = useState([
    {
      pk: 1,
      url: defaultUrl,
      albumName: 'Album 1',
      albumDetail: 'Album 1 albumDetail'
    },
    {
      pk: 2,
      url: defaultUrl,
      albumName: 'Album 2',
      albumDetail: 'Album 2 albumDetail'
    },
    {
      pk: 3,
      url: defaultUrl,
      albumName: 'Album 3',
      albumDetail: 'Album 3 albumDetail'
    }
  ]);
  const [listSong, setListSong] = useState(listSong1);
  const [tabShow, setTabShow] = useState(1);

  const onClickSearch = () => {
    console.log('onClickSearch');
  }
  const onClickSetting = () => {
    console.log('onClickSetting');
  }
  const resultTab = (result) => {
    console.log('result', result);
    setTabShow(result);
    if (result == 1) {
      setListSong(listSong1);
    } else if (result == 2) {
      setListSong(listSong2);
    } else if (result == 3) {
      setListSong(listSong3);
    }
  }
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <SPHeader
        hasLogo={true}
        hasIconLeft={true}
        iconLeft="search-outline"
        iconLeftOnPress={onClickSearch}
        hasIconRight={true}
        iconRight="settings-outline"
        iconRightOnPress={onClickSetting}
      />
      {
        isShowControl && (
          <SPControl
            url={itemSongPlaying.url ? itemSongPlaying.url : defaultUrl}
            songName={itemSongPlaying.songName ? itemSongPlaying.songName : 'Song Name Undefined'}
            songDetail={itemSongPlaying.songDetail ? itemSongPlaying.songDetail : 'Song Detail Undefined'}
            indexSong={indexSong ? indexSong : 0}
          />
        )
      }
      <ScrollView style={{
        backgroundColor: Color.mainColor,
        flex: 1,
        marginBottom: isShowControl ? 55 : 0
      }}>
        <View style={{ padding: 10 }}>
          {/* --------------Slider------------------ */}
          <View style={{
            borderRadius: 10,
            overflow: 'hidden',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.white
          }}>
            <FlatListSlider
              data={listAlbum}
              imageKey={'url'}
              timer={2000}
              height={200}
              onPress={item => console.log(JSON.stringify(item))}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
              indicatorActiveColor={'#8e44ad'}
              indicatorInActiveColor={'#ffffff'}
              indicatorActiveWidth={30}
              animation
            />
          </View>

          {/* --------------Album ------------------- */}
          <View>
            <Text style={{
              color: Color.white,
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
              fontFamily: 'Roboto-Bold',
              marginBottom: 12
            }}>
              Today's Top Hits
            </Text>
            <FlatList
              data={listAlbum}
              renderItem={({ item }) =>
                <View style={{
                  marginRight: 10
                }}>
                  <ITAlbum
                    url={item.url}
                    albumName={item.albumName}
                    detail={item.albumDetail}
                    padding={6}
                    hasIcon={true}
                    iconName="play-circle-outline"
                    iconSize={24}
                    iconColor={Color.white}
                  />
                </View>
              }
              keyExtractor={item => item.pk}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* --------------TabSong ------------------- */}
          <View style={{
            marginTop: 20
          }}>
            <SPTab
              data={['Artists', 'Albums', 'Songs']}
              resultTab={resultTab}
              hasSelected={tabShow}
            />
            {
              tabShow === 1
                ? <SPTabGroup1 dataToTab={listSong} navigation={navigation} />
                : tabShow === 2
                  ? <SPTabGroup1 dataToTab={listSong} navigation={navigation} />
                  : <SPTabGroup1 dataToTab={listSong} navigation={navigation} />
            }
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default Home;

const listSong1 = [
  {
    pk: 1,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 1',
    songDetail: 'Song 1 songDetail', 
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 2,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 2',
    songDetail: 'Song 2 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 3,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 3',
    songDetail: 'Song 3 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 4,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 4',
    songDetail: 'Song 4 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 5,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 5',
    songDetail: 'Song 5 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 6,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 6',
    songDetail: 'Song 6 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 7,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 7',
    songDetail: 'Song 7 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 8,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 8',
    songDetail: 'Song 8 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 9,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 9',
    songDetail: 'Song 9 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
];

const listSong2 = [
  {
    pk: 1,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 1',
    songDetail: 'Song 1 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 2,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 2',
    songDetail: 'Song 2 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 3,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 3',
    songDetail: 'Song 3 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 4,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 4',
    songDetail: 'Song 4 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 5,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 5',
    songDetail: 'Song 5 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 6,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 6',
    songDetail: 'Song 6 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
]

const listSong3 = [
  {
    pk: 1,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 1',
    songDetail: 'Song 1 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 2,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 2',
    songDetail: 'Song 2 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 3,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 3',
    songDetail: 'Song 3 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 4,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 4',
    songDetail: 'Song 4 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 5,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 5',
    songDetail: 'Song 5 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 6,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 6',
    songDetail: 'Song 6 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  },
  {
    pk: 7,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 7',
    songDetail: 'Song 7 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700068683/SpotifyL/Kh%C3%B3a_Ly_Bi%E1%BB%87t_q5bpbj.mp3'
  },
  {
    pk: 8,
    url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
    songName: 'Song 8',
    songDetail: 'Song 8 songDetail',
    link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
  }
]