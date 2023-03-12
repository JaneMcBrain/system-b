import './styles.sass'

export default function Marquee({text}: {text: string}){
  return(
    <div className="marquee-wrapper">
      <div className="marquee">
        <h1 className="h2 banner primary-text">{text}</h1>
      </div>
    </div>
  )
}