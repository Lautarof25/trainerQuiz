// Create Quiz -> first page - creating quiz
buttonCreate.addEventListener('click', createQuiz)

function createQuiz() {
    home.classList.toggle('d-none')
    createNumberQuizzes.classList.toggle('d-none')
    console.log("createNumberQuizzes")
}

buttonNext.addEventListener('click',nextPageQuestion)

function nextPageQuestion() {
    createNumberQuizzes.classList.toggle('d-none')
    createQuizzes.classList.toggle('d-none')
    console.log("createQuizzes")
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
    console.log("createNumberQuizzes")
}

buttonFinish.addEventListener('click',saveAndBackHome)

function saveAndBackHome(){
    createQuizzes.classList.toggle('d-none')
    home.classList.toggle('d-none')
}

// Button play -> first page -> select quizzes

buttonPlay.addEventListener('click',startQuizzes)

function startQuizzes(){
    home.classList.toggle('d-none')
    selectQuiz.classList.toggle('d-none')
}

select.addEventListener('change', optionSelectedOk)

function optionSelectedOk(){
    return select.value === "holidays" 
}

buttonStart.addEventListener('click',playQuizzes)

function playQuizzes() {
    if(optionSelectedOk()){
        selectQuiz.classList.toggle('d-none')
        playQuiz.classList.toggle('d-none')
    }else {
        popUp.classList.toggle('d-none')
        setTimeout(() => {
            popUp.classList.toggle('d-none')
        }, 2500);
    }
}

option1.addEventListener('click',hitAnswer)
option2.addEventListener('click',wrongAnswer)

function hitAnswer(){
    spanResult.textContent = "100"
    playQuiz.classList.toggle('d-none')
    result.classList.toggle('d-none')
}

function wrongAnswer(){
    spanResult.textContent = "0"
    playQuiz.classList.toggle('d-none')
    result.classList.toggle('d-none')
}

backHomeFinish.addEventListener("click", backHomeFinishPage)

function backHomeFinishPage(){
    home.classList.toggle("d-none")
    result.classList.toggle('d-none')
}