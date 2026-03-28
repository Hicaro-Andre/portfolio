import ptNavbar from "./pt/navbar";
import enNavbar from "./en/navbar";

import ptHero from "./pt/hero";
import enHero from "./en/hero";

import ptAbout from "./pt/about";
import enAbout from "./en/about";

import ptSkills from "./pt/skills";
import enSkills from "./en/skills";

import ptExperience from "./pt/experience";
import enExperience from "./en/experience";

// import ptFormation from "./pt/formation";
// import enFormation from "./en/formation";

import ptContact from "./pt/contact";
import enContact from "./en/contact";

import ptFooter from "./pt/footer";
import enFooter from "./en/footer";

const translations = {
  pt: {
    navbar: ptNavbar,
    hero: ptHero,
    about: ptAbout,
    skills: ptSkills,

    experience:ptExperience,
    // formation:ptFormation,
    contact:ptContact,
    footer:ptFooter
  },
  en: {
    navbar: enNavbar,
    hero: enHero,
    about: enAbout,
    skills: enSkills,

    experience:enExperience,
    // formation:enFormation,
    contact:enContact,
    footer:enFooter
  },
};

export default translations;