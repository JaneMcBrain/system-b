import LogoWhite from './components/LogoWhite';
export default function Construction(){
  document.body.classList.add('dark');
  return(
    <div className="construction">
      <LogoWhite />
      <h1 className="h3">Wir bauen eine neue Webseite!</h1>
      <p className="large-text">Hast du Fragen zu unserem Service dann schreib uns eine E-Mail:</p>
      <a href="mailto:info@systemb.berlin" className='link-light bold large-text primary-text'>Kontakt</a>
      <p className="large-text">Möchtest du dich bei uns bewerben, dann schreib und hier:</p>
      <a href="bewerbung@systemb.berlin" className='link-light bold large-text primary-text'>Bewerbung</a>
    </div>
  )
}
