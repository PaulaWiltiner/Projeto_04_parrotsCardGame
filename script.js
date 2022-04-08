
const lista_imagens=['Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif','Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/revertitparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/tripletsparrot.gif', 'Arquivos Úteis - Projeto 04 - Parrot Card Game/unicornparrot.gif']

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
            jogo.innerHTML = jogo.innerHTML + "<div class='card anima' onclick='virar(this)'><img class='front-face face' src='Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png' ><img class='back-face face visib' src='"+lista_final[contador]+"'></div>";
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

function virar(elemento) {
    elemento.classList.remove("anima");
    elemento.setAttribute("disabled","disabled");
    let front = elemento.querySelector(".front-face");
    front.classList.remove("visib");
    let back = elemento.querySelector(".back-face");
    back.classList.remove("visib");
}


