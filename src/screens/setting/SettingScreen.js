import Background from '@components/Background';
import View from '@components/View';
import {Auth} from './components/auth';
import {Settings} from './components/settings';

function SettingScreen() {
  return (
    <Background >
      <View gap={10}>
        <Auth />
        <Settings />
      </View>
    </Background>
  );
}
export default SettingScreen;
