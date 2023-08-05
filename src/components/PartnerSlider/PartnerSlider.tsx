import './styles.sass'
import eisfuchs from './../../assets/images/partner/Eisfuchs.png'
import arena from './../../assets/images/partner/Arena_Berlin.png'
import bb from './../../assets/images/partner/BB_Promo.png'
import best from './../../assets/images/partner/BEST.png'
import fuchs from './../../assets/images/partner/Fuchs und Gas.png'
import channel from './../../assets/images/partner/Channel.png'
import metropol from './../../assets/images/partner/Metropol.png'
import eggert from './../../assets/images/partner/Eggert.png'
import fsk from './../../assets/images/partner/FS_Kreuzberg.png'
import huxleys from './../../assets/images/partner/Huxleys.png'
import morsh from './../../assets/images/partner/Morsh.png'
import muenze from './../../assets/images/partner/muenze.png'
import nbk from './../../assets/images/partner/nbk-logo.png'
import silverwings from './../../assets/images/partner/Silverwings.png'
import sws from './../../assets/images/partner/sws-logo-white.png'

export default function PartnerBanner(){
  const images = [
    { image: eisfuchs, link: 'https://eisfuchs-leipzig.de/' },
    { image: arena, link: 'https://www.arena.berlin/' },
    { image: bb, link: 'https://www.bb-promotion.com/veranstaltungen/berlin-berlin/' },
    { image: best, link: 'https://bestvd.com/' },
    { image: channel, link: 'https://channelmusic.de/' },
    { image: fuchs, link: 'https://www.fuchsundgans.com/' },
    { image: metropol, link: 'https://metropol-berlin.de/' },
    { image: eggert, link: 'https://gebruedereggert.de/' },
    { image: fsk, link: 'https://festsaal-kreuzberg.de/' },
    { image: huxleys, link: 'https://huxleysneuewelt.com/' },
    { image: morsh, link: 'https://www.morsh.me/' },
    { image: muenze, link: 'https://alte-muenze-berlin.de/' },
    { image: nbk, link: 'https://berlinkonzerte.de/' },
    { image: silverwings, link: 'https://www.silverwings.de/party.html' },
    { image: sws, link: 'https://alte-muenze-berlin.de/actor/projekt030-gmbh/' },
  ]
  return(
    <div className="partner-banner">
      <ul className="partner-banner__list">
        {images.map((item, index) =>
          <li key={item.image + index} className="partner-banner__list-item">
            <a href={item.link} target='_blank' rel='noreferrer'>
              <img src={item.image} alt={`partner-${index}`}/>
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
