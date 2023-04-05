import { Link } from "react-router-dom";
import { FaqQuestions } from "../components/FaqQuestions";
import "../styles/Faq.css";



export function FaqPage () {
    return(
      <div>
        <h1 className="title">FAQ</h1>
        <div className="faq">
          <FaqQuestions
          question="Kako se prijaviti na chat aplikaciju?"
          answer="Da bi se prijavili na chat aplikaciju morate prvo odabrati avatara i username,te klikniti na gumb 'Sign in'."
          />
          <FaqQuestions
          question="Kako izraditi chat aplikaciju?"
          answer="Chat aplikaciju je najbolje izraditi tako da prvo upišete edukaciju u Algebri, te istu pohađate i završite."
          />
          <FaqQuestions
          question="Što je FAQ stranica?"
          answer="Stranice s često postavljanim pitanjima (FAQ) sadrže popis često postavljanih pitanja i odgovora na web stranici o temama kao što su radno vrijeme, dostava i rukovanje, informacije o proizvodu i politike povrata."
          />
        </div>
        <Link to="/" className="faq_sign-in">Sign in</Link>
      </div>
    );
  }