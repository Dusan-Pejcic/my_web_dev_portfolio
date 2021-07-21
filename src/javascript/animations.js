import { gsap, Power4 } from "gsap";
/* Power4 je samo importovan gore */
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const heroSectionTextAnimation = ()=> {

    const heroTextL = gsap.timeline({ defaults: {duration: .4,
        y: -50,
        opacity: 0,
        stagger: 0.05,
        ease:Power4.easeOut,} });

    heroTextL.from('.first-row', {
        
    }).from('.second-row', {
        
    }, '-=.7' ).from('.third-row', {
        
    }, '-=.7').from('.fourth-row', {
        
    }, '-=.7').from('.color-field', {
        duration: .4,
        y: -200,
        stagger: .07,
        ease:Power4.easeOut,
    }, -.1)

}

export const scrollAimations = ()=> {
/* ____________________ services section fade in */
    const greyBg = gsap.timeline({defaults: {
        duration: .4,
        opacity: 0,
        ease:Power4.easeOut,
    }});

    greyBg.from('main', {})
    .from('.section__header--grey', {}, 0)
    .from('.first-section__header', {
        y: 100  
    }).from('.container--white', {
        y:100
    }, '-=.3')

    ScrollTrigger.create({
        animation: greyBg,
        trigger: ".first-section__header",
        start: 'top 80%',
        end: "+=500"
    })
    /* _____________________________ cardServices fade in */

    const cardServices = gsap.timeline({defaults: {
        duration: .4,
        opacity: 0,
        ease:Power4.easeOut,    
    }})

    cardServices.from('.card__services', {y:100})
    .from('.services__li-item',{
        y:20,
        stagger: .06} )
    
    ScrollTrigger.create({
        animation: cardServices,
        trigger: ".section__card-container",
        start: 'top 80%',
        end: "+=500"
    })
}
