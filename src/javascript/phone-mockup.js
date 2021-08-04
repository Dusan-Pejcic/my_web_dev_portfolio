export const setHeightOfThePhoneMockup = ()=> {
    const container = document.querySelector('.work__wrap');
    const phoneMockup = document.querySelectorAll('.phone-mockup');

    const height = container.clientHeight;
    phoneMockup.forEach((mockup) => { mockup.style.height = `${height}px`; })
}