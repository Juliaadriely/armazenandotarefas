const inputtarefa = document.getElementById("input-tarefa");
const botaoadicicionar = document.getElementById("botao-adicionar");
const listatarefas = document.getElementById("lista-tarefas");

//criando lista vazia
let tarefas = [];

// função para salvar tarefas
function salvartarefas () {
    /*
    localstorage -> armazenamento local do navegador
    setItem -> salva no armazenamento o conteudo recebido
    JSON.string(tarefas) -> pega a lista de tarefas, converte para texto(string) e armazena esse texto
    */ 

    localStorage.setItem("tarefa", JSON.stringify(tarefas));
}

//função para mostrar tarefas na tela 
function mostrartarefas() {
    listatarefas.innerHTML = "";

    for(let i = 0; i< tarefas.length; i++){
        const li = document.createElement("li");
        li.innerText = tarefas [i]

    }
}

// let listaTeste = ["Fernanda", "Guilherme", "Lucas"];

// //let i = 0 -> o valor inicial da repetição vai iniciar em zero 
// // i < listaTeste.length -> validar se o i e menor que tamanho da lista

// for(let i = 0; i< listaTeste )
