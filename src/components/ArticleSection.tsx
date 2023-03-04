import TextAction, { TextActionProps } from "./TextAction/TextAction"

export interface ArticleSectionsProps extends TextActionProps{
  imgSrc: string
}
export default function ArticleSections({imgSrc, ...props}: ArticleSectionsProps){
  return(
    <div className="article-section">
      <img src={imgSrc} alt={imgSrc.split('/')[1]}/>
      <div>
        <TextAction {...props}/>
      </div>
    </div>
  )
}
