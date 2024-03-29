import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Marquee from "../../components/Marquee/Marquee";
import Navigation from "../../components/Navigation";
import About from "./About";
import Partner from "./Partner";
import TeamStructure from "./TeamStructure";

function Customer(){
  const navItems = [
    {text: 'Über uns', link: 'about'},
    {text: 'Unser Team', link: 'team-structure'},
    {text: 'Kontakt', link: 'contact'}
  ]
  const type="customer"
  return(
    <div>
      <Navigation items={navItems} />
      <div className="content">
        <About />
        <TeamStructure />
        <Marquee type={type} text="Gemeinsam machen wir dein Event zu einem Erfolg!" />
        <Partner />
        <Form type={type} />
        <Footer />
      </div>
    </div>
  )
}

export default Customer;
