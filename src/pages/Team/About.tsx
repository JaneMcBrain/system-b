import ArticleSections from "../../components/ArticleSection";
import ScrollDown from "../../components/ScrollDown/ScrollDown";
import UpScroll from "../../components/UpScroll";
import { teamArticles } from "../../utils";

export default function About(){
  const relax =  require('./../../assets/images/relax.jpg')
  const knowhow =  require('./../../assets/images/knowhow.jpg')
  const person =  require('./../../assets/images/person.jpg')
  const subway =  require('./../../assets/images/subway.jpg')
  const fun =  require('./../../assets/images/fun.jpg')
  const supreme =  require('./../../assets/images/supreme.jpg')
  const images = [relax, knowhow, person, subway, fun, supreme]

  return(
    <div>
      <ScrollDown />
      <UpScroll />
      <h1 className="h1 rotate-headline rotate-headline--right text-outline">About</h1>
      {teamArticles.map((article, index) =>
        <ArticleSections
          headline={article.headline}
          key={article.headline[0].text}
          imgSrc={images[index]}
          text={article.text}
          actionText={article.actionText}
          actionLink={article.actionLink} />
      )}
    </div>
  )
}
