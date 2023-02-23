import React, { useState } from 'react';
import Customer from '../Customer';
import Team from '../Team';
import './index.sass'
const logo =  require('./../../assets/logo_small.png')

function App() {
  const [showTeam, setShowTeam] = useState<boolean>(false)
  const [showCustomer, setShowCustomer] = useState<boolean>(false)
  const getSplitClasses = (direction: string) => {
    return `split-view__split split-view__split--${direction}`
  }

  return (
    <>
      <div className="split-view">
        <div 
          className={getSplitClasses('left')}
          onClick={() => setShowTeam(true)}
        >
          <img
            width="112px"
            src={logo}
            alt="System B Logo"
            className={`split-view__logo${showTeam ? ' is-left': ''}`}
          />
          <div>
            <img
              className="split-view__img"
              alt="Bar work"
              src="https://www.blackforestbaracademy.de/wp-content/uploads/2020/11/advanced-bartender-kurs-freiburg-cocktails.jpg" />
            <h1 className="split-view__h1 h1">
              <span>Werde</span>
              <span><span className="text-outline">Teil </span>von</span>
              <span>System B</span>
            </h1>
            {!showTeam &&
              <p 
                className="split-view__text medium-text"
              >
                System B hat alles was dein Event benötigt! Du bist auf der Suche nach Personal, Logistik oder allgemeiner Unterstützung. Wir finden das perfekte Konzept für dich.
              </p>
            }
          </div>
        </div>
        <div 
          className={getSplitClasses('right') + ' team-intro'}
        >
          <p className="medium-text spacing-bottom-20">System B hat alles was dein Event benötigt! Du bist auf der Suche nach Personal, Logistik oder allgemeiner Unterstützung. Wir finden das perfekte Konzept für dich. System B hat alles was dein Event benötigt! Du bist auf der Suche nach Personal, Logistik oder allgemeiner Unterstützung. Wir finden das perfekte Konzept für dich. System B hat alles was dein Event benötigt! Du bist auf der Suche nach Personal, Logistik oder allgemeiner Unterstützung. Wir finden das perfekte Konzept für dich.</p>
            <a className="link large-text primary-text" href="#">Erfahre mehr</a>
        </div>
        {!showTeam &&
          <div
            className={getSplitClasses('right') + ' bg-light customer'}
            onClick={() => setShowCustomer(true)}
          >
            <div>
              <img
                className="split-view__img"
                alt="Bar work"
                src="https://d3gz3j27p2eka6.cloudfront.net/sites/default/files/styles/image_spotlight_xl/public/2021-03/ebs-berlin-spotlight-01.jpg?h=3cd06fc8&itok=CH0eaXOy" />
              <h1 className="split-view__h1 h1">
                <span className="text-outline">Buche</span>
                <span>bei</span>
                <span>System B</span>
              </h1>
              <p
                className="split-view__text medium-text"
              >
                System B hat alles was dein Event benötigt! Du bist auf der Suche nach Personal, Logistik oder allgemeiner Unterstützung. Wir finden das perfekte Konzept für dich.
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
