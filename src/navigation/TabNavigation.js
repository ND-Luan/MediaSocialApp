import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home/HomeScreen';

import {
  HomeIcon,
  HomeOutLineIcon,
  MessageIcon,
  MessageOutLineIcon,
  SettingIcon,
  SettingOutLineIcon,
} from '@components/Icon';
import SettingScreen from '@screens/setting/SettingScreen';
import MessageScreen from '@screens/message/MessageScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          switch (route.name) {
            case 'Home':
              if (focused) return <HomeIcon /> ;
              return <HomeOutLineIcon />;
            case 'Message':
              if (focused) return <MessageIcon />;
              return <MessageOutLineIcon />;
            case 'Settings':
              if (focused) return <SettingIcon />;
              return <SettingOutLineIcon />;
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarBackground: () => {},
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
