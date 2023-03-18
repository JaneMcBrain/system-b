import React, { useState } from 'react';
import LogoBlack from '../../components/LogoBlack';
import LogoWhite from '../../components/LogoWhite';
import TextAction from '../../components/TextAction/TextAction';
import { emailLinkTeam, emailTextTeam } from '../../utils';
import Customer from '../Customer';
import Team from '../Team';
import './styles.sass'
const imgLeft =  require('./../../assets/images/bar.jpg')
const imgRight =  require('./../../assets/images/bottles.jpg')

function App() {
  const [showTeam, setShowTeam] = useState<boolean>(false)
  const [showCustomer, setShowCustomer] = useState<boolean>(false)
  const getSplitClasses = (direction: string) => {
    return `split-view__split split-view__split--${direction}`
  }

  return (
    <>
      <div className={`split-view ${showTeam ? 'team' : ''} ${showCustomer ? 'customer' : ''}`}>
        {!showCustomer &&
          <div 
            className={getSplitClasses('left')}
            onClick={() => setShowTeam(true)}
          >
            <div className={`split-view__logo${showTeam ? ' is-left': ''}`}>
              <LogoWhite />
            </div>
            <div>
              <img
                className="split-view__img"
                alt="Bar work"
                src={imgLeft} />
              {showTeam ? 
                <h1 className="split-view__h1 h3">
                  <span>Werde</span>
                  <span><span className="text-outline">Teil</span> von</span>
                  <span>System B.</span>
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
            onClick={() => setShowCustomer(true)}
          >
            <TextAction
              text={'Du möchtest Erfahrungen im gastronomischen Bereich zu sammeln, oder bist vielleicht sogar schon ein Gastro-Profi? Dann bist du bei uns genau richtig. Wir arbeiten seit Jahren mit unterschiedlichen Eventlocations, Clubs und Konzerthäusern zusammen und verschaffen dir Jobs von Spandau bis Köpenick. Das klingt gut? Dann melde dich und werde Teil unserer Crew! Wir freuen uns auf deine Bewerbung!'}
              actionText={emailTextTeam}
              actionLink={emailLinkTeam}
            />
          </div>
        }
        {!showTeam &&
          <div
            className={getSplitClasses('right') + ' bg-light customer'}
            onClick={() => setShowCustomer(true)}
          >
            <div className={`split-view__logo${showCustomer ? ' is-left': ' invisible-small'}`}>
            <LogoBlack />
            </div>
            <div>
              <img
                className="split-view__img"
                alt="Behind the bar"
                src={imgRight} />
              <h1 className="split-view__h1 h3">
                <span>Finde</span>
                <span className="text-outline">dein</span>
                <span>Personal</span>
              </h1>
              <p
                className="split-view__text medium-text invisible-small"
              >
                Du bist auf der Suche nach Gastro-Personal,<br></br> Logistik oder allgemeiner Unterstützung? <br></br>System.B hat alles was dein Event benötigt! Zusammen finden wir das perfekte Konzept für dich!
              </p>
            </div>
          </div>
        }
      </div>
      {showTeam &&
        <Team />
      }
      {showCustomer &&
        <Customer />
      }
    </>
  );
}

export default App;
