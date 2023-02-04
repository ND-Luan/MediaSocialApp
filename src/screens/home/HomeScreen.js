import Background from '@components/Background';
import Text from '@components/Text';
import COLOR from '@constants/COLOR';
import FONTSIZE from '@constants/FONTSIZE';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './components/navbar';



function HomeScreen() {
  return (
    <Background >
      <Navbar />
    </Background>
  );
}
const styles = StyleSheet.create({});
export default HomeScreen;
