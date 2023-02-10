import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const sizeIcon = 20;
const HomeIcon = () => {
  return <Ionicons name="md-home" size={sizeIcon}></Ionicons>;
};
const HomeOutLineIcon = () => {
  return <Ionicons name="md-home-outline" size={sizeIcon}></Ionicons>;
};
const DotsThreeVerticalIcon = () => {
  return <Entypo name="dots-three-vertical" size={sizeIcon}></Entypo>;
};
const SettingIcon = () => {
  return <Ionicons name="settings" size={sizeIcon}></Ionicons>;
};
const SettingOutLineIcon = () => {
  return <Ionicons name="settings-outline" size={sizeIcon}></Ionicons>;
};
const MessageIcon = () => {
  return <Ionicons name="chatbox" size={sizeIcon}></Ionicons>;
};
const MessageOutLineIcon = () => {
  return <Ionicons name="chatbox-outline" size={sizeIcon}></Ionicons>;
};
const EmojiIcon = () => {
  return <Entypo name="emoji-happy" size={sizeIcon}></Entypo>;
};
const SendIcon = () => {
  return <Ionicons name="send" size={sizeIcon}></Ionicons>;
};
const UserIcon = () => {
  return <FontAwesome name="user-circle" size={sizeIcon}></FontAwesome>;
};
const UserOutLineIcon = () => {
  return <FontAwesome name="user-o" size={sizeIcon}></FontAwesome>;
};
export {
  HomeIcon,
  HomeOutLineIcon,
  SettingIcon,
  SettingOutLineIcon,
  DotsThreeVerticalIcon,
  MessageIcon,
  MessageOutLineIcon,
  EmojiIcon,
  SendIcon,
  UserIcon,
  UserOutLineIcon,
};
