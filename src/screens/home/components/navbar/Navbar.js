import Button from '@components/Button';
import Box from '@components/Button';
import {
  AddIcon,
  IconButton,
  rocketIcon,
  MessageNavbarIcon,
} from '@components/Icon';

import ItemList from '@components/ItemList';
import Text from '@components/Text';
import View from '@components/View';
import COLOR from '@constants/COLOR';
import CircleButton from './CircleButton';
import Logo from './Logo';

const Navbar = () => {
  return (
    <View
      layout="row"
      width="100%"
      height={70}
      backgroundColor={COLOR.lightPink}
      gap={10}
      justifyContent="space-between"
      alignItems="center">
      <Logo height="100%" width={150} resize="cover" />
      <View layout="row" gap={5}>
        <CircleButton size={50}>
          <AddIcon color={COLOR.yellow} />
        </CircleButton>
        <CircleButton size={50}>
          <MessageNavbarIcon color={COLOR.yellow} />
        </CircleButton>
      </View>
    </View>
  );
};

export default Navbar;
