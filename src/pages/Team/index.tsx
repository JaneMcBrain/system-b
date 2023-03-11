import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation";
import About from "./About";
import OnBoard from "./OnBoard";
import Partner from "./Partner";
import Services from "./Services";

function Team(){
  const navItems = ['Über uns', 'Services', 'Join Us', 'Kontakt']
  return(
    <>
      <Navigation items={navItems} />
      <div className="content">
        <About />
        <Services />
        <Partner />
        <OnBoard />
        <Footer />
      </div>
    </>
  )
}

export default Team;
