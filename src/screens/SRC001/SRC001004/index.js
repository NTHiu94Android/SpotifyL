import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Color from '../../../assest/colors';
import { SPHeader, ITSong } from '../../../components';
import { SPImgDF } from '../../../assest/images/Default';

const History = () => {
  const [listSongToday, setListSongToday] = useState([
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
  ]);
  const [listSongYesterday, setListSongYesterday] = useState([
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
    {
      _id: 7,
      url: 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg',
      songName: 'Song 7',
      songDetail: 'Song 7 songDetail',
      link: 'https://res.cloudinary.com/dn46v6yn9/video/upload/v1700060620/SpotifyL/M%E1%BB%91i_T%C3%ACnh_Kh%C3%B4ng_T%C3%AAn_fkrudy.mp3'
    },
  ]);
  return (
    <View style={{
      flex: 1,
      backgroundColor: Color.mainColor
    }}>
      <SPHeader
        hasTitle={true}
        title={'History'}
        titleSize={20}
        titleColor={Color.white}
        backgroundColor={Color.mainColor}
        hasIconRight={true}
        iconRight='ellipsis-horizontal-outline'
        iconRightOnPress={() => console.log('Icon Right')}
      />
      <ScrollView
        style={{
          flex: 1,
          height: '100%',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
          <Text style={{
            color: Color.white,
            fontSize: 18,
            fontWeight: 'bold',
            fontFamily: 'Roboto-Bold',
            marginBottom: 10
          }}>
            Today
          </Text>

          {
            listSongToday.length > 0 && listSongToday.map((item, index) => {
              return (
                <View
                  key={item._id.toString()}
                  style={{ width: '100%' }}
                >
                  <ITSong
                    url={item.url}
                    imgWidth={64}
                    imgHeight={64}
                    borderImg={12}
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

          <TouchableOpacity
            onPress={() => console.log('See all 28 played songs')}
          >
            <Text style={{
              color: Color.white,
              fontSize: 14,
              fontFamily: 'Roboto',
              marginTop: 10,
              marginBottom: 10
            }}>
              See all 28 played songs
            </Text>
          </TouchableOpacity>

        </View>

        <View style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
          <Text style={{
            color: Color.white,
            fontSize: 18,
            fontWeight: 'bold',
            fontFamily: 'Roboto-Bold',
            marginBottom: 10
          }}>
            Yesterday
          </Text>

          {
            listSongYesterday.length > 0 && listSongYesterday.map((item, index) => {
              return (
                <View
                  key={item._id.toString()}
                  style={{ width: '100%' }}
                >
                  <ITSong
                    url={item.url}
                    imgWidth={64}
                    imgHeight={64}
                    borderImg={12}
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

          <TouchableOpacity
            onPress={() => console.log('See all 28 played songs')}
          >
            <Text style={{
              color: Color.white,
              fontSize: 14,
              fontFamily: 'Roboto',
              marginTop: 10,
              marginBottom: 10
            }}>
              See all 28 played songs
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  )
}

export default History