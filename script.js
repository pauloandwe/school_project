const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Qual seu prato favorito?",
        alternativas: [
            { texto: "Pizza", afirmação: "Você ama pizza!" },
            { texto: "Sushi", afirmação: "Você adora sushi!" }
        ]
    },
    {
        enunciado: "Você prefere doce ou salgado?",
        alternativas: [
            { texto: "Doce", afirmação: "Você é fã de doces!" },
            { texto: "Salgado", afirmação: "Você adora salgados!" }
        ]
    },
    {
        enunciado: "Você gosta de comida caseira?",
        alternativas: [
            { texto: "Sim", afirmação: "Comida caseira é sempre a melhor!" },
            { texto: "Não", afirmação: "Prefiro comida de restaurante!" }
        ]
    },
];

let posicao = 0;
let perguntaAtual;
let respostas = [];

function mostraPergunta() {
    if (posicao >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.innerHTML = ""; 
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}

function respostasSelecionadas(opcaoSelecionada) {
    respostas.push(opcaoSelecionada.afirmação);
    posicao++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.innerHTML = ""; 
    respostas.forEach(resposta => {
        const li = document.createElement("li");
        li.textContent = resposta;
        textoResultado.appendChild(li);
    });
    caixaAlternativa.innerHTML = "";
}

mostraPergunta();
appendChild