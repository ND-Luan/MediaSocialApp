
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text } from 'react-native';



export const IconButton = ({ icon, sizeIcon = 20, backgroundColor, colorIcon, colorText, children, onPress }) => {
    return <Icon.Button size={sizeIcon} name={icon} backgroundColor={backgroundColor} onPress={onPress} color={colorIcon} >
        <Text
            style={
                {
                    color: colorText
                }
            }
        >{children}</Text>
    </Icon.Button>
}


