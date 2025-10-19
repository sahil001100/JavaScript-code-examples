const menu = document.querySelector('#menu');
let active = null;
menu.addEventListener('click', (e) =>{
    if(e.target && e.target.id === 'item'){
        const clicked =e.target.closest('#item');
        if(!clicked) return;

        // Remove active class from previously active item
        if(active){
            active.classList.remove('active');
        }

        clicked.classList.add('active');
        active = clicked;

        // styles
        e.target.style.color="white";
        e.target.style.fontSize = "30px";
    }
})