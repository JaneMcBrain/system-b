import Navigation from "../../components/Navigation";
import About from "./About";
import Services from "./Services";

function Team(){
  const navItems = ['Über uns', 'Services', 'Join Us', 'Kontakt']
  return(
    <>
      <Navigation items={navItems} />
      <div className="content">
        <About />
        <Services />
      </div>
    </>
  )
}

export default Team;
