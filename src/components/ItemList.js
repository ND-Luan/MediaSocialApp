import { StyleSheet, View } from "react-native";

const ItemList = ({
    gap,
    justifyContent,
    alignItems,
    flex = 1,
    style,
    children,
    layout
}) => {
    return <View style={[
        {
            flex: flex,
            justifyContent: justifyContent,
            alignItems: alignItems,
            flexDirection: layout == "row" ? 'row' : 'column',
            gap: gap
        }, style]}
    >
        {children}
    </View>
}
const styles = StyleSheet.create({

})
export default ItemList