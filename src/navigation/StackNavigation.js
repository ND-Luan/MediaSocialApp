import Text from '@components/Text';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '@screens/message/ChatScreen';
import HeaderTitleChat from './components/HeaderTitleChat';
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerShown: true,
            headerTitle: () => <HeaderTitleChat />,
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
