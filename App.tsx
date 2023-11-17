import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { View, Text, Image } from 'react-native'
import { LogBox, SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import AppIntroSlider from 'react-native-app-intro-slider';
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Redux
import Redux from './src/redux/stores';
//Colors
import Color from './src/assest/colors';
//Screens
import SRC001 from './src/screens/SRC001';
import SRC002 from './src/screens/SRC002';
import SRC003 from './src/screens/SRC003';
//Create Stack 
const Stack = createStackNavigator();

LogBox.ignoreLogs(["Warning: ", "EventEmitter.removeListener"]);
LogBox.ignoreAllLogs();

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('./src/assest/images/logo_lg.png'),
      backgroundColor: '#59b2ab',
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setShowRealApp(true);
    }, 2000);
  }, []);

  return (
    <Provider store={Redux.store}>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: Color.mainColor
      }}>
        {
          !showRealApp ? (
            <AppIntroSlider
              renderItem={({ item }) => (
                <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Color.mainColor
                }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 270,
                      height: 80,
                    }}
                    resizeMode='contain'
                  />
                </View>
              )}
              data={slides}
              showPrevButton={false}
              bottomButton={false}
              showSkipButton={false}
              showDoneButton={false}
            />
          ) : (
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="SRC001"
                screenOptions={{
                  headerShown: false,
                  gestureEnabled: false
                }}
              >
                <Stack.Screen name="SRC001" component={SRC001} />
                <Stack.Screen
                  name="SRC002"
                  component={SRC002}
                  options={{
                    cardStyleInterpolator: ({ current, layouts }) => ({
                      cardStyle: {
                        transform: [
                          {
                            translateY: current.progress.interpolate({
                              inputRange: [0, 1],
                              outputRange: [layouts.screen.height, 0],
                            })
                          },
                        ],
                      },
                    }),
                  }}
                />
                <Stack.Screen name="SRC003" component={SRC003} />

              </Stack.Navigator>
            </NavigationContainer>
          )
        }
      </SafeAreaView>
    </Provider>
  )
}

export default App;