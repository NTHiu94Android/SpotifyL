import { View } from 'react-native'
import Swiper from 'react-native-swiper';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ITSong } from '../../components';
import {PLAY} from '../../redux/actions'

const Tab = ({ dataToTab, navigation }) => {
    const dispatch = useDispatch();
    const [dataGroup, setDataGroup] = useState([]);
    const [keyForSwiper, setKeyForSwiper] = useState(Date.now());

    const playMusic = async (item) => {
        dispatch({ type: PLAY, payload: {
            isPlaying: true,
            itemSongPlaying:  item ,
            listSong: dataToTab,
            indexSong: dataToTab.indexOf(item),
        } });
        navigation.navigate('SRC002');
    }
    
    useEffect(() => {
        if (dataToTab.length === 0 || dataToTab == undefined) return;
        let count = 0;
        let arr = [];
        let arrGroup = [];
        for (let i = 0; i < dataToTab.length; i++) {
            if (count === 4) {
                arrGroup.push(arr);
                arr = [];
                count = 0;
            }
            arr.push(dataToTab[i]);
            count++;
        }
        if (arr.length > 0) {
            arrGroup.push(arr);
        }
        setDataGroup(arrGroup);
        setKeyForSwiper(Date.now());
        console.log('dataGroup', arrGroup.length);
    }, [dataToTab]);


    return (
        <View style={{}}>
            <Swiper
                loop={false}
                height={'100%'}
                showsPagination={false}
                key={keyForSwiper}
            >
                {dataGroup.map((group, index) => (
                    <View key={index}>
                        {group.map((item, itemIndex) => (
                            <View key={itemIndex} >
                                <ITSong
                                    key={itemIndex}
                                    url={item.url}
                                    borderImg={80}
                                    songName={item.songName}
                                    songDetail={item.songDetail}
                                    onPressSong={() => playMusic(item)}
                                    hasIconRight={true}
                                    iconRight={'heart-outline'}
                                    iconRightColor={'white'}
                                    iconSize={18}
                                    onPressIcon={() => console.log('onPressIcon')}
                                />
                            </View>
                        ))}
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

export default Tab;