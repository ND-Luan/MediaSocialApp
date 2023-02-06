import Button from '@components/Button';
import Text from '@components/Text';
import View from '@components/View';
import COLOR from '@constants/COLOR';

const Auth = () => {
  return (
    <View
      layout="row"
      backgroundColor={COLOR.lightPink}
      width="100%"
      height={70}
      alignItems="center"
      justifyContent="space-between"
      flex={1}>
      <View layout="row" alignItems="center" justifyContent="center" gap={5}>
        <View
          backgroundColor={COLOR.lightBlue}
          width={50}
          height={50}
          rounded={50}
        />
        <Button
          backgroundColor={COLOR.yellow}
          width={130}
          height="100%"></Button>
      </View>
      <View backgroundColor={COLOR.yellow} height="100%" width={60}></View>
    </View>
  );
};
export default Auth;
