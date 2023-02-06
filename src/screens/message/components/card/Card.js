import View from '@components/View';
import COLOR from '@constants/COLOR';
import Text from '@components/Text';
import Button from '@components/Button';
const Card = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <View
        backgroundColor={COLOR.lightPink}
        height={100}
        width="100%"
        layout="row"
        alignItems="center"
        gap={10}>
        <View
          height={70}
          width={70}
          rounded={35}
          backgroundColor={COLOR.lightBlue}></View>
        <View
          layout="column"
          gap={10}
          backgroundColor={COLOR.yellow}
          width="100%"
          flex={1}>
          <Text>Title</Text>
          <Text>SubTitle</Text>
        </View>
      </View>
    </Button>
  );
};
export default Card;
