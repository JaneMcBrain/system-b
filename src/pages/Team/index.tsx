import Navigation from "../../components/Navigation";
import About from "./About";

function Team(){
  const navItems = ['Über uns', 'Services', 'Join Us', 'Kontakt']
  return(
    <>
      <Navigation items={navItems} />
      <div className="content">
        <About />
      </div>
    </>
  )
}

export default Team;
