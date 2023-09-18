
interface ImpressumProps{
  onShow: (v: boolean) => void
}
function Impressum({onShow}: ImpressumProps){

  return(
    <div className="popup content">
      <div className="nav-bar is-active" onClick={() => onShow(false)}></div>
      <h1 className="h3 spacing-bottom-50">Impressum</h1>
      <h2 className="large-text primary-text bold spacing-bottom-30">Angaben gemäß § 5 TMG:</h2>
      <p className="medium-text spacing-bottom-30">L.O.F.D.S. UG (haftungsbeschränkt) & Co. KG<br></br>Josef-Orlopp-Strasse 92<br></br>10365 Berlin</p>
      <p className="medium-text spacing-bottom-30">Webseite: <a href="http://www.systemb.berlin" target="_blank" className="simple-link primary-text">www.systemb.berlin</a><br></br>E-Mail: <a href="mailto:info@systemb.berlin" className="simple-link primary-text">info@systemb.berlin</a><br></br>Tel: <a href="tel:015750178119" className="simple-link primary-text">0157 50178119</a></p>
      <p className="medium-text spacing-bottom-30">Registergericht: Amtsgericht Charlottenburg<br></br>Registernummer: HRA 56027 B<br></br>Vertretungsberechtigter Geschäftsführer: L.O.F.D.S. Management UG (haftungsbeschränkt)<br></br>Diese ist vertreten durch: Florin Kerber<br></br>Umsatzsteuer-Identifikationsnummer gemäß § 27 a<br></br>Umsatzsteuergesetz: 23 33 63 484 Josef-Orlopp-Strasse 92<br></br>10365 Berlin</p>
    
    </div>
  )
}

export default Impressum;
