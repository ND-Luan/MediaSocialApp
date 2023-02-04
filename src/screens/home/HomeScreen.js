import Background from '@components/Background';
import Text from '@components/Text';
import COLOR from '@constants/COLOR';
import FONTSIZE from '@constants/FONTSIZE';
import { StyleSheet, View } from 'react-native';
function HomeScreen() {
  return (
    <Background>
      <Text>
        Home!
      </Text>
    </Background>
  );
}
const styles = StyleSheet.create({});
export default HomeScreen;
