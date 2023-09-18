import { datenschutz } from "../../utils";

interface DatenschutzProps{
  onShowDS: (v: boolean) => void
}
function Datenschutz({onShowDS}: DatenschutzProps){

  return(
    <div className="popup content">
      <div className="nav-bar is-active" onClick={() => onShowDS(false)}></div>
      <h1 className="h3 spacing-bottom-50">Datenschutz</h1>
      <p className="medium-text spacing-bottom-30">Diese Datenschutzerklärung enthält ausführliche Informationen darüber, was mit Ihren persönlichen Daten passiert, wenn Sie unsere Website <a href="http://www.systemb.berlin" target="_blank" className="simple-link primary-text">www.systemb.berlin</a> besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie sich persönlich identifizieren können. Wir halten uns bei der Verarbeitung Ihrer Daten streng an die gesetzlichen Bestimmungen, insbesondere die Datenschutzgrundverordnung und legen großen Wert darauf, Ihren Besuch auf unserer Website sicher zu gestalten.</p>
      <p className="medium-text spacing-bottom-30">Verantwortlich:<br></br>L.O.F.D.S. UG (haftungsbeschränkt) & Co. KG</p>
      <p className="medium-text spacing-bottom-30">Josef-Orlopp-Strasse 92<br></br>10365 Berlin</p>
      <p className="medium-text spacing-bottom-30">Vertretungsberechtigte Person: Aline Lutz<br></br>E-Mail: <a href="mailto:info@systemb.berlin" className="simple-link primary-text">info@systemb.berlin</a><br></br>Tel: <a href="tel:015750178119" className="simple-link primary-text">0157 50178119</a></p>
    
      {datenschutz.map(elem =>
        <>
          <h2 className="large-text primary-text bold spacing-bottom-30" dangerouslySetInnerHTML={{__html: elem.headline}}></h2>
          <p className="medium-text spacing-bottom-30" dangerouslySetInnerHTML={{__html: elem.text}}></p>
        </>
      )}
    </div>
  )
}

export default Datenschutz;
