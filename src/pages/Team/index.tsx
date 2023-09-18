import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation";
import Datenschutz from "../Datenschutz";
import About from "./About";
import OnBoard from "./OnBoard";
import Partner from "./Partner";
import Services from "./Services";
import Impressum from "../Impressum";

function Team(){
  const [showDS, setShowDS] = useState<boolean>(false);
  const [showImpressum, setShowImpressum] = useState<boolean>(false);
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
        {showDS &&
          <Datenschutz onShowDS={setShowDS} />
        }
        {showImpressum &&
          <Impressum onShow={setShowImpressum} />
        }
        <Footer onShowDS={setShowDS} onShowImpressum={setShowImpressum}/>
      </div>
    </>
  )
}

export default Team;
