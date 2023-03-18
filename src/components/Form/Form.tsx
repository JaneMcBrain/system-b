import { ChangeEvent, useRef, useState } from 'react'
import './styles.sass'

export default function Form({type}: {type: string}){
  const [checked, setChecked] = useState<boolean>(false)
  const isTeam = () => type === 'team'
  const isCustomer = () => type === 'customer'
  const className=  isTeam()? "split-content form-section form-section--dark" : "split-content form-section"
  const hiddenFileInput = useRef(null);
  const [fileName, setFileName] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files[0].name){
      setFileName(event.target.files[0].name);
    }
  };

  return(
    <div className={className} id="contact">
      <div className="box-highlight">
        <h3 className="h3">Lass uns zusammen arbeiten!</h3>
      </div>
      <div>
        <form action="" method="get" className="form">
          <input className="text-input" placeholder={isTeam() ? "Vorname*" : "Name"} type="text" name="name" id="name" required />
          {isCustomer() &&
            <input className="text-input" placeholder="Firma" type="text" name="firma" id="firma" />
          }
          <input className="text-input" placeholder="Email*" type="email" name="email" id="email" required />
          {isTeam() &&
            <>
              <input className="text-input" placeholder="Telefonnummer" type="phone" name="phone" id="phone" required />
              <input className="text-input" placeholder="Alter" type="text" name="age" id="age" required />
            </>
          }
          <span className="textarea" role="textbox" contentEditable></span>
          {isTeam() &&
          <>
            <input
              ref={hiddenFileInput}
              type="file"
              accept="video/*"
              style={{ display: 'none' }}
              id="video-upload"
              onChange={handleChange}
            />
            <label htmlFor="video-upload" className="textarea">
              {fileName.length > 0 ?
                <p className="primary-text">Hochgeladen: {fileName}</p> :
                <p className="medium-text">Video uploaden</p>
              }
              <div className="upload-button"></div>
            </label>
          </>
          }
          <div className="checkbox-wrapper">
            <input className="checkbox-input" id="agb_check" type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            <label htmlFor="agb_check" className="small-text">Ich erkläre mich mit der Verarbeitung der eingegebenen Daten, sowie der Datenschutzerklärung einverstanden.</label>
          </div>
          <p className="link-light bold large-text primary-text">Senden</p>
        </form>
      </div>
    </div>
  )
}