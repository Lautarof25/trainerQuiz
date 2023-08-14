// Button Quiz -> first page - creating quiz
buttonCreate.addEventListener('click', createQuiz)

function createQuiz() {
    home.classList.toggle('d-none')
    createNumberQuizzes.classList.toggle('d-none')
}

// Button Quiz -> first page - Save input value

inputNumber.addEventListener('keyup',saveInputValue)

function saveInputValue() {
    return inputNumber.value
}

buttonNext.addEventListener('click',nextPageQuestion)

function nextPageQuestion() {
    createNumberQuizzes.classList.toggle('d-none')
    createQuizzes.classList.toggle('d-none')
}

buttonBackHome.addEventListener('click',backHome)

function backHome() {
    createNumberQuizzes.classList.toggle('d-none')
    home.classList.toggle('d-none')
}

buttonBackCreate.addEventListener('click',backCreate)

function backCreate() {
    createNumberQuizzes.classList.toggle('d-none')
    createQuizzes.classList.toggle('d-none')
}