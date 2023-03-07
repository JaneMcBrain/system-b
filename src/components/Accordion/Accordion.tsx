import './styles.sass'

interface AccordionProps{
  data: AccordionContent[]
  images: any[]
}
export interface AccordionContent{
  headline: string
  text: string
  actionLink: string
  actionText: string
}

export default function Accordion({data, images}: AccordionProps){
  return(
    <div className="accordion">
      {data.map(item => 
        <div key={`accordion_${item.headline.replace(' ', '_').toLowerCase()}`}>
          <h3>{item.headline}</h3>
          <div>
            <p className="medium-text spacing-bottom-30">{item.text}</p>
            <a className="link large-text primary-text" href={item.actionLink}>{item.actionText}</a>
          </div>
        </div>
      )}
      <div>
        <img src="https://image.freepik.com/free-photo/lake-mountains_1204-507.jpg" alt="" />
      </div>
      <div>
        <img src="https://image.freepik.com/free-photo/sunlight-forest_1004-9.jpg" alt="" />
      </div>
      <div>
        <img src="https://image.freepik.com/free-photo/beautiful-green-park_1417-1443.jpg" alt="" />
      </div>
      <div>
        <img src="https://image.freepik.com/free-photo/waterfall-that-is-layer-thailand_1150-15650.jpg" alt="" />
      </div>
      <div>
        <img src="https://image.freepik.com/free-photo/sunrise-bali-jungle_1385-1644.jpg" alt="" />
      </div>
      <div>
        <img src="https://image.freepik.com/free-photo/grass-with-sunlight-countryside-suburban_53876-42989.jpg" alt="" />
      </div>
    </div>
  )
}