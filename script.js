const quizData = [
    {
        question: "Who were Harry's parents?",
        a: 'Henry and Maggie Potter',
        b: 'James and Lily Potter',
        c: 'Arhur and Molly Potter',
        d: 'William and Elizabeth Potter',
        correct: 'b'
    },
    {
        question: 'Who are the muggle aunt and uncle that Harry must live with every summer?',
        a: 'Ralph and Magnolia Dudley',
        b: 'Ned and Camilla Diddly',
        c: 'Ronald and Molly Weasley',
        d: 'Vernon and Petunia Dursley',
        correct: 'd'
    },
    {
        question: 'In order of birth, who are the seven Weasley siblings?',
        a: 'Charlie, Percy, Bill, Fred, George, Ron, Ginny',
        b: 'Bill, Charlie, Percy, Fred, George, Ron, Ginny',
        c: 'George, Fred, Percy, Bill, Charlie, Ron, Ginny',
        d: 'Percy, Bill, George, Charlie, Fred, Ron, Ginny',
        correct: 'b'
    },
    {
        question: 'What are the three Unforgivable Curses?',
        a: 'Impedimenta, Incarcerous and Incendio',
        b: 'Avada Kedavra, Imperio and Diffindo',
        c: 'Expelliarmus, Expecto Patronum and Diffindo',
        d: 'Avada Kedavra, Crucio and Imperio',
        correct: 'd'
    },
    {
        question: 'Which of these Hogwarts professors teaches Transfiguration?',
        a: 'McGonagall',
        b: 'Snape',
        c: 'Quirrell',
        d: 'Sprout',
        correct: 'a'
    },
    {
        question: 'Who first shows Harry the diary of Tom Riddle?',
        a: 'Quirrell',
        b: 'Moaning Myrtle',
        c: 'Fawkes',
        d: 'Nearly Headless Nick',
        correct: 'd'
    },
    {
        question: 'Which item was NOT protecting the sorcerer\'s stone\'s hiding place?',
        a: 'Professor McGonagall\'s Living Chess Room',
        b: 'A Blast-Ended Skrewt',
        c: 'Snape\'s potions puzzle',
        d: 'A three-headed dog',
        correct: 'b'
    },
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