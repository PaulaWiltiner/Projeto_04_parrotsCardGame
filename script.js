
const lista_imagens=['Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif','Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/revertitparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/tripletsparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/unicornparrot.gif']

let lista_verificar =[];
let lista_tagelem=[];
function comparador() { 
	return Math.random() - 0.5; 
}


function inserirCartas(qtd){
    lista_imagens.sort(comparador);
    let lista_final =[];
    let quant = qtd/2;
    let i = 0;
    while (i < quant ){
        lista_final.push(lista_imagens[i])
        lista_final.push(lista_imagens[i])
        i = i + 1;
    }
    if(i===quant) {
        lista_final.sort(comparador);
        let contador =0;
        let jogo = document.querySelector(".jogo");
        while (contador < qtd){
            jogo.innerHTML = jogo.innerHTML + "<div class='card flip' onclick='virar(this)' ><img class='front face' src='Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png' > <img class='back face' src='"+lista_final[contador]+"'></div>";
            contador= contador+1;

        }
         }
    }

function start (){
    let quantidade_cartas = prompt("Qual o número cartas que deseja ?");
    if (isNaN(quantidade_cartas) === false){
        Number(quantidade_cartas);
        if( quantidade_cartas <= 14 && quantidade_cartas >= 4){
            if (quantidade_cartas%2 === 0 ){
                alert(" Vamos começar o jogo !");
                inserirCartas(quantidade_cartas);
            } else {
                alert("Por favor, insira um número par de cartas.");
            }
        }else{
            alert("Por favor, insira um número de cartas entre 4 e 14.");
            start()
        }
    }else{
        alert("Por favor, insira um número par de cartas entre 4 e 14.");
        start()
    }
}
start()

function verificar () {
    if(lista_verificar[0][0].getAttribute("src")===lista_verificar[1][0].getAttribute("src")){
        for (i=0; i<lista_tagelem.length; i++){
            lista_tagelem[i].setAttribute("onclick","virar(this)")
          }
        lista_verificar[0][1].removeAttribute("onclick")
        lista_verificar[1][1].removeAttribute("onclick")
        lista_verificar=[];
        lista_tagelem=[];
    }else{
        lista_verificar[0][1].classList.add("flip");
        lista_verificar[1][1].classList.add("flip");
        for (i=0; i<lista_tagelem.length; i++){
            lista_tagelem[i].setAttribute("onclick","virar(this)")
          }
        lista_tagelem=[]
        lista_verificar=[];
    }
}



function virar(elemento) {
    console.log("ola")
    let lista_elem = [];
    elemento.classList.remove("flip");
    let back = elemento.querySelector(".back");
    lista_elem.push(back);
    lista_elem.push(elemento);
    lista_verificar.push(lista_elem);
    if(lista_verificar.length===2){
      lista_tag = document.querySelector(".jogo").querySelectorAll("div")
      for (i=0; i<lista_tag.length; i++){
        if (lista_tag[i].getAttribute("onclick")!==null){
            lista_tag[i].removeAttribute("onclick")
            lista_tagelem.push(lista_tag[i])
        }
      }
      setTimeout(verificar, 1000);
    }
}


