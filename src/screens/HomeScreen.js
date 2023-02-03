import Background from '@components/Background';
import Text from '@components/Text';
import FONTSIZE from '@constants/FONTSIZE';
import {StyleSheet, View} from 'react-native';
function HomeScreen() {
  return (
    <Background>
      <Text fontSize={FONTSIZE.default} style={styles.text}>
        Home!
      </Text>
    </Background>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
export default HomeScreen;
