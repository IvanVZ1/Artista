(function(){
    const openButton = document.querySelector('.nav-menu');
    const menu = document.querySelector('.nav-link');
    const closeButton = document.querySelector('.nav-close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav-link--show');
    });

    closeButton.addEventListener('click', ()=>{
        menu.classList.remove('nav-link--show');
    });
})();