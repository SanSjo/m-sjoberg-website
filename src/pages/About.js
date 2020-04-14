import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import '../components/styles/about.css'


export const About = () => {
  return (
    <>
    <Header />
    <section className="about">
      <div className="main-container">
        <div className="header">
          <h1>VÅR HISTORIA</h1>
        </div>
        <div className="container">
        <div className="about-container">
          <h2 className="about-header">OM OSS</h2>
          <p className="about-para">
            Ingeniörsfirman M.Sjöberg AB är sedan 1953 importör och distributör av fordonselektriska produkter till fordonsindustrin och eftermarknad. Vi har ett 20-tal agenturer och arbetar med 12-24V produkter av hög kvalitet anpassade för nordiskt klimat.
            Vi uppfyller högt ställda krav och är ISO-certifierade.
            Kontor, lager, support och service i egen fastighet i Solna.
          </p>
          <p className="about-para">
            Bland våra tillverkande kunder finns: Volvo, Scania, Komatsu, Rottne, Valtra, Autokaross. Liebherr, Bobcat, Agco, Pon, Swecon, Dynapac, John Deere, Valtra, Autokaross…
          </p>
          <p className="about-para">
            Bland våra eftermarknadskunder finns: Autoexperten, KGK, Lantmännen, Kjell&Co, Meca, Skogma, Proffsmagasinet, Ahlsell, Stjärnafyrkant, Dialect, NetOnNet, Clas Ohlson, Huzells, Abkati…
          </p>        
        </div>

        <div className="about-container">
          <h2 className="about-header">KVALITETSPOLICY</h2>
          <p className="about-para">Ingeniörsfirman M Sjöberg erbjuder sina kunder ett brett utbud av de senaste produkterna inom fordonselektronik. För att uppfylla de krav som våra kunder ställer på oss fokuserar vi på produkter av hög kvalitet till konkurrenskraftiga priser. Självklart uppfyller produkterna även kraven som ställs i gällande författningar som t ex RoHS, WEEE m fl. För att vara ledande inom Sverige när det gäller fordons elektronik produkter och valet för Sveriges återförsäljare inom fordonselektronik branschen arbetar Ingenjörsfirman M.Sjöberg AB med att:
          </p>
          <ul className="policy">
            <li className="policy-list"><p className="policy-para">vara uppdaterade på produktnyheter och ny teknologi</p>
            </li>
            <li className="policy-list"><p className="policy-para">hålla våra leveranstider</p>
            </li>
            <li className="policy-list"><p className="policy-para">hantera reklamationer och klagomål så snabbt som möjligt, när de uppstår</p>
            </li>
          </ul>
        </div>
        <div className="about-container">
          <h2 className="about-header">MILJÖPOLICY</h2>
          <p className="about-para">Ingeniörsfirman M Sjöberg erbjuder sina kunder ett brett utbud av de senaste produkterna inom fordonselektronik. För att uppfylla de krav som våra kunder ställer på oss fokuserar vi på produkter av hög kvalitet till konkurrenskraftiga priser. Självklart uppfyller produkterna även kraven som ställs i gällande författningar som t ex RoHS, WEEE m fl. För att vara ledande inom Sverige när det gäller fordons elektronik produkter och valet för Sveriges återförsäljare inom fordonselektronik branschen arbetar Ingenjörsfirman M.Sjöberg AB med att:
          </p>
          <ul className="policy">
            <li className="policy-list"><p className="policy-para">vara uppdaterade på produktnyheter och ny teknologi</p>
            </li>
            <li className="policy-list"><p className="policy-para">hålla våra leveranstider</p>
            </li>
            <li className="policy-list"><p className="policy-para">hantera reklamationer och klagomål så snabbt som möjligt, när de uppstår</p>
            </li>
          </ul>
        </div>
        <div className="about-container">
          <h2 className="about-header">MILJÖPOLICY</h2>
          <p className="about-para">Ingeniörsfirman M Sjöberg erbjuder sina kunder ett brett utbud av de senaste produkterna inom fordonselektronik. För att uppfylla de krav som våra kunder ställer på oss fokuserar vi på produkter av hög kvalitet till konkurrenskraftiga priser. Självklart uppfyller produkterna även kraven som ställs i gällande författningar som t ex RoHS, WEEE m fl. För att vara ledande inom Sverige när det gäller fordons elektronik produkter och valet för Sveriges återförsäljare inom fordonselektronik branschen arbetar Ingenjörsfirman M.Sjöberg AB med att:
          </p>
          <ul className="policy">
            <li className="policy-list"><p className="policy-para">vara uppdaterade på produktnyheter och ny teknologi</p>
            </li>
            <li className="policy-list"><p className="policy-para">hålla våra leveranstider</p>
            </li>
            <li className="policy-list"><p className="policy-para">hantera reklamationer och klagomål så snabbt som möjligt, när de uppstår</p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>
    <Footer />
    </>
  )

}

export default About