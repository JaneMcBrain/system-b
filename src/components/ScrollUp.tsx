export default function ScrollUp(){
  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementsByClassName("popup")[0].scrollTo({top: 0, behavior: 'smooth'});
  }
  return(
    <svg className="up-scroll" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" onClick={scrollTop}>
      <g id="Gruppe_37" data-name="Gruppe 37" transform="translate(-983 -808)">
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="37.5" cy="37.5" r="37.5" transform="translate(983 808)" fill="#e5f851"/>
        <text id="UP" transform="translate(997 859)" fill="none" stroke="#1a1a1a" strokeWidth="2" fontSize="37" fontFamily="roc-grotesk" fontWeight="700"><tspan x="0" y="0">UP</tspan></text>
      </g>
    </svg>
  )
}
