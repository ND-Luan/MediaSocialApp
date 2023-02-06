import {View as RNView} from 'react-native';

const View = ({
  padding = 10,
  flex,
  flexWarp,
  height,
  justifyContent,
  backgroundColor,
  alignItems,
  gap,
  width,
  layout,
  style,
  children,
  rounded = 12,
  borderWidth,
  borderColor,
}) => {
  return (
    <RNView
      style={[
        {
          flex: flex,
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          flexDirection: layout == 'row' ? 'row' : 'column',

          justifyContent: justifyContent,
          alignItems: alignItems,
          gap: gap,
          borderRadius: rounded,
          borderWidth: borderWidth,
          borderColor: borderColor,
          flexWrap: flexWarp,
          padding: padding,
        },
        style,
      ]}>
      {children}
    </RNView>
  );
};
export default View;
