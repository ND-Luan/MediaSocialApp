import Background from '@components/Background';
import View from '@components/View';
import {Auth} from './components/auth';
import {Settings} from './components/settings';

function SettingScreen() {
  return (
    <Background>
      <Auth />
      <Settings />
    </Background>
  );
}
export default SettingScreen;
