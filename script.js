const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motoboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '1999',
        c: '2010',
        d: 'none of the above',
        correct: 'd'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const quizNumberEl = document.querySelector(".quiz__number");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    let currentQuizData = quizData[currentQuiz];
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    questionEl.innerText = currentQuizData.question;
    submitBtn.innerText = (currentQuiz+1 === quizData.length) ? "Submit" : "Next";
    quizNumberEl.innerText = `${currentQuiz+1}/${quizData.length}`;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
       answerEl.checked = false; 
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2 class="final-text">You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button class="quiz__button" onclick="location.reload()">Replay</button>`
        }
    }

    
});