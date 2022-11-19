let currentQuestion = {};

let gameLevel = 1;
let winningCash = '';
let hasHintFifty = true;
let hasHintCall = true;


const easyQuestions = [
    {
        question: "Kratos is the main character of what video game series? ",
        correctId: 1,
        answers: [
            {
                id: 1,
                answer: "God of War"
            },
            {
                id: 2,
                answer: "Sims 4"
            },
            {
                id: 3,
                answer: "Cyberpunk 2077"
            },
            {
                id: 4,
                answer: "Fifa 2022"
            }
        ]
    },
    {
        question: "What is the most common surname in the United States?",
        correctId: 2,
        answers: [
            {
                id: 1,
                answer: "Petrow"
            },
            {
                id: 2,
                answer: "Smith"
            },
            {
                id: 3,
                answer: "Doe"
            },
            {
                id: 4,
                answer: "Brown"
            }
        ]
    },
    {
        question: "How many faces does a Dodecahedron have?",
        correctId: 3,
        answers: [
            {
                id: 1,
                answer: "20"
            },
            {
                id: 2,
                answer: "16"
            },
            {
                id: 3,
                answer: "12"
            },
            {
                id: 4,
                answer: "10"
            }
        ]
    },
    {
        question: "What game studio makes the Red Dead Redemption series?",
        correctId: 4,
        answers: [
            {
                id: 1,
                answer: "CD Project Red"
            },
            {
                id: 2,
                answer: "Blizzard"
            },
            {
                id: 3,
                answer: "EA"
            },
            {
                id: 4,
                answer: "Rockstar Games"
            }
        ]
    },
    {
        question: "What character has both Robert Downey Jr. and Benedict Camamberch played?",
        correctId: 2,
        answers: [
            {
                id: 1,
                answer: "Dr. Doolitle"
            },
            {
                id: 2,
                answer: "Sherlock Holmes"
            },
            {
                id: 3,
                answer: "IronMan"
            },
            {
                id: 4,
                answer: "Dr. Strange"
            }
        ]
    },
    {
        question: "What city is known as \"The Eternal City\"?",
        correctId: 1,
        answers: [
            {
                id: 1,
                answer: "Rome"
            },
            {
                id: 2,
                answer: "Paris"
            },
            {
                id: 3,
                answer: "Vinnytsia"
            },
            {
                id: 4,
                answer: "Chernivtsy"
            }
        ]
    },
];
const midQuestions = [
    {
        question: "What is the 4th letter of the Greek alphabet?",
        correctId: 1,
        answers: [
            {
                id: 1,
                answer: "Delta"
            },
            {
                id: 2,
                answer: "Omega"
            },
            {
                id: 3,
                answer: "Alfa"
            },
            {
                id: 4,
                answer: "Beta"
            }
        ]
    },
    {
        question: "How many minutes are in a full week?",
        correctId: 3,
        answers: [
            {
                id: 1,
                answer: "10 060"
            },
            {
                id: 2,
                answer: "10 130"
            },
            {
                id: 3,
                answer: "10 080"
            },
            {
                id: 4,
                answer: "9 040"
            }
        ]
    },
    {
        question: "How many elements are in the periodic table?",
        correctId: 2,
        answers: [
            {
                id: 1,
                answer: "121"
            },
            {
                id: 2,
                answer: "118"
            },
            {
                id: 3,
                answer: "109"
            },
            {
                id: 4,
                answer: "113"
            }
        ]
    },
    {
        question: "Aureolin is a shade of what color?",
        correctId: 1,
        answers: [
            {
                id: 1,
                answer: "Yellow"
            },
            {
                id: 2,
                answer: "Blue"
            },
            {
                id: 3,
                answer: "Green"
            },
            {
                id: 4,
                answer: "Purple"
            }
        ]
    },
    {
        question: "Who discovered that the earth revolves around the sun?",
        correctId: 3,
        answers: [
            {
                id: 1,
                answer: "Galileo Galilei"
            },
            {
                id: 2,
                answer: "Johannes Kepler"
            },
            {
                id: 3,
                answer: "Nicolaus Copernicus"
            },
            {
                id: 4,
                answer: "Isaac Newton"
            }
        ]
    }, {
        question: "Who famously crossed the Alps with elephants on the way to war with the Romans?",
        correctId: 1,
        answers: [
            {
                id: 1,
                answer: "Hannibal"
            },
            {
                id: 2,
                answer: "Adolf Hitler"
            },
            {
                id: 3,
                answer: "Napoleon Bonaparte"
            },
            {
                id: 4,
                answer: "Pyrros from Epirres"
            }
        ]
    }
];
const hardQuestions = [
    {
        question: "Who has won the most total Academy Awards?",
        correctId: 1,
        answers: [
            {
                id: 1,
                answer: "Walt Disney"
            },
            {
                id: 2,
                answer: "Petro Poroshenko"
            },
            {
                id: 3,
                answer: "Stephen Hawking"
            },
            {
                id: 4,
                answer: "Albert Einstein"
            }
        ]
    },
    {
        question: "What art form is described as \"decorative handwriting or handwritten lettering\"?",
        correctId: 1,
        answers: [
            {
                id: 1,
                answer: "Calligraphy"
            },
            {
                id: 2,
                answer: "Orthography"
            },
            {
                id: 3,
                answer: "Syntax"
            },
            {
                id: 4,
                answer: "Typography"
            }
        ]
    },
    {
        question: "What company was originally called \"Cadabra\"?",
        correctId: 4,
        answers: [
            {
                id: 1,
                answer: "Google"
            },
            {
                id: 2,
                answer: "Facebook"
            },
            {
                id: 3,
                answer: "Yahoo!"
            },
            {
                id: 4,
                answer: "Amazon"
            }
        ]
    },
    {
        question: "The Parthenon Marbles are controversially located in what museum?",
        correctId: 3,
        answers: [
            {
                id: 1,
                answer: "Louvre"
            },
            {
                id: 2,
                answer: "Hermitage"
            },
            {
                id: 3,
                answer: "The British Museum"
            },
            {
                id: 4,
                answer: "Kopernik Centre"
            }
        ]
    },
    {
        question: "What is a group of pandas known as?",
        correctId: 2,
        answers: [
            {
                id: 1,
                answer: "A disappointment"
            },
            {
                id: 2,
                answer: "An embarrassment"
            },
            {
                id: 3,
                answer: "A harassment"
            },
            {
                id: 4,
                answer: "A excitement"
            }
        ]
    }, {
        question: "In what country would you find Mount Kilimanjaro?",
        correctId: 3,
        answers: [
            {
                id: 1,
                answer: "Nicaragua"
            },
            {
                id: 2,
                answer: "Zimbabwe"
            },
            {
                id: 3,
                answer: "Tanzania"
            },
            {
                id: 4,
                answer: "Chad"
            }
        ]
    }
];

let restEasyQ = [...easyQuestions];
let restMidQ = [...midQuestions];
let restHardQ = [...hardQuestions];

const getRandomQuestionIdx =  (questionList) => {
    const length = questionList.length;
    let randomIndex = Math.floor(Math.random() * (length));
    return randomIndex;

}
// 1. choose Q,
const chooseQuestion = () => {
    renderCurrentLevel();
    countCash();
    if (gameLevel === 16){
        winAlert()
    }else{
        if (gameLevel <= 5){
            const index = getRandomQuestionIdx(restEasyQ);
            currentQuestion = restEasyQ[index];
            restEasyQ = restEasyQ.filter((q, idx) =>{
                return idx !== index;
            });
        }else if (gameLevel <= 10){
            const index = getRandomQuestionIdx(restMidQ);
            currentQuestion = restMidQ[index];
            restMidQ = restMidQ.filter((q, idx) =>{
                return idx !== index;
            });
        }else if (gameLevel <= 15){
            const index = getRandomQuestionIdx(restHardQ);
            currentQuestion = restHardQ[index];
            restHardQ = restHardQ.filter((q, idx) =>{
                return idx !== index;
            });
        }
        renderQuestion();
    }
}

const countCash = () => {
    if (gameLevel === 6){
        winningCash = '$ 1 000'
    }else if (gameLevel === 11){
        winningCash = '$ 32 000'
    }else if (gameLevel === 16){
        winningCash = '$ 1 000 000'
    }
}
//render current level
const renderCurrentLevel = () => {
    const allLevels = document.querySelectorAll('.prize-container div');
    allLevels.forEach((value, key)=>{
        if (key + 1 === gameLevel){
            value.classList.add('isActive');
        }else {
            value.classList.remove('isActive');
        }
    })
}

// 2. render Q,
const renderQuestion = (isHintFifty = false) => {
    const questionElement = document.getElementById('question');
    const answerAElement = document.getElementById('answerA');
    const answerBElement = document.getElementById('answerB');
    const answerCElement = document.getElementById('answerC');
    const answerDElement = document.getElementById('answerD');
    questionElement.innerText = currentQuestion.question;
    answerAElement.innerText = `A. ${currentQuestion.answers[0].answer}`;
    answerAElement.dataset.answerId = currentQuestion.answers[0].id;
    answerBElement.innerText = `B. ${currentQuestion.answers[1].answer}`;
    answerBElement.dataset.answerId = currentQuestion.answers[1].id;
    answerCElement.innerText = `C. ${currentQuestion.answers[2].answer}`;
    answerCElement.dataset.answerId = currentQuestion.answers[2].id;
    answerDElement.innerText = `D. ${currentQuestion.answers[3].answer}`;
    answerDElement.dataset.answerId = currentQuestion.answers[3].id;
    if (isHintFifty){
        const incorrectIds = hintFifty(currentQuestion);
        incorrectIds.forEach((index) => {
            if (index === 1){
                answerAElement.innerText = `A.`;
                answerAElement.dataset.answerId = '';
            }
            if (index === 2){
                answerBElement.innerText = `B.`;
                answerBElement.dataset.answerId = '';
            }
            if (index === 3){
                answerCElement.innerText = `C.`;
                answerCElement.dataset.answerId = '';
            }
            if (index === 4){
                answerDElement.innerText = `D.`;
                answerDElement.dataset.answerId = '';
            }
        })
    }

}
const clickHintFifty = () => {
    if (hasHintFifty){
        renderQuestion(true);
        hasHintFifty = false;
        renderHints()
    }
}
const clickHintCall = () => {
    if (hasHintCall){
        const answer = friendsCall();
        alert(`Hello, buddy, want to say hello to all my relatives. I knew you are dumb. So, I think, the correct answer is ${answer}. Don't take my words too seriously :)`)
        hasHintCall = false;
        renderHints()
    }
}
const friendsCall = () => {
    let randomAnswer = Math.floor(Math.random() * (currentQuestion.answers.length));
    if (randomAnswer === 0){
        return 'A'
    }
    if (randomAnswer === 1){
        return 'B'
    }
    if (randomAnswer === 2){
        return 'C'
    }
    if (randomAnswer === 3){
        return 'D'
    }
}
const renderHints = () => {
    const fiftyBtn = document.getElementById('hint50');
    if (hasHintFifty){
        fiftyBtn.classList.remove('disabled');
    }else {
        fiftyBtn.classList.add('disabled');
    }
    const callBtn = document.getElementById('hint-call');
    if (hasHintCall){
        callBtn.classList.remove('disabled');
    }else {
        callBtn.classList.add('disabled');
    }

}
const hintFifty = (currentQuestion) => {
    const result = [];
    currentQuestion.answers.forEach((answer) => {
        if (answer.id !== currentQuestion.correctId && result.length <= 1){
            result.push(answer.id)
        }
    })
    return result;
}

// 3. click
const addEventListener = () => {
    const answerField = document.getElementById('answerField');
    answerField.addEventListener("click", (event) => {
        if (event.target && event.target.dataset.answerId){
            const answerId = event.target.dataset.answerId;
            if (currentQuestion.correctId === +answerId) {
                gameLevel++;
                chooseQuestion();
            }else {
                loseAlert()
            }
        }
    })
}
const winAlert = () => {
    alert(`Congrats! You won! your prize is ${winningCash}`);
    resetGame();
}

const loseAlert = () => {
    if(winningCash){
        alert(`Ok, you are not very clever, but you won ${winningCash}`);
    }else{
        alert('You are freaking idiot :(');
    }
    resetGame();
}
const resetGame = () => {
    gameLevel = 1;
    winningCash= '';
    restEasyQ = [...easyQuestions];
    restMidQ = [...midQuestions];
    restHardQ = [...hardQuestions];
    hasHintFifty = true;
    hasHintCall = true;
    renderHints();
    chooseQuestion();
}
addEventListener();
// 4. if true
//  go to 1.
//  else lose
chooseQuestion();

