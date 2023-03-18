import instagram from './../../assets/logos/instagram.svg'
import tiktok from './../../assets/logos/tiktok.png'
export default function Footer(){

  return(
      <div className="footer-section">
        <div className="split-content">
          <div className="contact">
            <h1 className="h3">Lass uns sprechen!</h1>
            <div className="contact__input">
              <input className="text-input" placeholder="E-Mail"/>
              <p className="link-light bold large-text primary-text">Senden</p>
            </div>
          </div>
          <div className="impress">
            <h4 className="primary-text bold large-text spacing-bottom-20">Kontakt</h4>
            <p className="large-text">Josef-Orlopp-Str.92</p>
            <p className="large-text spacing-bottom-20">10365 Berlin</p>
            <p className="large-text">info@systemb.berlin</p>
            <div className="social-icons">
              <img src={instagram} alt="System.B Instagram"/>
              <img src={tiktok} alt="System.B Tik Tok"/>
            </div>
          </div>
        </div>
        <div className="footer-nav">
          <div className="footer-nav__links">
            <a className="medium-text">Datenschutz</a>
            <a className="medium-text">Impressum</a>
          </div>
          <h2 className="h1 text-outline">System.B</h2>
        </div>
      </div>
  )
}