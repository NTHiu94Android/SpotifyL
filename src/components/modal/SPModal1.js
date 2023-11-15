import { View, Text } from 'react-native'
import React from 'react'

const SPModal1 = ({
    isShow
}) => {
    return (
        <View>
            {
                isShow ? <View>
                    <Text>SPModal1</Text>
                </View> : null
            }
        </View>
    )
}

export default SPModal1