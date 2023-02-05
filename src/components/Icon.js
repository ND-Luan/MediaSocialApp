
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';





export const IconButton = ({
    name,
    sizeIcon = 20,
    backgroundColor,
    colorIcon,
    children,
    onPress
}) => {

    
    return <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <Icon
            size={sizeIcon}
            name={name}
            backgroundColor={backgroundColor}
            onPress={onPress}
            color={colorIcon} >
            {children}
        </Icon>
    </TouchableOpacity>
}


