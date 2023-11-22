import ArticleSections from "../../components/ArticleSection/ArticleSection";
import ScrollDown from "../../components/ScrollDown/ScrollDown";
import ScrollUp from "../../components/ScrollUp";
import { teamArticles } from "../../utils";

export default function About(){
  const relax =  require('./../../assets/images/relax.jpg')
  const knowhow =  require('./../../assets/images/knowhow.jpg')
  const person =  require('./../../assets/images/person.jpg')
  const subway =  require('./../../assets/images/subway.jpg')
  const supreme =  require('./../../assets/images/supreme.jpg')
  const images = [relax, knowhow, person, subway, supreme]

  return(
    <div>
      <ScrollDown />
      <ScrollUp />
      <div className="about-section wide-screen-helper" id="about">
        <h1 className="h1 rotate-headline rotate-headline--right text-outline">About</h1>
        {teamArticles.map((article, index) =>
          <ArticleSections
            index={index}
            headline={article.headline}
            key={article.headline[0].text}
            imgSrc={images[index]}
            text={article.text}
            actionText={article.actionText}
            actionLink={article.actionLink} />
        )}
      </div>
    </div>
  )
}
