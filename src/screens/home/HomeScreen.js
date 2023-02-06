import Background from '@components/Background';


import View from '@components/View';

import {StyleSheet} from 'react-native';
import {Article} from './components/article';
import {Navbar} from './components/navbar';

function HomeScreen() {
  return (
    <Background>
      <View gap={10}>
        <Navbar />
        <Article />
        <Article />
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({});
export default HomeScreen;
