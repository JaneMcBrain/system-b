import { useState } from 'react';
import instagram from './../../assets/logos/instagram.svg'
import Datenschutz from '../../pages/Datenschutz';
import Impressum from '../../pages/Impressum';

export default function Footer(){
  const [showDS, setShowDS] = useState<boolean>(false);
  const [showImpressum, setShowImpressum] = useState<boolean>(false);

  return(
      <>
      {showDS &&
          <Datenschutz onShowDS={setShowDS} />
        }
        {showImpressum &&
          <Impressum onShow={setShowImpressum} />
        }
        <div className="footer-section">
          <div className="split-content">
            <div className="contact">
              <h1 className="h3">Lass uns sprechen!</h1>
              <a className="link-light bold large-text primary-text" href="tel:0157 50178119">0157 50178119</a>
            </div>
            <div className="impress">
              <h4 className="primary-text bold large-text spacing-bottom-20">Kontakt</h4>
              <p className="large-text">Josef-Orlopp-Str.92</p>
              <p className="large-text spacing-bottom-20">10365 Berlin</p>
              <a className="link-light bold large-text primary-text" href="mailto:info@systemb.berlin">E-Mail Senden</a>
              <div className="social-icons">
                <img src={instagram} alt="System.B Instagram"/>
              </div>
            </div>
          </div>
          <div className="footer-nav">
            <ul className="footer-nav__links">
              <li onClick={() => setShowDS(true)} className="footer-nav__link medium-text">Datenschutz</li>
              <li onClick={() => setShowImpressum(true)} className="footer-nav__link medium-text">Impressum</li>
            </ul>
            <h2 className="h1 text-outline">System.B</h2>
          </div>
        </div>
      </>
  )
}
