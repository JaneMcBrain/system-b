import Navigation from "../../components/Navigation";

function Customer(){
  const navItems = ['Über uns', 'Services', 'Join Us', 'Kontakt']
  return(
    <div>
      <Navigation items={navItems} />
    </div>
  )
}

export default Customer;
