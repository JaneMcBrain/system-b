import './styles.sass'

interface AccordionProps{
  data: AccordionContent[]
}
export interface AccordionContent{
  headline: string
  text: string
  actionLink: string
  actionText: string
  image?: any
}

export default function Accordion({data}: AccordionProps){

  return(
    <div className="accordion">
      {data.map((item, index) => 
        <div className="accordion__item" key={`accordion_${item.headline.replace(' ', '_').toLowerCase()}`}>
          <div className="accordion__text">
            <h3 className="h3 text-outline">{item.headline}</h3>
            <div className="box-highlight">
              <p className="medium-text spacing-bottom-30">{item.text}</p>
              <a className="link-dark large-text bold" href={item.actionLink}>{item.actionText}</a>
            </div>
          </div>
          <img className={`accordion__image accordion__image--${index}`} src={item.image} alt={item.headline} />
        </div>
      )}
    </div>
  )
}
