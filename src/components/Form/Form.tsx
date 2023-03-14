import './styles.sass'

export default function Form({type}: {type: string}){
  const className= type === 'team' ? "form-section form-section--dark" : "form-section"
  return(
    <div className={className}>
      <div className="box-highlight">
        <h3 className="h3">Lass uns zusammen arbeiten!</h3>
      </div>
      <div>
        <form action="" method="get" className="form">
          <input placeholder="Vorname*" type="text" name="name" id="name" required />
          <input placeholder="Email*" type="email" name="email" id="email" required />
          <input placeholder="Telefonnummer" type="phone" name="phone" id="phone" required />
          <input placeholder="Alter" type="text" name="age" id="age" required />
        </form>
      </div>
    </div>
  )
}