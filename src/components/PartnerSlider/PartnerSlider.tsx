import './styles.sass'
import eisfuchs from './../../assets/images/partner/Eisfuchs.png'
import arena from './../../assets/images/partner/Arena_Berlin.png'
import bb from './../../assets/images/partner/BB_Promo.jpg'
import best from './../../assets/images/partner/BEST.jpg'
import fuchs from './../../assets/images/partner/Fuchs und Gas.png'
import channel from './../../assets/images/partner/Channel.png'
import metropol from './../../assets/images/partner/Metropol.png'
import eggert from './../../assets/images/partner/Eggert.png'
import fsk from './../../assets/images/partner/FS_Kreuzberg.jpg'
import huxleys from './../../assets/images/partner/Huxleys.jpg'
import morsh from './../../assets/images/partner/Morsh.png'
import muenze from './../../assets/images/partner/muenze.png'
import nbk from './../../assets/images/partner/nbk-logo.jpg'
import silverwings from './../../assets/images/partner/Silverwings.png'
import sws from './../../assets/images/partner/sws-logo-white.png'

export default function PartnerBanner(){
  const images = [eisfuchs, arena, bb, best, channel, fuchs, metropol, eggert, fsk, huxleys, morsh, muenze, nbk, silverwings, sws]
  return(
    <div className="partner-banner">
      <ul className="partner-banner__list">
        {images.map((image, index) =>
          <li className="partner-banner__list-item">
            <img src={image} alt={`partner-${index}`}/>
          </li>
        )}
      </ul>
    </div>
  )
}