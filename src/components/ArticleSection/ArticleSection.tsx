import TextAction, { TextActionProps } from "../TextAction/TextAction"
import './styles.sass'

export interface ArticleSectionsProps extends TextActionProps{
  imgSrc: string
  index: number
}
export default function ArticleSections({imgSrc, index, ...props}: ArticleSectionsProps){
  return(
    <div className={`article-section ${index % 2 !== 0 ? `is-reversed article-section--${index}` : `is-default article-section--${index}`}`}>
      <img src={imgSrc} alt={imgSrc.split('/')[1]}/>
      <div className="article-section__text">
        <TextAction {...props}/>
      </div>
    </div>
  )
}
