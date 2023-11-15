import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Color from '../../assest/colors'
import Icon from 'react-native-vector-icons/Ionicons';

const ITAlbum = ({
  url,
  onPress,
  widthImg = 128,
  heightImg = 128,
  borderImg = 12,
  hasIcon = false,
  iconName,
  iconSize = 18,
  iconColor = Color.white,
  albumName,
  albumSize = 14,
  albumColor = Color.white,
  detail,
  detailSize = 12,
  detailColor = Color.white,
  paddingHorizontal = 0,
  paddingVertical = 0,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        width: widthImg,
      }}>
        <View style={{
          position: 'relative'
        }}>
          <Image
            source={{ uri: url }}
            style={{
              width: widthImg,
              height: heightImg,
              borderRadius: borderImg
            }}
            resizeMode='contain'
          />
          {
            hasIcon && (
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 16,
                right: 8
              }}>
                <Icon
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                />
              </View>
            )
          }
        </View>
        <Text 
          numberOfLines={1}
          style={{
          color: albumColor,
          fontSize: albumSize,
          fontFamily: 'Roboto-Bold',
          fontWeight: 'bold',
          marginTop: 4
        }}>
          {albumName}
        </Text>
        <Text 
          numberOfLines={1}
          style={{
          color: detailColor,
          fontSize: detailSize,
          fontFamily: 'Roboto',
          marginTop: 4
        }}>
          {detail}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ITAlbum