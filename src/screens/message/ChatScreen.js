import {EmojiIcon} from '@components/Icon';
import TextInput from '@components/TextInput';
import View from '@components/View';
import COLOR from '@constants/COLOR';
import ChatCard from './components/chat/ChatCard';
import Button from '@components/Button';
import Background from '@components/Background';
const ChatScreen = () => {
  return (
    <Background
      backgroundColor={COLOR.lightPink}
      padding={0}
      justifyContent="space-between">
      <View padding={0}>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </View>
      <TextInput />
    </Background>
  );
};
export default ChatScreen;
