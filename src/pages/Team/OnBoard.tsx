import Form from "../../components/Form/Form";
import Marquee from "../../components/Marquee/Marquee";

export default function OnBoard(){

  return(
    <div className="onoard-section" id="onboard">
      <Marquee type="team" text="Werde ein Teil unseres Teams! Werde ein Teil unseres Teams!" />
      <h1 className="h1 rotate-headline rotate-headline--right text-outline spacing-bottom-150">Join us</h1>
      <div className="onboard-questions">
        <div className="onboard-questions__number invisible-small"></div>
        <div className="onboard-questions__text">
          <p className="box-highlight padding-80">Hi, du wärst gerne ein Teil vom (Adjektive) Team? Toll! Um dich gleich besser kennenzulernen bitten wir dich um ein Video von dir. Beschränke dich dabei auf 3 Minuten und beantworte neben deinem persönlichen Teil auch unsere Fragen.</p>
        </div>
        <div className="onboard-questions__number h1 text-outline">1.</div>
        <p className="onboard-questions__text h3">Wer bist du & was machst du gerne?</p>
        <div className="onboard-questions__number h1 text-outline">2.</div>
        <p className="onboard-questions__text h3">Was bewegt dich in der Gastro zu arbeiten?</p>
        <div className="onboard-questions__number h1 text-outline">3.</div>
        <p className="onboard-questions__text h3">Hast du Erfahrung? Wenn ja welche?</p>
      </div>
      <Form type="team"/>
    </div>
  )
}
