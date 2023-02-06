import Background from '@components/Background';
import Text from '@components/Text';
import View from '@components/View';
import {Card} from './components/card';

const MessageScreen = ({navigation}) => {
  return (
    <Background>
      <View gap={10}>
        <Text>Chat</Text>
        <Card onPress={() => navigation.navigate('ChatScreen')} />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </Background>
  );
};
export default MessageScreen;
