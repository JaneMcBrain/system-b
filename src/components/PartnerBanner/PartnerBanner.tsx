import './styles.sass'
import eisfuchs from './../../assets/images/partner/Eisfuchs.png'
import arena from './../../assets/images/partner/Arena_Berlin.png'
import bb from './../../assets/images/partner/BB_Promo.jpg'
import best from './../../assets/images/partner/BEST.jpg'

export default function PartnerBanner(){
  const images = [eisfuchs, arena, bb, best]
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