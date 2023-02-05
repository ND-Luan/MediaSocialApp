import View from "@components/View"
import COLOR from "@constants/COLOR"
import TopArticle from "./TopArticle"
import Media from "./Media"
import Reaction from "./Reaction"
const Article = () => {
    return <View backgroundColor={COLOR.lightPink} width="100%" height={400} gap={10}>
        <TopArticle />
        <Media />
        <Reaction />
    </View>
}
export default Article