import './styles.sass'

export default function Marquee({text, type}: {text: string, type: 'team' | 'customer'}){
  return(
    <div className="marquee-wrapper">
      <div className={`marquee marquee--${type}`}>
        <h1 className="h2 banner primary-text">{text}</h1>
        <h1 className="h2 banner primary-text">{text}</h1>
      </div>
    </div>
  )
}
