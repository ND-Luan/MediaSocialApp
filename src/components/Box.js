import { View as RNView } from "react-native";

const Box = ({ flex = 1, backgroundColor, width, height, style, children }) => {
    return <RNView style={[
        {
           
            height: height,
            width: width,
            backgroundColor: backgroundColor,

        }, style]}>
        {children}
    </RNView>
}
export default Box