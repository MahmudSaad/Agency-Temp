let btntop = document.getElementById("topbtn");
let headNav = document.getElementById("header");
let lost = document.querySelectorAll("a.changjs");


function downMove() {
    navi.classList.toggle('javastog');
};

document.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        btntop.style.display = "block";
    } else {
        btntop.style.display = "none";
    }

}

window.onscroll = function () {
    tagrobat()
};

function tagrobat() {
    if (document.documentElement.scrollTop >= 88) {
        headNav.style.background = "#6195ff";
        headNav.style.height = "75px";
        

        lost[0].style.color = "#f5f6fa";
        lost[1].style.color = "#f5f6fa";
        lost[2].style.color = "#f5f6fa";
        lost[3].style.color = "#f5f6fa";
        lost[4].style.color = "#f5f6fa";
        lost[5].style.color = "#f5f6fa";
        lost[6].style.color = "#f5f6fa";
        lost[7].style.color = "#f5f6fa";
    } else {
        headNav.style.background = "transparent";
        lost[0].style.color = "white";
        lost[1].style.color = "white";
        lost[2].style.color = "white";
        lost[3].style.color = "white";
        lost[4].style.color = "white";
        lost[5].style.color = "white";
        lost[6].style.color = "white";
        lost[7].style.color = "white";
    }
};


function myfunction(){
    x = document.getElementById("trast");
     
    
    if(x.style.display =="none" || window.width>990){
        x.style.display="block"; 
    }
    
    else{
        x.style.display="none";
    }

};
     


