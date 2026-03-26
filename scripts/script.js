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

        const botaoremover = document.createElement("button");
        botaoremover.innerText = "🗑️"
        botaoremover.className = "botaoremover";


        botaoremover.addEventListener("click", () => {
            removerTarefas(i);
        })

        li.appendChild(botaoremover);
        listatarefas.appendChild(li);
    }
}

function removerTarefas(posicaotarefa) {
    // splice ->(posiçãoInicial, qtde_itens)
    tarefas.splice(posicaotarefa, 1)

    //depois de remover, chamo a função de salvar no localStorage
    salvartarefas();

    //mostra as tarefas atualizadas, sem as que foram removidas.
    mostrartarefas();
}


//função para adicionar tarefas
function adicionartarefas() {
    const valortarefa = inputtarefa.value;

    if(valortarefa === ""){
        alert("digite uma tarefa!");
        return; //não deixa a tarefa vazia apareça na tela
    }

    tarefas.push(valortarefa); // adiciona a tarefa digitada dentro do array 
    inputtarefa.value = "";

    salvartarefas();
    mostrartarefas();
}

// função para carregar tarefas salvas no localStorage
function carregartrefas() {
    // pega as tarefas e armazena na variavel   'tarefassalvas'
    const tarefassalvas = localStorage.getItem("tarefas");
    // se existir alguma coisa dentro de tarefas salvas
    // então converte a tarefa e mostra na tela.
    if(tarefassalvas){
        //transforma o texto em array novamente
        tarefas = JSON.parse(tarefassalvas);
        mostrartarefas();
    }
}

botaoadicicionar.addEventListener("click", adicionartarefas);
carregartrefas();















// let listaTeste = ["Fernanda", "Guilherme", "Lucas"];

// //let i = 0 -> o valor inicial da repetição vai iniciar em zero 
// // i < listaTeste.length -> validar se o i e menor que tamanho da lista

// for(let i = 0; i< listaTeste )
//Teste
