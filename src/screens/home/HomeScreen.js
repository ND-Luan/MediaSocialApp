import Background from '@components/Background';

import View from '@components/View';

import {StyleSheet} from 'react-native';
import {Article} from './components/article';
import {Navbar} from './components/navbar';

function HomeScreen() {
  return (
    <Background >
      <Navbar />
      <Article />
      <Article />
    </Background>
  );
}
const styles = StyleSheet.create({});
export default HomeScreen;
