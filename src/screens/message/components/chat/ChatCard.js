import View from '@components/View';
import COLOR from '@constants/COLOR';

const ChatCard = ({reverse}) => {
  return (
    <View>
      {reverse ? (
        <View backgroundColor={COLOR.yellow} layout="row" height={70} gap={10}>
          <View backgroundColor={COLOR.white} width="100%" flex={1}></View>
          <View
            backgroundColor={COLOR.lightBlue}
            width={50}
            height={50}
            rounded={25}></View>
        </View>
      ) : (
        <View backgroundColor={COLOR.yellow} layout="row" height={70} gap={10}>
          <View
            backgroundColor={COLOR.lightBlue}
            width={50}
            height={50}
            rounded={25}></View>
          <View backgroundColor={COLOR.white} width="100%" flex={1}></View>
        </View>
      )}
    </View>
  );
};
export default ChatCard;
