// WhatsApp

// Após 5 segundos passados do usuário na página será exibida a caixa de texto
setTimeout(() => {
  document.getElementById("caixaTexto").style.visibility = 'visible'
}, 5000);

// Quando for dado um clique na caixa de texto a mensagem some
caixaTexto.onclick = () => {
  document.getElementById("caixaTexto").style.visibility = "hidden";
};

//Menu-Mobile
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


// Scroll Animation

ScrollReveal().reveal(
  `
  .introducao,
  .sobre,
   h2,
  .texto,
  .botao2,
  .servicos,
  .galeria,
  .precos,
  .contato,
  .footer
`,
  { delay: 600, duration: 600, scale: 0.85, distance: '10px',
  opacity: 0,}
);

