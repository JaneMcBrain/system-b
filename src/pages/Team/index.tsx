import Navigation from "../../components/Navigation";

function Team(){
  const navItems = ['Über uns', 'Services', 'Join Us', 'Kontakt']
  return(
    <>
      <Navigation items={navItems} />
    </>
  )
}

export default Team;
