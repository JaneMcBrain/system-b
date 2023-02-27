import ScrollDown from "../../components/ScrollDown/ScrollDown";
import UpScroll from "../../components/UpScroll";

export default function About(){
  return(
    <div>
      <ScrollDown />
      <UpScroll />
      <h1 className="h1 rotate-headline rotate-headline--right text-outline">About</h1>
    </div>
  )
}
