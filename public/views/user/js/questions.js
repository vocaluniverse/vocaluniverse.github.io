document.addEventListener('DOMContentLoaded', function() {
    // Verifica si la página está en la ruta user/questions.html
    if (window.location.pathname === '/views/user/questions.html') {
        loadQuestions();
    }
});

function loadQuestions() {
    let questions = JSON.parse(localStorage.getItem('questions'));
    const questionList = document.getElementById('questionList');
    questionList.innerHTML = ''; // Limpiar la lista antes de cargar las preguntas

    if (!questions || questions.length === 0) {
        // Si no hay preguntas, mostrar un mensaje
        questionList.innerHTML = '<div><h2>No hay preguntas disponibles.</h2></div>';
    } else {
        // Iterar sobre las preguntas y agregarlas a la lista
        questions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question-item');

            const titleElement = document.createElement('h5');
            titleElement.textContent = `Pregunta: ${question.title}`;

            const answerElement = document.createElement('p');
            answerElement.textContent = `Respuesta: ${question.answer}`;

            questionDiv.appendChild(titleElement);
            questionDiv.appendChild(answerElement);

            questionList.appendChild(questionDiv);
        });
    }
}
