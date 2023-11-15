import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Color from '../../assest/colors'
import Icon from 'react-native-vector-icons/Ionicons';

const ITSong = ({
  url,
  borderImg = 80,
  songName,
  songDetail,
  onPressSong,
  hasIconRight,
  iconRight,
  iconRightColor = Color.white,
  iconSize = 18,
  onPressIcon,
  marginTop = 0,
  marginBottom = 0,
}) => {
  return (
    <View style={{
      flexDirection: 'row',
      flex: 1,
      paddingVertical: 10,
      marginTop: marginTop,
      marginBottom: marginBottom,
    }}>
      <TouchableOpacity 
        onPress={onPressSong}
        style={{
          width: '90%'
        }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <Image
            source={{ uri: url }}
            style={{
              width: 80,
              height: 80,
              borderRadius: borderImg,
            }}
            resizeMode='contain'
          />
          <View style={{
            flexDirection: 'column',
            alignSelf: 'center',
            marginLeft: 10
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'Roboto-Bold',
              color: Color.white
            }}>
              {songName}
            </Text>

            <Text style={{
              fontSize: 12,
              fontFamily: 'Roboto',
              marginTop: 10,
              color: Color.white
            }}>
              {songDetail}
            </Text>

          </View>
        </View>
      </TouchableOpacity>

      {
        hasIconRight ? (
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%'
          }}>
            <Icon
              name={iconRight}
              size={iconSize}
              color={iconRightColor}
              onPress={onPressIcon}
            />
          </View>
        ) : null
      }

    </View>
  )
}

export default ITSong