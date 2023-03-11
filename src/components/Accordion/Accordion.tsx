import './styles.sass'

interface AccordionProps{
  data: AccordionContent[]
}
export interface AccordionContent{
  headline: string
  text: string
  actionLink: string
  actionText: string
}

export default function Accordion({data}: AccordionProps){
  const adl =  require('./../../assets/images/adl.jpg')
  const bar =  require('./../../assets/images/beerbar.jpg')
  const glasses =  require('./../../assets/images/glasses.jpg')
  const tech =  require('./../../assets/images/tech.jpg')
  const fun =  require('./../../assets/images/fun.jpg')
  const wardrobe =  require('./../../assets/images/wardrobe.jpg')
  const pans =  require('./../../assets/images/pans.jpg')
  const images = [adl, bar, glasses, tech, fun, wardrobe, pans]

  return(
    <div className="accordion">
      {data.map((item, index) => 
        <div className="accordion__item" key={`accordion_${item.headline.replace(' ', '_').toLowerCase()}`}>
          <div className="accordion__text padding-50">
            <h3 className="h3 text-outline spacing-bottom-100">{item.headline}</h3>
            <div className="box-highlight padding-50">
              <p className="medium-text spacing-bottom-30">{item.text}</p>
              <a className="link-dark large-text bold" href={item.actionLink}>{item.actionText}</a>
            </div>
          </div>
          <img className="accordion__image" src={images[index]} alt={item.headline} />
        </div>
      )}
    </div>
  )
}
