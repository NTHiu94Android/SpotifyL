import { View, Text, Image } from 'react-native'
import React from 'react'

const Playlist = () => {
    const url = 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg';
    return (
        <View>
            <Image
                source={{ uri: url }}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100
                }}
                resizeMode='contain'
            />
        </View>
    )
}

export default Playlist