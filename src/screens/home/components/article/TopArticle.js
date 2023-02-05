import { IconButton } from "@components/Icon"
import View from "@components/View"
import COLOR from "@constants/COLOR"

const TopArticle = () => {
    return <View layout="row" height={40} backgroundColor={COLOR.yellow} width="100%" justifyContent="space-between" alignItems="center">
        <View height={20} width={50} backgroundColor={COLOR.lightBlue}></View>
        <IconButton name="dots-three-vertical"></IconButton>
    </View>
}
export default TopArticle