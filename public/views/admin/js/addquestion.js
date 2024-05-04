document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
});

function loadQuestions() {
    const questionList = document.getElementById('questionList');
    let questions = JSON.parse(localStorage.getItem('questions')) || [];
    
    if (questions.length === 0) {
        questionList.innerHTML = '<h2>No hay ninguna pregunta en este momento.</h2>';
    } else {
        questions.forEach(question => {
            const questionItem = createQuestionElement(question);
            questionList.appendChild(questionItem);
        });
    }
}

function createQuestionElement(question) {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question-item');
    questionItem.setAttribute('data-id', question.id);

    const titleElement = document.createElement('h3');
    titleElement.textContent = `Pregunta: ${question.title}`;

    const answerElement = document.createElement('p');
    answerElement.textContent = `Respuesta: ${question.answer}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', function() {
        deleteQuestion(question.id);
    });

    questionItem.appendChild(titleElement);
    questionItem.appendChild(answerElement);
    questionItem.appendChild(deleteBtn);

    return questionItem;
}


function saveQuestion(title, answer) {
    let questions = JSON.parse(localStorage.getItem('questions')) || [];
    const id = Date.now();
    questions.push({ id, title, answer });
    localStorage.setItem('questions', JSON.stringify(questions));
}

function deleteQuestion(id) {
    let questions = JSON.parse(localStorage.getItem('questions'));
    questions = questions.filter(question => question.id !== id);
    localStorage.setItem('questions', JSON.stringify(questions));
    loadQuestions();
}

const addQuestionBtn = document.getElementById('addQuestionBtn');
const modal = document.getElementById('questionModal');
const closeBtn = document.querySelector('.close');
const sendBtn = document.getElementById('sendBtn');

addQuestionBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

sendBtn.addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const answer = document.getElementById('answer').value;
    saveQuestion(title, answer);
    loadQuestions();
    document.getElementById('title').value = '';
    document.getElementById('answer').value = '';
    modal.style.display = 'none';
});
