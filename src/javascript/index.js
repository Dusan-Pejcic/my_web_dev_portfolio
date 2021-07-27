import '../sass/styles.scss';
/* import { getNavWidth, setNavWidth } from "./hero"; */
/* import { alignNavAndText } from "./hero"; */
import { clickMenu, navMenuOnScroll } from "./nav";
import { heroSectionTextAnimation } from "./animations";
import { scrollAimations } from "./animations";
import { colorFieldsAnimation } from "./animations";
import { faqPageAnimations } from "./animations";
import { smHeroTextAnimation } from "./animations";

console.log('Webpack Boilerplate');
/* alignNavAndText(); */
colorFieldsAnimation();
clickMenu();
navMenuOnScroll();
/*  _____________________________________________________ANIMATIONS  */

/* ______________________________________________________to run only if hero section is present */
const heroTextContainer = document.querySelector('.hero-text-container'); 
const heroText = document.querySelector('body').contains(heroTextContainer);

if(heroText){
    function myFunction(x) {
        if (x.matches) { // If media query matches
            smHeroTextAnimation();
        } else {
            heroSectionTextAnimation();
        }
      }
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
}

/* _______________________________________________________run only if FAQ page */

const faqSection = document.querySelector('#faq-section'); 
const faqSectionIsPresent = document.querySelector('body').contains(faqSection);

if(faqSectionIsPresent) {
    faqPageAnimations();
}

scrollAimations();



 
