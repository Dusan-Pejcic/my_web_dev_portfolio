
export const alignNavAndText = ()=> {
    const getNavWidth = ()=> {
        const heroTextContainer = document.querySelector('.hero-text-container');
        const containerWidth = heroTextContainer.clientWidth;
        return containerWidth;
    }
    const width = getNavWidth();
    const setNavWidth = (number)=> {
        const largeMenuContainer = document.querySelector(".large-menu-container");
        largeMenuContainer.style.width = `${number}px`;
    }
    setNavWidth(width);
}