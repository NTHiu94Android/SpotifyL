import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const SPTab = ({ data, resultTab, hasSelected }) => {
    const [dataTab, setDataTab] = useState([]);
    useEffect(() => {
        if (data.length === 0 || data == undefined) return;
        let arrTemp = [];
        for (let i = 0; i < data.length; i++) {
            dataTemp = {
                pk: i + 1,
                tabName: data[i],
            }
            arrTemp.push(dataTemp);
        }
        setDataTab(arrTemp);
    }, [data]);

    const handleResult = (item) => {
        console.log('Item RST: ', item);
        resultTab(item.pk);
    }

    return (
        <View>
            <FlatList
                data={dataTab}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => handleResult(item)}>
                        <View style={{
                            marginRight: 10,
                            borderRadius: 20,
                            paddingVertical: 5,
                            marginBottom: 5,
                            marginRight: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                color: Color.white,
                                opacity: hasSelected === item.pk ? 1 : 0.6,
                                fontSize: 20,
                                fontWeight: 'bold',
                                fontFamily: 'Roboto-Bold',
                            }}>{item.tabName}</Text>
                            {
                                hasSelected === item.pk && (
                                    <View style={{
                                        backgroundColor: Color.buttonColor,
                                        width: 15,
                                        height: 2,
                                        borderBottomEndRadius: 5,
                                        borderBottomStartRadius: 5,
                                    }} />
                                )
                            }

                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.pk}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default SPTab;