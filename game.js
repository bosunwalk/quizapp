const question = document.querySelector('#question'); 
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    { //   1
        question: " #1. How many countries were participated as founding member of United Nation?",
        choice1: "45",
        choice2: "50",
        choice3: "51",
        choice4: "75",
        answer: 3,
    }, { // 2
        question: "#2. What does He stand for on the periodic table?",
        choice1: "Helium",
        choice2: "Helienium",
        choice3: "Heroin",
        choice4: "Hemisphere",
        answer: 1,
    },{ // 3
        question: "#3. What is the capital of finland?",
        choice1: "Honolulu",
        choice2: "Helsinki",
        choice3: "Venice",
        choice4: "Luton",
        answer: 2, 
    },{ // 4
        question: "#4. Which five colours make up the Olympic rings?",
        choice1: "Black, green, blue, yellow and red",
        choice2: "Black, cream, indido, yellow, crisom",
        choice3: "Black, lime, violet, orange, pink",
        choice4: "Black, green, violet, yet, maroon",
        answer: 1,
    },{
        // 5
        question: "#5. In Harry Potter, what is the name of The Weasleys house?",
        choice1: "The refuge",
        choice2: "The Homely",
        choice3: "The Haven",
        choice4: "The borrow",
        answer: 4,
    },{ // 6 
        question:"#6. To a single decimal point, how many kilometers are in a mile?",
        choice1:"1.6km",
        choice2:"1.4km",
        choice3:"1.9km",
        choice4:"1.5km",
        answer: 1,
    },{// 7
        question:"#7. Which planet is closest to the sun?",
        choice1:"Mercury",
        choice2:"Venus",
        choice3:"Neptune",
        choice4:"Pluto",
        answer: 1,
    },{ // 8
        question:"#8. What was the most streamed show on Netflix in 2020?",
        choice1:"The Umbrella Academy",
        choice2:"The Young Royals",
        choice3:"The Sandman,",
        choice4:"Wu Assasins",
        answer: 1,
    },{ // 9
        question:"#9. Which one is the smallest ocean in the World? ",
        choice1:"Indian",
        choice2:"Pacific",
        choice3:"Atlantic",
        choice4:"Arctic",
        answer: 4,
    }, { //10
        question:"#10. Which country gifted the statute of liberty to USA in 1886?",
        choice1:"Canada",
        choice2:"Brazil",
        choice3:"France",
        choice4:"England",
        answer: 3,
    },{ // 11
        question:"#11. Dead sea is located between which two countries?",
        choice1:"Jordan and Sudan",
        choice2:"Jordan and Israel",
        choice3:"Turkey and UAE",
        choice4:"UAE and Egypt",
        answer: 2,
    },{ // 12
        question:"#12. Which ocean 'Bermuda Triangle' region is located?",
        choice1:"Atlantic",
        choice2:"Indian",
        choice3:"Pacific",
        choice4:"Arctic",
        answer: 1,
    },{ //13
        question:"#13. Which country is known as the 'playground of Europe?",
        choice1:"Austria",
        choice2:"Holland",
        choice3:"Switzerland",
        choice4:"Italy",
        answer: 3,
    },{ // 14
        question:"#14. Which country is also known as 'Land of the rising Sun'?",
        choice1:"Japan",
        choice2:"New Zealand",
        choice3:"Fiji",
        choice4:"China",
        answer: 1,
    },{ //15
        question:"#15. Which country is known as the 'Land of Thunderbolts'? ",
        choice1:"China",
        choice2:"Bhutan",
        choice3:"Mongolia",
        choice4:"Thailand",
        answer: 2,
    },{ // 16
        question:"#16. Which continent has the highest number of countries?",
        choice1:"Asia",
        choice2:"Europe",
        choice3:"North America",
        choice4:"Africa",
        answer: 4,
    },{ // 17
        question:"#17. Mount Kilimanjaro is located in which country? ",
        choice1:"Tanzania",
        choice2:"Ghana",
        choice3:"Namibia",
        choice4:"South Africa",
        answer: 1,
    },{// 18
        question:"#18. Blue Nile and White Nile meet at?",
        choice1:"Khartoum",
        choice2:"Cairo",
        choice3:"Marrakesh",
        choice4:"Lagos",
        answer: 1,
    },{//19
        question:"#19. The river that crosses Equator two times is?",
        choice1:"Congo",
        choice2:"Nile",
        choice3:"Limpopo",
        choice4:"Niger",
        answer: 1,
    },{//20
        question:"#20. Lake Victoria does not border?",
        choice1:"Tanzania",
        choice2:"Uganda",
        choice3:"Kenya",
        choice4:"Zimbabwe",
        answer: 4,
    },{ // 21
        question:"#21. Which of the following African country is landlocked? ",
        choice1:"South Africa",
        choice2:"Ethiopia",
        choice3:"Libya",
        choice4:"Nigeria",
        answer: 2,
    },{// 22
        question:"#22. Tropic of cancer does not pass through?",
        choice1:"Mali",
        choice2:"Mauritina",
        choice3:"Algeria",
        choice4:"Congo",
        answer: 4,
    },{ //23
        question:"#23. Which of the following is a high grassland? ",
        choice1:"Steppe",
        choice2:"Pampas",
        choice3:"Savanna",
        choice4:"Downs",
        answer: 3,
    },{// 24
        question:"#24.Which country does not fall in the horn of Africa?",
        choice1:"Djibouti",
        choice2:"Egypt",
        choice3:"Ethiopa",
        choice4:"Kenya",
        answer: 4,
    },{// 25
        question:"#25. Which African country shares its boundary with Mediterranean Sea?",
        choice1:"Libya",
        choice2:"Kenya",
        choice3:"Congo",
        choice4:"Uganda",
        answer: 1,
    },{ //26
        question: "#26. In the GOT universe, which is the name of a dragon from old valyria?",
        choice1: "drogon",
        choice2:"balerion",
        choice3:"dagunro",
        choice4:"vhagar",
        answer: 2,
    }
    
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 26

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()