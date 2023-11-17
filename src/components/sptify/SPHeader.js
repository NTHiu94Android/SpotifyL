import { View, Text, Image } from 'react-native';
import React from 'react';
import Color from '../../assest/colors'
import Icon from 'react-native-vector-icons/Ionicons';

const SPHeader = ({
    hasIconLeft = false,
    iconLeft,
    iconLeftColor = Color.white,
    iconLeftSize = 20,
    iconLeftOnPress,
    hasIconRight = false,
    iconRight,
    iconRightColor = Color.white,
    iconRightSize = 20,
    iconRightOnPress,
    hasTitle = false,
    title,
    titleColor = Color.white,
    titleSize = 20,
    hasLogo = false,
    logo = require('../../assest/images/logo.png'),
    logoSize = 32,
    logoOnPress,
    backgroundColor = Color.mainColor,
    width = '100%',
    height,
    paddingTop = 30
}) => {
  return (
    <View style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingTop: paddingTop
    }}>
        {
            hasIconLeft ? (
                <Icon
                    name={iconLeft}
                    size={iconLeftSize}
                    color={iconLeftColor}
                    onPress={iconLeftOnPress}
                />
            ) : (
                <View style={{ width: iconLeftSize }} />
            )
        }
        {
            hasLogo ? (
                <Image
                    source={logo}
                    style={{
                        height: logoSize
                    }}
                    resizeMode='contain'
                    onPress={logoOnPress}
                />
            ) : null
        }
        {
            hasTitle ? (
                <Text
                    style={{
                        color: titleColor,
                        fontSize: titleSize,
                        fontFamily: 'Roboto-Bold',
                        fontWeight: 'bold'
                    }}
                >
                    {title}
                </Text>
            ) : null
        }
        {
            hasIconRight ? (
                <Icon
                    name={iconRight}
                    size={iconRightSize}
                    color={iconRightColor}
                    onPress={iconRightOnPress}
                />
            ) : (
                <View style={{ width: iconRightSize }} />
            )
        }
      
    </View>
  )
}

export default SPHeader