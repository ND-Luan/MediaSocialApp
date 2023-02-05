import { View as RNView } from 'react-native'

const View = ({
    flex,
    height,
    justifyContent,
    backgroundColor,
    alignItems,
    gap,
    width,
    layout,
    style,
    children
}) => {
    return <RNView style={[
        {
            flex: flex,
            backgroundColor: backgroundColor,
            width: width,
            height: height,
            flexDirection: layout == "row" ? "row" : "column",
            justifyContent: justifyContent,
            alignItems: alignItems,
            gap: gap
        }
        , style]}>
        {children}
    </RNView>
}
export default View