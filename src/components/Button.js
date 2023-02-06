import {TouchableOpacity as RNButton} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
const Button = ({
  rounded,
  shadow,
  startShadowColor,
  endShadowColor,
  distance,
  disableOpacity,
  onPress,
  flex,
  backgroundColor,
  width,
  height,
  style,
  children,
}) => {
  return (
    <Shadow
      disabled={shadow ? false : true}
      startColor={startShadowColor}
      endColor={endShadowColor}
      distance={distance}>
      <RNButton
        onPress={onPress}
        activeOpacity={disableOpacity ? 1 : undefined}
        style={[
          {
            flex: flex,
            height: height,
            width: width,
            backgroundColor: backgroundColor,
            borderRadius: rounded,
          },
          style,
        ]}>
        {children}
      </RNButton>
    </Shadow>
  );
};

export default Button;
