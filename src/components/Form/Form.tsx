import { useRef, useState } from 'react'
import './styles.sass'

export default function Form({type}: {type: string}){
  const [checked, setChecked] = useState<boolean>(false)
  const isTeam = () => type === 'team'
  const isCustomer = () => type === 'customer'
  const className=  isTeam()? "split-content form-section form-section--dark" : "split-content form-section"
  const nameInput = useRef<HTMLInputElement>(null)
  const companyInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const ageInput = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<string | null>('')
  const [loading, setLoading] = useState<boolean>(false)

  function sendForm(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const api = '/sendEmail.php';
    var data = new FormData();
    setLoading(true);
    data.append("type", type);
    if(nameInput.current?.value) data.append("name", nameInput.current?.value);
    if(companyInput.current?.value) data.append("company", companyInput.current?.value);
    if(emailInput.current?.value) data.append("email", emailInput.current?.value);
    if(phoneInput.current?.value) data.append("phone", phoneInput.current?.value);
    if(ageInput.current?.value) data.append("age", ageInput.current?.value);
    data.append("message", message as string);

    fetch(api, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
      },
      body: data
    }).then((res) => res.json())
      .then((post) => {
        console.log(post);
        setLoading(false);
        alert('E-Mail wurde erfolgreich versandt!');
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        alert('Ops! Leider ist etwas schief gelaufen!');
      });
  }

  return(
    <div className={className} id="contact">
      <div className="box-highlight">
        <h3 className="h3">Lass uns zusammen arbeiten!</h3>
      </div>
      <div>
        <form onSubmit={sendForm} action="" method="POST" className="form" encType="multipart/form-data">
          <input ref={nameInput} className="text-input" placeholder="Vorname*" type="text" name="name" id="name" required />
          {isCustomer() &&
            <input ref={companyInput} className="text-input" placeholder="Firma" type="text" name="firma" id="firma" />
          }
          <input ref={emailInput} className="text-input" placeholder="Email*" type="email" name="email" id="email" required />
          {isTeam() &&
            <>
              <input ref={phoneInput} className="text-input" placeholder="Telefonnummer" type="phone" name="phone" id="phone" required />
              <input ref={ageInput} className="text-input" placeholder="Alter" type="text" name="age" id="age" required />
            </>
          }
          <span className="textarea" role="textbox" contentEditable onInput={e => setMessage(e.currentTarget.textContent)}></span>
          <div className="checkbox-wrapper">
            <input className="checkbox-input" id="agb_check" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} required/>
            <label htmlFor="agb_check" className="small-text">Ich erkläre mich mit der Verarbeitung der eingegebenen Daten, sowie der Datenschutzerklärung einverstanden.</label>
          </div>
          <button
            disabled={loading}
            className="link-light bold large-text primary-text"
            type="submit"
          >
            Senden
          </button>
        </form>
      </div>
    </div>
  )
}
