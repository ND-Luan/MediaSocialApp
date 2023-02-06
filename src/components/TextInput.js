import {TextInput as RNTextInput, View} from 'react-native';
const TextInput = ({
  iconRight,
  iconLeft,
  placeholder,
  children,
  style,
  position,
}) => {
  return (
    <View style={{}}>
      <RNTextInput
        placeholder={placeholder}
        style={[
          {
            backgroundColor: 'white',
            position: position,
          },
          style,
        ]}>
        {children}
      </RNTextInput>
    </View>
  );
};
export default TextInput;
