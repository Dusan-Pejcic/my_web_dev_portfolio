
export const alignNavAndText = ()=> {
    const getNavWidth = ()=> {
        const heroTextContainer = document.querySelector('.hero-text-container');
        const containerWidth = heroTextContainer.clientWidth;
        return containerWidth;
    }
    const width = getNavWidth();
    const setNavWidth = (number)=> {
        const largeMenuContainer = document.querySelectorAll(".large-menu-container");
        // 
/*         const closeIconButtonWrapper = document.querySelector(".close-button__wrapper");
 */        largeMenuContainer.forEach((element) => { element.style.width = `${number}px`; })    
        /* closeIconButtonWrapper.style.width = `${number}px`; */   
    }
    setNavWidth(width);
}