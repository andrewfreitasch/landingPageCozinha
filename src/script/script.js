let iconeMenu = document.getElementById("menu_icon")
let navMobile = document.getElementById('mobile_menu')
let ulMobile = document.getElementById('mobile_nav_list')

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

function tamanhoTela() {
    if (window.innerWidth > 1170) {
        navMobile.style.display="none"
    } 
}

// Chama a função assim que a página é carregada
tamanhoTela();

// Monitora mudanças no tamanho da tela
window.addEventListener('resize', tamanhoTela);

let posicaoAnterior = window.pageYOffset;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    let posicaoAtual = window.pageYOffset;

    if (posicaoAnterior > posicaoAtual) {
      // Scroll para cima → mostra a navbar
      header.style.top = "0";
      header.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'
    } else {
      // Scroll para baixo → esconde a navbar
      header.style.top = "-100px";
    }

    posicaoAnterior = posicaoAtual;
  });
