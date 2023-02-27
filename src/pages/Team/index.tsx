import Navigation from "../../components/Navigation";
import About from "./About";

function Team(){
  const navItems = ['Über uns', 'Services', 'Join Us', 'Kontakt']
  return(
    <>
      <Navigation items={navItems} />
      <About />
    </>
  )
}

export default Team;
