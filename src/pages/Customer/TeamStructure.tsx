import Accordion from "../../components/Accordion/Accordion";
import { customerServices } from "../../utils";

export default function TeamStructure(){
  return(
    <div className="team-structure-section" id="team-structure">
      <h1 className="h1 text-outline rotate-headline rotate-headline--left">Unser Team</h1>
      <Accordion data={customerServices}/>
    </div>
  )
}
