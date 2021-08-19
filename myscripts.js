
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

let lastScrollTop;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-110px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});


//chnage nav to active on scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav #navbar .links ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });
  if (current === "home"){
      console.log(true)
      document.getElementById("name").innerHTML = printName("Toluwalase Afolabi");
  }

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};

//Drop down menu
let menuBar = document.querySelector("nav .menu");
let dropDown = document.querySelector("nav #menu");
let link= document.querySelector("nav .link"); 

const menu = () => {
    if (dropDown.style.display === "grid") {
      dropDown.style.display = "none";
      menuBar.innerHTML = "menu";
    }
    else {
        dropDown.style.display = "grid";  
        menuBar.innerHTML = "close";
    }
  }

  //cancel menulink onClick
const linkfun = () => {
    if (dropDown.style.display === "grid") {
     dropDown.style.display = "none";
     menuBar.innerHTML = "menu";
    }
    else {
        //dropDown.style.display = "grid";  
        menuBar.innerHTML = "close";
    }
}


//Task 2 - Printout Out my name
const printName = (name) => {
    return name
}

