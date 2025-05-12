const perguntas = [
    {
        pergunta: "Sua empresa utiliza fontes de energia renováveis?",
        respostas: [
            { texto: "Sim, 100% renovável", pontos: 10, sugestao: null },
            { texto: "Parcialmente, combinamos renováveis com não renováveis", pontos: 5, sugestao: "Investir mais em fontes renováveis pode reduzir impactos ambientais." },
            { texto: "Não utilizamos fontes renováveis", pontos: 0, sugestao: "Para uma empresa mais sustentável, poderia ser instalada energia solar ou eólica." }
        ]
    },
    {
        pergunta: "Qual o nível de reciclagem de resíduos na empresa?",
        respostas: [
            { texto: "Reciclamos todos os resíduos possíveis", pontos: 10, sugestao: null },
            { texto: "Reciclamos parcialmente", pontos: 5, sugestao: "Ampliar as práticas de reciclagem pode melhorar a sustentabilidade." },
            { texto: "Não reciclamos", pontos: 0, sugestao: "Implementar um programa de reciclagem ajudaria a reduzir o impacto ambiental." }
        ]
    },
    {
        pergunta: "A empresa possui políticas para redução do consumo de água?",
        respostas: [
            { texto: "Sim, utilizamos práticas eficientes", pontos: 10, sugestao: null },
            { texto: "Parcialmente, algumas áreas aplicam medidas", pontos: 5, sugestao: "Expandir o uso de práticas eficientes pode economizar mais água." },
            { texto: "Não temos políticas para isso", pontos: 0, sugestao: "Implementar práticas de economia de água pode reduzir custos e impactos ambientais." }
        ]
    },
    {
        pergunta: "Os produtos da empresa possuem certificações ambientais?",
        respostas: [
            { texto: "Sim, todos possuem certificação", pontos: 10, sugestao: null },
            { texto: "Alguns possuem certificação", pontos: 5, sugestao: "Buscar certificações ambientais pode melhorar a credibilidade sustentável." },
            { texto: "Nenhum produto possui certificação", pontos: 0, sugestao: "Investir em certificações pode destacar o compromisso da empresa com a sustentabilidade." }
        ]
    },
    {
        pergunta: "A empresa incentiva o uso de transportes sustentáveis?",
        respostas: [
            { texto: "Sim, oferecemos incentivos para transportes sustentáveis", pontos: 10, sugestao: null },
            { texto: "Parcialmente, há incentivos limitados", pontos: 5, sugestao: "Expandir os incentivos pode reduzir a pegada de carbono da empresa." },
            { texto: "Não incentivamos", pontos: 0, sugestao: "Criar programas de incentivo pode reduzir emissões de carbono." }
        ]
    },
    {
        pergunta: "A empresa utiliza materiais reciclados na produção?",
        respostas: [
            { texto: "Sim, em grande parte da produção", pontos: 10, sugestao: null },
            { texto: "Parcialmente, usamos alguns materiais reciclados", pontos: 5, sugestao: "Aumentar o uso de materiais reciclados pode diminuir o impacto ambiental." },
            { texto: "Não utilizamos materiais reciclados", pontos: 0, sugestao: "Buscar fornecedores de materiais reciclados pode melhorar a sustentabilidade." }
        ]
    },
    {
        pergunta: "A empresa adota práticas de logística sustentável?",
        respostas: [
            { texto: "Sim, utilizamos práticas de transporte e armazenamento sustentáveis", pontos: 10, sugestao: null },
            { texto: "Parcialmente, algumas iniciativas estão sendo implementadas", pontos: 5, sugestao: "Expandir as práticas de logística sustentável pode reduzir emissões." },
            { texto: "Não adotamos práticas de logística sustentável", pontos: 0, sugestao: "Investir em logística sustentável pode otimizar custos e reduzir impacto ambiental." }
        ]
    },
    {
        pergunta: "A empresa realiza ações para reduzir a emissão de carbono?",
        respostas: [
            { texto: "Sim, temos programas para reduzir emissões", pontos: 10, sugestao: null },
            { texto: "Parcialmente, temos algumas ações", pontos: 5, sugestao: "Ampliar os programas de redução de carbono pode melhorar a sustentabilidade." },
            { texto: "Não realizamos ações para reduzir emissões", pontos: 0, sugestao: "Implementar estratégias para redução de carbono pode ser benéfico para o meio ambiente." }
        ]
    },
    {
        pergunta: "A empresa possui um plano de gestão de resíduos perigosos?",
        respostas: [
            { texto: "Sim, seguimos todas as normas e práticas", pontos: 10, sugestao: null },
            { texto: "Parcialmente, temos algumas medidas", pontos: 5, sugestao: "Melhorar a gestão de resíduos perigosos pode reduzir riscos ambientais." },
            { texto: "Não temos um plano de gestão", pontos: 0, sugestao: "Criar um plano de gestão de resíduos pode minimizar impactos ambientais." }
        ]
    },
    {
        pergunta: "A empresa promove treinamentos sobre sustentabilidade para funcionários?",
        respostas: [
            { texto: "Sim, realizamos treinamentos regulares", pontos: 10, sugestao: null },
            { texto: "Parcialmente, realizamos treinamentos esporádicos", pontos: 5, sugestao: "Aumentar a frequência dos treinamentos pode melhorar a cultura sustentável." },
            { texto: "Não realizamos treinamentos", pontos: 0, sugestao: "Investir em treinamentos pode engajar funcionários na sustentabilidade." }
        ]
    }
];

let pontuacaoTotal = 0;
let perguntaAtual = 0;
let sugestoes = [];

function mostrarPergunta() {
    const quizContainer = document.getElementById("quiz");
    const pergunta = perguntas[perguntaAtual];
    let html = `<h2>${pergunta.pergunta}</h2>`;

    pergunta.respostas.forEach((resposta, index) => {
        html += `<button onclick='selecionarResposta(${index})'>${resposta.texto}</button>`;
    });

    quizContainer.innerHTML = html;
}

function selecionarResposta(index) {
    const resposta = perguntas[perguntaAtual].respostas[index];
    pontuacaoTotal += resposta.pontos;
    
    if (resposta.sugestao) {
        sugestoes.push(resposta.sugestao);
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const quizContainer = document.getElementById("quiz");
    let resultadoHTML = `<h2>Sua pontuação final: ${pontuacaoTotal}/100</h2>`;

    if (sugestoes.length > 0) {
        resultadoHTML += "<h3>Sugestões para melhorar a sustentabilidade:</h3><ul>";
        sugestoes.forEach(sugestao => {
            resultadoHTML += `<li>${sugestao}</li>`;
        });
        resultadoHTML += "</ul>";
    } else {
        resultadoHTML += "<p>Parabéns! Sua empresa já é altamente sustentável.</p>";

    }
    resultadoHTML += `<button onclick="reiniciarQuiz()">Reiniciar quiz</button>`;
    resultadoHTML += `<button onclick="voltarPaginaInicial()">Voltar à página inicial</button>`;
    
    quizContainer.innerHTML = resultadoHTML;
}

function reiniciarQuiz() {
    pontuacaoTotal = 0;
    perguntaAtual = 0;
    sugestoes = [];
    mostrarPergunta();
}

function voltarPaginaInicial() {
    window.location.href = 'index.html';  // Redireciona para o index.html
}


document.addEventListener("DOMContentLoaded", mostrarPergunta);
