import Accordion from "../../components/Accordion/Accordion";
import { teamServices } from "../../utils";

export default function Services(){

  return(
    <div className="services-section" id="service">
      <Accordion data={teamServices}/>
      <h1 className="h1 text-outline rotate-headline rotate-headline--left">Services</h1>
    </div>
  )
}
