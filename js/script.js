scrollpos = window.scrollY;

const header_height = document.querySelector("#titlepage").offsetHeight - 200
const topnav = document.querySelector(".topnav")

scrollstart = window.scrollY;
scrolldirection = 1;
hideheight = header_height + 500
hidedistance = 300;

window.addEventListener('scroll', function() { 
    if (!((this.window.scrollY - scrollpos) * scrolldirection >= 0)){
        scrolldirection = scrolldirection * -1
        scrollstart = window.scrollY
    }


    scrollpos = window.scrollY;


    if (scrollpos >= hideheight && -1*(scrollstart - scrollpos) > hidedistance)
        topnav.classList.add('topnav-hidden')
    if (scrollstart - scrollpos > hidedistance)
        topnav.classList.remove('topnav-hidden')


    if (scrollpos >= header_height) {  
        topnav.classList.add('topnav-opaque')
    }
    else { 
        topnav.classList.remove('topnav-opaque')
        topnav.classList.remove('topnav-hidden')
    }

})