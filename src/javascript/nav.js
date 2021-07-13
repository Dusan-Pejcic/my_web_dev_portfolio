export const navMenuOnScroll = ()=> {
    const ViewportHeight = window.innerHeight;
    const menuButton = document.querySelector('.icon__container');
    window.addEventListener('scroll', ()=> {
        const scrollAmount = window.scrollY;

        if (scrollAmount > ViewportHeight) {
            menuButton.classList.add("icon__container--visable");
            
        } else {
            menuButton.classList.remove("icon__container--visable");

        }
    })
}

export const clickMenu = ()=> {
    const button = document.querySelector('.icon__container');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.sm-menu');
    const openMenuLinks = document.querySelectorAll('.open-menu-link');

    button.addEventListener('click', ()=> {
        menu.classList.add("clicked");
    })
    closeButton.addEventListener('click', ()=> {
        menu.classList.remove("clicked");
    })
    openMenuLinks.forEach((element)=> {
        element.addEventListener('click', ()=> {
            menu.classList.remove("clicked");  
        })  
    })
}