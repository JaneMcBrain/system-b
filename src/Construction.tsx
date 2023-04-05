import LogoWhite from './components/LogoWhite';
export default function Construction(){
  document.body.classList.add('dark');
  return(
    <div className="construction">
      <LogoWhite />
      <h1 className="h3">Wir bauen eine neue Webseite!</h1>
      <h2 className="large-text primary-text bold">Wer sind wir?</h2>
      <p className="medium-text">System.B Berlin arbeitet mit vielen Veranstaltungsstätten, Clubs, Eventveranstaltern, Konzerthäusern, Caterern und Co. zusammen. Wir bieten somit vielseitige Einsatzorte und Jobs in verschiedenen Bereichen der Gastronomie an, quer durch Berlin. Vom Barkeeper, Zapfer, Kassierer über Runner, Logistiker und Auf- & Abbauhelfer, hin zu Servicekräften und Cateringhilfen. Du findest bei uns Vielseitigkeit und den Anspruch, dass es dir als Mitarbeiter gut geht, denn du bist das größte Gut, das ein Arbeitgeber haben kann - und das war bereits vor der Pandemie unser Anspruch! Deshalb bleibt unser Leitsatz: „Bilde sie weiter und bezahle sie gut".</p>
      <p className="large-text">Hast du Fragen zu unserem Service dann schreib uns eine E-Mail:</p>
      <a href="mailto:info@systemb.berlin" className='link-light bold large-text primary-text'>Kontakt</a>
      <p className="large-text">Möchtest du dich bei uns bewerben, dann schreib und hier:</p>
      <a href="bewerbung@systemb.berlin" className='link-light bold large-text primary-text'>Bewerbung</a>
    </div>
  )
}
