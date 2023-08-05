import { createBrowserHistory } from '@remix-run/router';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LogoBlack from '../../components/LogoBlack';
import LogoWhite from '../../components/LogoWhite';
import TextAction from '../../components/TextAction/TextAction';
import { emailLinkCustomer, emailLinkTeam, emailTextCustomer, emailTextTeam } from '../../utils';
import './styles.sass'
const imgLeft =  require('./../../assets/images/bar.jpg')
const imgRight =  require('./../../assets/images/bottles.jpg')

function App() {
  const [showTeam, setShowTeam] = useState<boolean>(false)
  const [showCustomer, setShowCustomer] = useState<boolean>(false)
  const navigate = useNavigate();
  const history = createBrowserHistory()

  const getSplitClasses = (direction: string) => {
    return `split-view__split split-view__split--${direction}`
  }

  const onLogoClick = () => {
    if(showCustomer || showTeam){
      navigate("../new");
    }
  }

  useEffect(() => {
    if(showTeam){
      document.body.classList.add('dark');
    } else{
      document.body.classList.remove('dark');
    }
  }, [showTeam])
  
  useEffect(() => {
    if(showCustomer){
      document.body.classList.add('light');
    } else{
      document.body.classList.remove('light');
    }
  }, [showCustomer])

  useEffect(() => {
    setShowTeam(history.location.pathname === '/new/team')
    setShowCustomer(history.location.pathname === '/new/customer')
  }, [history.location])

  const onTeamClick = () => {
    if(!showTeam){
      setShowTeam(true);
      navigate("./team");
    }
  }
  const onCustomerClick = () => {
    if(!showCustomer){
      setShowCustomer(true);
      navigate("./customer");
    }
  }

  return (
    <>
      <div className={`split-view ${showTeam ? 'team-active' : ''} ${showCustomer ? 'customer-active' : ''}`}>
        {!showCustomer &&
          <div 
            className={getSplitClasses('left')}
            onClick={onTeamClick}
          >
            <div onClick={onLogoClick} className={`split-view__logo${showTeam ? ' is-left': ''}`}>
              <LogoWhite />
            </div>
            <div className="small-viewport-helper">
              <img
                className="split-view__img"
                alt="Bar work"
                src={imgLeft} />
              {showTeam ? 
                <h1 className="split-view__h1 h3">
                  <span>Werde</span>
                  <span><span className="text-outline">Teil</span> von</span>
                  <span>System.B</span>
                </h1>
              :
                <h1 className="split-view__h1 h3">
                  <span>Finde</span>
                  <span className="text-outline">deinen </span>
                  <span>Gastro-Job</span>
                </h1>
              }
              {!showTeam &&
                <p 
                  className="split-view__text medium-text invisible-small"
                >
                  Du hast Lust auf Gastronomie?<br></br> Dann klicke hier und werde Teil unserer Crew. Egal ob du Einsteiger*in oder schon Profi bist, wir freuen uns auf deine Bewerbung!
                </p>
              }
            </div>
          </div>
        }
        {showTeam &&
          <div 
            className={getSplitClasses('right') + ' team-intro'}
          >
            <TextAction
              text={'Du möchtest Erfahrungen im gastronomischen Bereich sammeln, oder bist vielleicht sogar schon ein Gastro-Profi? Dann bist du bei uns genau richtig. Wir arbeiten seit Jahren mit unterschiedlichen Eventlocations, Clubs und Konzerthäusern zusammen und verschaffen dir Jobs von Spandau bis Köpenick. Das klingt gut? Dann melde dich und werde Teil unserer Crew! Wir freuen uns auf deine Bewerbung!'}
              actionText={emailTextTeam}
              actionLink={emailLinkTeam}
            />
          </div>
        }
        {!showTeam &&
          <div
            className={getSplitClasses(showCustomer ? 'left' : 'right') + ' bg-light customer'}
            onClick={onCustomerClick}
          >
            <div onClick={onLogoClick} className={`split-view__logo${showCustomer ? ' is-left': ' invisible-small'}`}>
              <LogoBlack />
            </div>
            <div className="small-viewport-helper">
              <img
                className="split-view__img"
                alt="Behind the bar"
                src={imgRight} />
              {showCustomer ?
                <h1 className="split-view__h1 h3">
                  <span>Finde dein</span>
                  <span className="text-outline">Personal</span>
                </h1>
              :
                <h1 className="split-view__h1 h3">
                  <span>Finde</span>
                  <span className="text-outline">dein</span>
                  <span>Personal</span>
                </h1>
              }
              {!showCustomer &&
                <p
                  className="split-view__text medium-text invisible-small"
                >
                  Du bist auf der Suche nach Gastro-Personal,<br></br> Logistik oder allgemeiner Unterstützung? <br></br>System.B hat alles was dein Event benötigt! Zusammen finden wir das perfekte Konzept für dich!
                </p>
              }
            </div>
          </div>
        }
        {showCustomer &&
          <div 
            className={getSplitClasses('right') + ' customer-intro'}
          >
            <TextAction
              text={'Wenn du auf der Suche nach Personal für deine Veranstaltung bist oder Unterstützung bei der Organisation suchst, bist du hier genau richtig. Wir sind Personaldienstleister für Konzerthäuser, Clubs, Festivals, Open Air Locations, Catering Unternehmen und alle die ohne Schlips und Kragen arbeiten und bieten Unterstützung im Bühnenbau sowie Veranstaltungstechniker**innen an. Schreib uns einfach an! Wir freuen uns auf dich!'}
              actionText={emailTextCustomer}
              actionLink={emailLinkCustomer}
            />
          </div>
        }
      </div>
      <Outlet />
    </>
  );
}

export default App;
