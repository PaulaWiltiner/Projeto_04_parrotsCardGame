
function comparador() { 
	return Math.random() - 0.5; 
}


function inserirCartas(qtd){
    let contador =qtd
    let jogo = document.querySelector(".jogo")
    while (contador >0){
        contador= contador-1;
        jogo.innerHTML = jogo.innerHTML + "<div class='card'><img src='Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png' ></div>"
    }
}


function start (){
    let quantidade_cartas = prompt("Qual o número cartas que deseja ?")
    if (isNaN(quantidade_cartas) === false){
        Number(quantidade_cartas)
        if( quantidade_cartas <= 14 && quantidade_cartas >= 4){
            if (quantidade_cartas%2 === 0 ){
                alert(" Vamos começar o jogo !")
                inserirCartas(quantidade_cartas)
            } else {
                alert("Por favor, insira um número par de cartas.")
            }
        }else{
            alert("Por favor, insira um número de cartas entre 4 e 14.")
            start()
        }
    }else{
        alert("Por favor, insira um número par de cartas entre 4 e 14.")
        start()
    }
}
//start()

function virar(elemento) {
    elemento.classList.remove("anima");
    elemento.setAttribute("disabled","disabled");
    let front = elemento.querySelector(".front-face");
    front.classList.remove("visib");
    let back = elemento.querySelector(".back-face");
    back.classList.remove("visib");
}


