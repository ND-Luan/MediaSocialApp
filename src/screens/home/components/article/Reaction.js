import { IconButton } from "@components/Icon";
import View from "@components/View";
import COLOR from "@constants/COLOR";

const Reaction = () => {
    return <View height={30} width="100%" backgroundColor={COLOR.yellow} justifyContent="space-between" layout="row">
        <View layout="row" gap={5}>
            <IconButton name ="heart-outlined" backgroundColor={COLOR.lightBlue}></IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
        </View>
        <View>
            <IconButton></IconButton>
        </View>
    </View>
}
export default Reaction