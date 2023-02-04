import COLOR from '@constants/COLOR';
import FONTSIZE from '@constants/FONTSIZE';
import { StyleSheet, Text as RNText } from 'react-native';
const Text = ({ fontSize = FONTSIZE.default, style, children, color = COLOR.black }) => {
  return (
    <RNText
      style={[
        {
          color: color,
          fontSize: fontSize,
        },
        style,
      ]}>
      {children}
    </RNText>
  );
};

export default Text;
