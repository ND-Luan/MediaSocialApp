import Button from '@components/Button';
import View from '@components/View';
const CircleButton = ({size, color, children}) => {
  return (
    <Button
      width={size}
      height={size}
      rounded={size}
      backgroundColor={color}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </Button>
  );
};
export default CircleButton;
