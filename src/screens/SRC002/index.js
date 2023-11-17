import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Color from '../../assest/colors';
import { SPHeader, ITAlbum, SPTab, SPTabGroup1, SPControl } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import {SPImgDF} from '../../assest/images/Default';
import SRC002001 from './SRC002001';

const SRC002 = () => {
  const navigation = useNavigation();
  return (
    <View style={{
      flex: 1,
      backgroundColor: Color.mainColor,
    }}>
      <SRC002001 navigation={navigation} />
    </View>
  )
}

export default SRC002