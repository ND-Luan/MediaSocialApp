import View from '@components/View';
import COLOR from '@constants/COLOR';
import TopArticle from './TopArticle';
import Media from './Media';
import Reaction from './Reaction';
import Comment from './Comment';
const Article = () => {
  return (
    <View backgroundColor={COLOR.lightPink} width="100%" height={500} gap={10}>
      <TopArticle />
      <Media />
      <Reaction />
      <Comment />
    </View>
  );
};
export default Article;
