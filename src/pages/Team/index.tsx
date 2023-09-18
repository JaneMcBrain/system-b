import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation";
import About from "./About";
import OnBoard from "./OnBoard";
import Partner from "./Partner";
import Services from "./Services";

function Team(){
  const navItems = [
    {text: 'Über uns', link: 'about'},
    {text: 'Unser Team', link: 'service'},
    {text: 'Join Us', link: 'onboard'},
    {text: 'Kontakt', link: 'contact'}
  ]

  return(
    <>
      <Navigation items={navItems} />
      <div className="team content">
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
