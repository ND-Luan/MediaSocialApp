import View from '@components/View';
import COLOR from '@constants/COLOR';
import Text from '@components/Text';

const HeaderTitleChat = () => {
  return (
    <View layout="row" gap={5} alignItems="center" padding={0}>
      <View
        backgroundColor={COLOR.lightBlue}
        width={50}
        height={50}
        rounded={25}></View>
      <View layout="column">
        <Text>Title</Text>
        <Text>SubTitle</Text>
      </View>
    </View>
  );
};
export default HeaderTitleChat;
