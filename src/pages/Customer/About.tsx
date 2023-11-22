import ArticleSections from "../../components/ArticleSection/ArticleSection";
import ScrollDown from "../../components/ScrollDown/ScrollDown";
import ScrollUp from "../../components/ScrollUp";
import { customerArticles } from "../../utils";

export default function About(){
  const bar =  require('./../../assets/images/outdoorbar.jpg')
  const concert =  require('./../../assets/images/concert.jpg')
  const laser =  require('./../../assets/images/laser.jpg')
  const images = [bar, concert, laser]

  return(
    <div>
      <ScrollDown />
      <ScrollUp />
      <div className="about-section wide-screen-helper" id="about">
        <h1 className="h1 rotate-headline rotate-headline--right text-outline">About</h1>
        {customerArticles.map((article, index) =>
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
