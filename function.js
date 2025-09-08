
// Variáveis de estado
let currentQuestionIndex = 0;
let scoreTeamA = 0;
let scoreTeamB = 0;
let currentTeam = null;
let answered = false;
let questionsUsedIndices = [];
let currentQuestions = [];

// Elementos DOM
const nextBtn = document.getElementById('next-btn');
const revealBtn = document.getElementById('reveal-btn');
const resetBtn = document.getElementById('reset-btn');
const restartBtn = document.getElementById('restart-btn');
const teamABtn = document.getElementById('team-a-btn');
const teamBBtn = document.getElementById('team-b-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreTeamAElement = document.getElementById('score-team-a');
const scoreTeamBElement = document.getElementById('score-team-b');
const quizProgress = document.getElementById('quiz-progress');
const progressText = document.getElementById('progress-text');
const resultsContainer = document.getElementById('results-container');
const categoryElement = document.getElementById('category');
const difficultyElement = document.getElementById('difficulty');
const winnerAnnouncement = document.getElementById('winner-announcement');
const finalScore = document.getElementById('final-score');

// Configurações
const QUESTIONS_PER_GAME = 10; // Número de perguntas por jogo
const REVEAL_DELAY = 1000; // 1 segundo entre as opções

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
resetBtn.addEventListener('click', resetQuiz);
restartBtn.addEventListener('click', restartQuiz);
teamABtn.addEventListener('click', () => selectTeam('A'));
teamBBtn.addEventListener('click', () => selectTeam('B'));

// Iniciar o quiz
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    showQuestion();
});

function initializeGame() {
    // Reiniciar variáveis
    currentQuestionIndex = 0;
    scoreTeamA = 0;
    scoreTeamB = 0;
    questionsUsedIndices = [];
    currentQuestions = [];
    
    // Selecionar perguntas aleatórias
    selectRandomQuestions();
    
    // Atualizar placar
    scoreTeamAElement.textContent = '0';
    scoreTeamBElement.textContent = '0';
    
    // Esconder resultados
    resultsContainer.classList.add('hidden');
    
    // Habilitar botões
    nextBtn.disabled = false;
}

function selectRandomQuestions() {
    // Limpar array de perguntas usadas se necessário
    if (questionsUsedIndices.length >= questionBank.length * 0.7) {
        questionsUsedIndices = [];
    }
    
    // Selecionar perguntas aleatórias não utilizadas
    currentQuestions = [];
    const availableIndices = [];
    
    // Criar lista de índices disponíveis
    for (let i = 0; i < questionBank.length; i++) {
        if (!questionsUsedIndices.includes(i)) {
            availableIndices.push(i);
        }
    }
    
    // Embaralhar os índices disponíveis
    shuffleArray(availableIndices);
    
    // Selecionar o número necessário de perguntas
    const count = Math.min(QUESTIONS_PER_GAME, availableIndices.length);
    for (let i = 0; i < count; i++) {
        const index = availableIndices[i];
        currentQuestions.push(questionBank[index]);
        questionsUsedIndices.push(index);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    
    // Atualizar progresso
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    quizProgress.value = progress;
    progressText.textContent = `Pergunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    
    
    
    // Exibir pergunta
    questionText.textContent = question.question;
    
    // Limpar opções
    optionsContainer.innerHTML = '';
    answered = false;
    
    // Resetar seleção de time
    currentTeam = null;
    teamABtn.classList.remove('active');
    teamBBtn.classList.remove('active');
    
    // Revelar opções automaticamente com um intervalo
    revealOptionsAutomatically(question);
}

function revealOptionsAutomatically(question) {
    // Revelar todas as opções com um intervalo
    question.options.forEach((option, index) => {
        setTimeout(() => {
            // Criar botão para a opção
            const button = document.createElement('button');
            button.className = 'button is-large is-fullwidth option-btn option-reveal';
            button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span> ${option}`;
            button.dataset.index = index;
            
            // Adicionar evento de clique
            button.addEventListener('click', () => checkAnswer(index));
            
            // Adicionar ao container
            optionsContainer.appendChild(button);
        }, REVEAL_DELAY * index);
    });
}

function selectTeam(team) {
    if (answered) return;
    
    currentTeam = team;
    
    // Destacar o time selecionado
    if (team === 'A') {
        teamABtn.classList.add('active');
        teamBBtn.classList.remove('active');
    } else {
        teamBBtn.classList.add('active');
        teamABtn.classList.remove('active');
    }
    
    // Mostrar notificação
    showNotification(`Time ${team === 'A' ? 'Azul' : 'Vermelho'} selecionado para responder!`);
}

function checkAnswer(selectedIndex) {
    if (answered || !currentTeam) return;
    
    answered = true;
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    // Desabilitar todos os botões
    options.forEach(btn => {
        btn.disabled = true;
    });
    
    // Marcar resposta correta e incorreta
    options.forEach((btn, index) => {
        if (index === question.correct) {
            btn.classList.add('correct');
        }
        if (index === selectedIndex && index !== question.correct) {
            btn.classList.add('incorrect');
        }
    });
    
    // Atualizar pontuação
    if (selectedIndex === question.correct) {
        if (currentTeam === 'A') {
            scoreTeamA++;
            scoreTeamAElement.textContent = scoreTeamA;
            scoreTeamAElement.parentElement.parentElement.classList.add('winner-animation');
            setTimeout(() => {
                scoreTeamAElement.parentElement.parentElement.classList.remove('winner-animation');
            }, 1500);
            showNotification("Resposta correta! Time Azul pontua!", "success");
        } else {
            scoreTeamB++;
            scoreTeamBElement.textContent = scoreTeamB;
            scoreTeamBElement.parentElement.parentElement.classList.add('winner-animation');
            setTimeout(() => {
                scoreTeamBElement.parentElement.parentElement.classList.remove('winner-animation');
            }, 1500);
            showNotification("Resposta correta! Time Vermelho pontua!", "success");
        }
    } else {
        showNotification(`Resposta incorreta! A correta era: ${question.options[question.correct]}`, "danger");
    }
    
    // Habilitar o botão de próxima pergunta
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    nextBtn.disabled = true;
    showQuestion();
}

function showNotification(message, type = "info") {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.floating-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification is-light floating-notification`;
    
    if (type === "success") {
        notification.classList.add('is-success');
    } else if (type === "danger") {
        notification.classList.add('is-danger');
    } else {
        notification.classList.add('is-info');
    }
    
    notification.innerHTML = `<button class="delete"></button>${message}`;
    
    // Adicionar ao documento
    document.body.appendChild(notification);
    
    // Adicionar evento para fechar
    notification.querySelector('.delete').addEventListener('click', () => {
        notification.remove();
    });
    
    // Remover automaticamente após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

function resetQuiz() {
    initializeGame();
    showQuestion();
    
    // Mostrar notificação
    showNotification("Perguntas reiniciadas! Boa sorte para os times!");
}

function endQuiz() {
    // Determinar o vencedor
    let winnerText = "";
    if (scoreTeamA > scoreTeamB) {
        winnerText = "Time Azul Venceu!";
    } else if (scoreTeamB > scoreTeamA) {
        winnerText = "Time Vermelho Venceu!";
    } else {
        winnerText = "Empate!";
    }
    
    winnerAnnouncement.textContent = winnerText;
    finalScore.textContent = `Time Azul ${scoreTeamA} x ${scoreTeamB} Time Vermelho`;
    
    resultsContainer.classList.remove('hidden');
    nextBtn.disabled = true;
}

function restartQuiz() {
    resetQuiz();
    resultsContainer.classList.add('hidden');
}