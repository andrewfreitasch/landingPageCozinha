let iconeMenu = document.getElementById("menu_icon")
let navMobile = document.getElementById('mobile_menu')
let ulMobile = document.getElementById('mobile_nav_list')
//menu mobile
function clicouMenu(){
    if(navMobile.style.display=="block"){
        navMobile.style.display="none"
        iconeMenu.classList.remove('fa-x')
        
    } else {
        iconeMenu.classList.add('fa-x')
        navMobile.style.display="block"
    }
}

iconeMenu.addEventListener("click", clicouMenu)

//animçao header
function tamanhoTela() {
    if (window.innerWidth > 1170) {
        navMobile.style.display="none"
    } 
}


tamanhoTela();


window.addEventListener('resize', tamanhoTela);

let posicaoAnterior = window.pageYOffset;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    let posicaoAtual = window.pageYOffset;

    if (posicaoAnterior > posicaoAtual) {
      
      header.style.top = "0";
      header.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'
    } else {
      
      header.style.top = "-100px";
    }

    posicaoAnterior = posicaoAtual;
  });

  //animacao

  const myObserver = new IntersectionObserver((entries) => { 
    entries.forEach((entry) =>{
      if(entry.isIntersecting == true){
          entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })    

  const elements = document.querySelectorAll('.hidden')

  elements.forEach((element) => myObserver.observe(element)) 
  
  //forEach pega elemento por elemento, um element de cada vez, no caso um .hidden de cada vez

  //myObserver.observe(element) = 'myObserver' recebe 'new IntersectionObserver', que serve para indicar em tempo real quando algum elemento está vísivel ou não. O '.observe(element)' é para indicar qual elemento queremos observar se está ou não vísivel, nesse caso queremos observar o 'element', que é o '.hidden'.
  

  /* https://www.youtube.com/watch?v=g29xXRHtnIs  link do video*/
 












  