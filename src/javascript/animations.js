import { gsap, Power4 } from "gsap";
/* Power4 je samo importovan gore */
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const colorFieldsAnimation = ()=> {
    gsap.from('.color-field', {
        duration: .6,
        y: -200,
        stagger: .07,
        ease:Power4.easeOut,
    }, -.1)
}

export const heroSectionTextAnimation = ()=> {
/* _________________________ hero text animation */
    const heroTextL = gsap.timeline({ defaults: {duration: .6,
        opacity: 0,
        stagger: 0.05,
        ease:Power4.easeOut,} });

    heroTextL.from('.first-row', {

    }).from('.second-row', {
        
    }, '-=.7' ).from('.third-row', {
        
    }, '-=.7').from('.fourth-row', {
        
    }, '-=.7')
}

export const scrollAimations = ()=> {
/* ____________________ services section fade in */
const firstSectionHeader = document.querySelector('.first-section__header'); 
const firstSectionHeaderIsPresent = document.querySelector('body').contains(firstSectionHeader);

if(firstSectionHeaderIsPresent){
    const greyBg = gsap.timeline({defaults: {
        duration: .6,
        opacity: 0,
        ease:Power4.easeOut,
    }});
    
    greyBg.from('main', {})
        .from('.first-section__header', {
            y: 100  
            });
    
    ScrollTrigger.create({
        animation: greyBg,
        trigger: ".first-section__header",
        start: 'top 80%',
        end: "+=500"
    })  
}

    /* ______________________________ container white */

    const whiteContainers = document.querySelectorAll('.container--white');
    
    whiteContainers.forEach((container)=> {
        gsap.from(container, {
            opacity: 0,
            y:100,
           scrollTrigger: {
              trigger: container,
              start: "top 80%", 
           }
        })
    });

    /* _____________________________ section headers */
    const sectionHeaders= document.querySelectorAll('.section__header');

    sectionHeaders.forEach((header)=> {
        gsap.from(header, {
            opacity: 0,
            y:100,
            scrollTrigger: {
                trigger: header,
                strat: 'top 80%'
            } 
        })
    })
    /* _____________________________ cardServices fade in */

    const cardServices = document.querySelector('.card__services'); 
    const cardServicesIsPresent = document.querySelector('body').contains(cardServices);

    if(cardServicesIsPresent){

        const cardServices = gsap.timeline({defaults: {
            duration: .6,
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


    /* ___________________________ work section */
    const works = document.querySelectorAll('.single-work-container');
    works.forEach((work)=>{
      const phoneMockup = work.querySelector('.phone-mockup');
      const tabletMockup = work.querySelector('.tablet-mockup');
      const cardWork = work.querySelector('.card__work');

      const mockupsAnim = gsap.timeline({defaults: {
        duration: .6,
        opacity: 0,
        ease:Power4.easeOut,    
    }});
      mockupsAnim.from(phoneMockup, {y:100})
      .from(tabletMockup,{y:100})
      .from(cardWork, {y:100})

      ScrollTrigger.create({
        animation: mockupsAnim,
        trigger: work,
        start: 'top 70%'
    })
    })

    /* ____________________ form */

    const form = document.querySelector('.contact-form'); 
    const formIsPresent = document.querySelector('body').contains(form);
    if(formIsPresent){
        gsap.from('.contact-form__container', { 
            duration: .6,
            opacity: 0,
            y: 100,
            ease:Power4.easeOut, 
            scrollTrigger: {
                trigger: form,
                start: 'top 70%',
            }
        })
    }
    
    
    

}
