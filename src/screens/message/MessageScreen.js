import Background from '@components/Background';
import Text from '@components/Text';
import View from '@components/View';
import {Card} from './components/card';

const MessageScreen = ({navigation}) => {
  return (
    <Background>
      <Text>Chat</Text>
      <Card onPress={() => navigation.navigate('ChatScreen')} />
      <Card />
      <Card />
      <Card />
      <Card />
    </Background>
  );
};
export default MessageScreen;
