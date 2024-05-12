//Menu
var navLinks = document.getElementById("navLinks");
   
function showMenu(){
 navLinks.style.right ="0";
}

function hideMenu(){
 navLinks.style.right ="-200px";
}
var video = document.getElementById("myVideo");

function changeSpeed(speed) {
video.playbackRate = speed;
}

changeSpeed(0.7);

//Current Laws
function openTab(event, sectionId) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.getElementById(sectionId).classList.add("active");
    event.currentTarget.classList.add("active");
}

