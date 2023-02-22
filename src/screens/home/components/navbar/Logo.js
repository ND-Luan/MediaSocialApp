import Image from "@components/Image";
import IMAGE from "@constants/IMAGE";

const Logo = ({height, width, resize}) => {
  return <Image source={IMAGE.logo} height={height} width={width} resize={resize}/>
};
export default Logo
