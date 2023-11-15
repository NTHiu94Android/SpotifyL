import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../../assest/colors';
import Home from './SRC001001';
import History from './SRC001002';
import Playlist from './SRC001003';
import Profile from './SRC001004';
import Spotify from './SRC001005';

const Tab = createBottomTabNavigator();

const SRC001 = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home-lightning-bolt' : 'home-lightning-bolt';
          } else if (route.name === 'Playlist') {
            iconName = focused
              ? 'playlist-music' : 'playlist-music';
          } else if (route.name === 'Spotify') {
            iconName = focused
              ? 'spotify' : 'spotify';
          } else if (route.name === 'History') {
            iconName = focused
              ? 'history' : 'history';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'account' : 'account-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Color.buttonColor,
        tabBarInactiveTintColor: 'white',
        initialRouteName: 'Home',
        tabBarStyle: {
          backgroundColor: Color.bottobTabColor,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Tab.Screen options={{ headerShown: false }} name="Playlist" component={Playlist} />
      <Tab.Screen options={{ headerShown: false }} name="Spotify" component={Spotify} />
      <Tab.Screen options={{ headerShown: false }} name="History" component={History} />
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default SRC001