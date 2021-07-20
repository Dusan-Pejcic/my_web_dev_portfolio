import { gsap, Power4 } from "gsap";
/* Power4 je samo importovan gore */
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const animTest = ()=> {

    const tl = gsap.timeline()

    tl.from('.hero-text-l span', {
        duration: .4,
        y: -50,
        opacity: 0,
        stagger: 0.05
    }).from('.color-field', {
        duration: .4,
        y: -200,
        stagger: .07
    }, -.1)

}
