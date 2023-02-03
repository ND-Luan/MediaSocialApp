import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import SettingScreen from '@screens/SettingScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={SettingScreen}  options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};
export default TabNavigation;
