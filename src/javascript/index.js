import '../sass/styles.scss';
/* import { getNavWidth, setNavWidth } from "./hero"; */
import { alignNavAndText } from "./hero";

console.log('Webpack Boilerplate');
alignNavAndText();
const fn = () => console.log("Check out bundle.js, this ES6 arrow function was transformed to classic function for older browser support!")
