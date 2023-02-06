import Button from '@components/Button';
import {DotsThreeVerticalIcon} from '@components/Icon';
import Text from '@components/Text';
import View from '@components/View';
import COLOR from '@constants/COLOR';

const TopArticle = () => {
  return (
    <View
      layout="row"
      height={40}
      backgroundColor={COLOR.yellow}
      width="100%"
      justifyContent="space-between"
      alignItems="center">
      <View height={20} width={50} backgroundColor={COLOR.lightBlue}></View>
      <Button
        onPress={() => console.log('Press!')}
        disableOpacity
        justifyContent="center"
        alignItems="center">
        <DotsThreeVerticalIcon />
      </Button>
    </View>
  );
};
export default TopArticle;
