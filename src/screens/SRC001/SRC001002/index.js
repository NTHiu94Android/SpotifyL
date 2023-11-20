import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import React, {useState} from 'react';
import {SPHeader, ITAlbum} from '../../../components';
import Color from '../../../assest/colors';
import {SPImgDF} from '../../../assest/images/Default';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Playlist = () => {
    const navigation = useNavigation();
    const [listAlbum, setListAlbum] = useState([
        {
            _id: 1,
            name: 'Album 1',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 2,
            name: 'Album 2',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 3,
            name: 'Album 3',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 4,
            name: 'Album 4',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 5,
            name: 'Album 5',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 6,
            name: 'Album 6',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 7,
            name: 'Album 7',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 8,
            name: 'Album 8',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 9,
            name: 'Album 9',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 10,
            name: 'Album 10',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 11,
            name: 'Album 11',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 12,
            name: 'Album 12',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 13,
            name: 'Album 13',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 14,
            name: 'Album 14',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 15,
            name: 'Album 15',
            url: SPImgDF,
            detail: '10 songs'
        },
        {
            _id: 16,
            name: 'Album 16',
            url: SPImgDF,
            detail: '10 songs'
        },
    ]);

    const handleSearch = () => {
        console.log('search');
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.mainColor,
        }}>
            <SPHeader
                backgroundColor={Color.mainColor}
                hasTitle={true}
                title={'Playlist'}
                titleSize={20}
                hasIconLeft={true}
                iconLeft="search-outline"
                iconLeftSize={20}
                iconLeftOnPress={() => handleSearch()}
                hasIconRight={true}
                iconRight="add-outline"
                iconRightSize={20}
            />

            <View style={{
                flex: 1,
                alignItems: 'center',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
            }}>
                <FlatList
                    data={listAlbum}
                    keyExtractor={(item, index) => item._id.toString()}
                    numColumns={2}
                    renderItem={({item, index}) => {
                        return (
                            <View style={{
                                width: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <ITAlbum
                                    albumName={item.name}
                                    url={item.url}
                                    widthImg={width / 2 - 40}
                                    heightImg={width / 2 - 40}
                                    detail={item.detail}
                                    onPress={() => navigation.navigate('SRC001002_1')}
                                />
                            </View>
                        )
                    }}
                />
                


            </View>
        </View>
    )
};

export default Playlist