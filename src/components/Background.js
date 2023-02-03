import {SafeAreaView, StyleSheet, View} from 'react-native';

function Background({children}) {
  return <SafeAreaView style={styles.background}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Background;
