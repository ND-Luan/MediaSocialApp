import Button from '@components/Button';
import Text from '@components/Text';
import View from '@components/View';
import COLOR from '@constants/COLOR';

const Settings = () => {
  return (
    <View
      layout="column"
      backgroundColor={COLOR.lightPink}
      width="100%"
      flex={1}>
      <Text>Settings</Text>
      <View
        layout="row"
        justifyContent="space-between"
        flexWarp="wrap"
        gap={15}>
        <Button
          height={100}
          width={100}
          backgroundColor={COLOR.yellow}
          rounded={10}></Button>
        <Button
          height={100}
          width={100}
          backgroundColor={COLOR.yellow}
          rounded={10}></Button>
        <Button
          height={100}
          width={100}
          backgroundColor={COLOR.yellow}
          rounded={10}></Button>
        <Button
          height={100}
          width={100}
          backgroundColor={COLOR.yellow}
          rounded={10}></Button>
        <Button
          height={100}
          width={100}
          backgroundColor={COLOR.yellow}
          rounded={10}></Button>
        <Button
          height={100}
          width={100}
          backgroundColor={COLOR.yellow}
          rounded={10}></Button>
        <Button
          height={100}
          width={100}
          backgroundColor={COLOR.yellow}
          rounded={10}></Button>
      </View>
    </View>
  );
};
export default Settings;
