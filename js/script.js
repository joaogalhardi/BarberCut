// WhatsApp

function clickInWhatsapp(){

setTimeout(() => {
  document.getElementById("caixaTexto").style.visibility = 'visible'
}, 5000);


caixaTexto.onclick = () => {
  document.getElementById("caixaTexto").style.visibility = "hidden";
};
};

clickInWhatsapp();

//Menu-Mobile

function mobileMenu(){

const btnMobile = document.querySelector("#btn-mobile");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".header-menu a")

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");
}

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active')
  })
})

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

};


// Scroll Animation

function animationScroll(){

const sections = document.querySelectorAll('.js-scroll');
const browser = window.matchMedia('(min-width:1600px)').matches;
let windowHalf;

  if(!browser){
   windowHalf = window.innerHeight * 0.6;
  } else {
   windowHalf = window.innerHeight * 0.7;
  };

  function initScroll(){
    sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = ( sectionTop - windowHalf) < 0;
    
    if(isSectionVisible){
      section.classList.add('ativo');
    }else{
      section.classList.remove('ativo');
    }
  });
};

initScroll();

window.addEventListener('scroll', initScroll);
};

animationScroll();

// Scroll Suave

function smoothScroll(){
const linksInternos = document.querySelectorAll('.js-links a')

function activeLink(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  let topo = section.offsetTop;
  topo -= 30;

  window.scrollTo({
    top: topo,
    behavior:'smooth',
  });   
};


linksInternos.forEach((link) => {
  link.addEventListener('click', activeLink);
});
};

smoothScroll();