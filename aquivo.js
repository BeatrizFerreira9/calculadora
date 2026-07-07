let botao = document.querySelectorAll('.botao')
let tela = document.getElementById('tela')
let operador = document.querySelectorAll('[id*=ope]')


let numNovo = true 
let numAnterior
let operadores

const operadorPendente = () => operadores != undefined

const calcular = () => {
    if(operadorPendente()){
        const numAtual = Number(tela.textContent)
        numNovo = true

        if(operadores == "+"){
            atualizar(numAnterior + numAtual)
        }
        else if(operadores == "-"){
            atualizar(numAnterior - numAtual)
        }
        else if (operadores == "X"){
            atualizar(numAnterior * numAtual)
        }

        else if (operadores == "%"){
            atualizar(numAnterior / numAtual)
        }
        
    }
}

function atualizar(elemento){
    if(numNovo){
   tela.textContent = elemento
   numNovo = false 

    }else{
         tela.textContent += elemento

}
}

    botao.forEach(clicar => {
        clicar.addEventListener("click",  (evento) => {
            
            const valor = evento.target.textContent   
            
            let num = Number(valor)
            
         if(!isNaN(num)){

            atualizar(num)

         }
            
         

        })
    }

    )


const selecionaroperador = (event) => {
    if(!isNaN(Number(tela.textContent))){
    calcular()
    numAnterior = Number(tela.textContent)
    operadores = event.target.textContent
    numNovo = true
    } 
}
operador.forEach(selecionar => selecionar.addEventListener("click", selecionaroperador))

atualizar()


const ativarIgual = () => {
      calcular()
    let resultado = Number(tela.textContent)
    numAnterior = resultado
    operadores = undefined
    numNovo = true
    
}

const limpartela = () => {
    tela.textContent = ''
}

let igual = document.getElementById('opeigual').addEventListener('click', ativarIgual)

const limparcalculo = () => {
    limpartela()
    operadores = undefined
    numNovo = true
    numAnterior = undefined
}

const limaparultimo = () => {
   tela.textContent = tela.textContent.slice(0., -1)
}

const decimal = () => {
    tela.textContent.indexOf('.') != -1
    return
}

const valor = () => { 
    return tela.textContent.length > 0
    
}

const inserirponto = () => {
    if(!decimal()){
        if(valor()){
            atualizar('.')

        }
    }else{
        atualizar('0')
    }
}

document.getElementById('limpar').addEventListener('click', limpartela)

document.getElementById('c').addEventListener('click', limparcalculo)

document.getElementById('del').addEventListener('click', limaparultimo)

document.getElementById('ponto').addEventListener('click', inserirponto)