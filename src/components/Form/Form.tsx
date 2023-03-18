import { useState } from 'react'
import './styles.sass'

export default function Form({type}: {type: string}){
  const [checked, setChecked] = useState<boolean>(false)
  const className= type === 'team' ? "split-content form-section form-section--dark" : "split-content form-section"
  return(
    <div className={className}>
      <div className="box-highlight">
        <h3 className="h3">Lass uns zusammen arbeiten!</h3>
      </div>
      <div>
        <form action="" method="get" className="form">
          <input className="text-input" placeholder="Vorname*" type="text" name="name" id="name" required />
          <input className="text-input" placeholder="Email*" type="email" name="email" id="email" required />
          <input className="text-input" placeholder="Telefonnummer" type="phone" name="phone" id="phone" required />
          <input className="text-input" placeholder="Alter" type="text" name="age" id="age" required />
          <span className="textarea" role="textbox" contentEditable></span>
          <input type="file" id="b_video" name="bewerbungs_video" accept="image/png, image/jpeg" />
          <div className="checkbox-wrapper">
            <input className="checkbox-input" id="agb_check" type="checkbox" checked={checked} onClick={() => setChecked(!checked)}/>
            <label htmlFor="agb_check" className="small-text">Ich erkläre mich mit der Verarbeitung der eingegebenen Daten, sowie der Datenschutzerklärung einverstanden.</label>
          </div>
          <p className="link-light bold large-text primary-text">Senden</p>
        </form>
      </div>
    </div>
  )
}