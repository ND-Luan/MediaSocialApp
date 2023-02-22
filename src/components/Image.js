import FastImage from 'react-native-fast-image';
const Image = ({width, height, resize, source}) => (
  <FastImage
    style={{width: width, height: height}}
    source={source}
    resizeMode={FastImage.resizeMode.resize}
  />
);
export default Image;
