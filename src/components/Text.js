import {StyleSheet, Text as RNText} from 'react-native';
const Text = ({fontSize, style, children}) => {
 
  return (
    <RNText
      style={[
        {
          color: 'blue',
          fontSize: fontSize,
        },
        style,
      ]}>
      {children}
    </RNText>
  );
};

export default Text;
