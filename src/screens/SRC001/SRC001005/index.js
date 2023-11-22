import { View, Text, Dimensions, Image, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SPHeader, ITSong } from '../../../components';
import Color from '../../../assest/colors';
import { SPImgDF } from '../../../assest/images/Default';

const height = Dimensions.get('window').height;

const Profile = () => {
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
  return (
    <View style={{
      flex: 1,
      backgroundColor: Color.mainColor
    }}>
      <SPHeader
        hasTitle={true}
        title='Profile'
        backgroundColor={Color.bottobTabColor}
        hasIconRight={true}
        iconRight='ellipsis-horizontal-outline'
      />
      <ScrollView
        style={{
          flex: 1,
          height: '100%'
        }}
        showsVerticalScrollIndicator={false}
      >

        <View style={{
          height: height / 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Color.bottobTabColor,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40
        }}>
          <Image
            source={{ uri: SPImgDF }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50
            }}
            resizeMode='contain'
          />
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              color: Color.white
            }}>
              Fauzian Ahmad
            </Text>
            <Text style={{
              fontSize: 14,
              fontFamily: 'Roboto',
              color: Color.white
            }}>
              fauzianahmad04@gmail.com
            </Text>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            marginTop: 20
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 14,
                fontFamily: 'Roboto',
                color: Color.white,
                opacity: 0.8
              }}>
                Followers
              </Text>
              <Text style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: Color.white
              }}>
                129
              </Text>
            </View>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 14,
                fontFamily: 'Roboto',
                color: Color.white,
                opacity: 0.8
              }}>
                Following
              </Text>
              <Text style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: Color.white
              }}>
                228
              </Text>
            </View>

          </View>

        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Icon
              name='account-multiple-plus-outline'
              size={30}
              color={Color.white}
            />
            <Text style={{
              fontSize: 16,
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              color: Color.white
            }}>
              Find Friends
            </Text>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Icon
              name='share-outline'
              size={30}
              color={Color.white}
            />
            <Text style={{
              fontSize: 16,
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              color: Color.white
            }}>
              Share
            </Text>
          </View>

        </View>

        <View style={{
          flex: 1,
          paddingHorizontal: 10,
          marginTop: 20,
        }}>
          <Text style={{
            fontSize: 18,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: Color.white,
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 10
          }}>
            Mostly Played
          </Text>

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
        </View>

      </ScrollView>


    </View>
  )
}

export default Profile