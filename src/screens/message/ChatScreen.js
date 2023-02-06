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
      flex={1}
      backgroundColor={COLOR.lightPink}
      rounded={0}
      indexSticky={[-1]}>
      <ChatCard />
      <ChatCard reverse />
      <ChatCard />
      <ChatCard reverse />
      <ChatCard />
      <ChatCard reverse />

      <TextInput />
    </Background>
  );
};
export default ChatScreen;
