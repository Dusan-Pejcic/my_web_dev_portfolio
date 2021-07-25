import '../sass/styles.scss';
/* import { getNavWidth, setNavWidth } from "./hero"; */
/* import { alignNavAndText } from "./hero"; */
import { clickMenu, navMenuOnScroll } from "./nav";
import { heroSectionTextAnimation } from "./animations";
import { scrollAimations } from "./animations";

console.log('Webpack Boilerplate');
/* alignNavAndText(); */
clickMenu();
navMenuOnScroll();
/*  animations  */
heroSectionTextAnimation();
scrollAimations();
const fn = () => console.log("Check out bundle.js, this ES6 arrow function was transformed to classic function for older browser support!")


 
