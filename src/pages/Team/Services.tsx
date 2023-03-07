import Accordion from "../../components/Accordion/Accordion";
import { teamServices } from "../../utils";

export default function Services(){
  const relax =  require('./../../assets/images/relax.jpg')
  const knowhow =  require('./../../assets/images/knowhow.jpg')
  const person =  require('./../../assets/images/person.jpg')
  const subway =  require('./../../assets/images/subway.jpg')
  const fun =  require('./../../assets/images/fun.jpg')
  const supreme =  require('./../../assets/images/supreme.jpg')
  const images = [knowhow]
  return(
    <div className="services-section">
      <h1 className="h1 text-outline rotate-headline rotate-headline--left">Services</h1>
      <Accordion data={teamServices} images={images} />
    </div>
  )
}
