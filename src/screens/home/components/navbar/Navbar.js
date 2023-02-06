import Button from '@components/Button';
import Box from '@components/Button';
import {IconButton, rocketIcon} from '@components/Icon';

import ItemList from '@components/ItemList';
import Text from '@components/Text';
import View from '@components/View';
import COLOR from '@constants/COLOR';

const Navbar = () => {
  return (
    <View
      layout="row"
      width="100%"
      height={70}
      backgroundColor={COLOR.lightPink}
      gap={10}
      justifyContent="space-between"
      alignItems="center"
    >
      <View backgroundColor={COLOR.yellow} width={100} height="100%"/>
      <View layout="row" gap={5}>
        <View
          width={50}
          height={50}
          rounded={50}
          backgroundColor={COLOR.lightBlue}></View>
        <View
          width={50}
          height={50}
          rounded={50}
          backgroundColor={COLOR.lightBlue}></View>
      </View>
    </View>
  );
};

export default Navbar;
