let numberQuestions = 0
let subjectQuestion = ""

//  Save input subject
subject.addEventListener('keyup', saveInputElement)
//  Save input number questions
inputNumber.addEventListener('keyup',saveInputElement)

function saveInputElement() {
    numberQuestions = inputNumber.value
    subjectQuestion = subject.value
}

function createQuestions(){
    for (let i = 0; i < numberQuestions; i++) {
        createQuestionDefault(i+1)
        createQuestionAnswers(i+1)
    }
}

function createQuestionDefault(idNumber) {
    const div = document.createElement('div')
    div.setAttribute('id', `default${idNumber}`)
    div.setAttribute('class', "flex-col")
    const label = document.createElement('label')
    const textLabel = document.createTextNode("Question ")
    const span = document.createElement('span')
    const textSpan = document.createTextNode(`${idNumber}º`)
    span.appendChild(textSpan)
    label.append(textLabel,span)

    const textarea = document.createElement('textarea')
    textarea.setAttribute('id', `answer${idNumber}`)
    textarea.setAttribute('placeholder', "Is the earth flat?")
    textarea.setAttribute('class', "textAreas")
    // Falta asignar elemento padre
    // Revisar si se puede guardar en un return
    div.append(label,textarea)
    createQuizzes.insertBefore(div,buttonsCreate)
}

function createQuestionAnswers(idNumber) {
    const div = document.createElement('div')
    const hr = document.createElement('hr')
    div.setAttribute('id', `questions${idNumber}`)
    div.setAttribute('class', "flex-col")
    // Correcto answer
    const label1 = document.createElement('label')
    label1.setAttribute('for', `AnswerOK${idNumber}`)
    const textLabel = document.createTextNode(`Correct answer `)
    const i = document.createElement('i')
    i.setAttribute('class','fa-solid fa-circle-check')
    const textarea1 = document.createElement('textarea')
    textarea1.setAttribute('id', `answer${idNumber}`)
    textarea1.setAttribute('placeholder', "Yes")
    textarea1.setAttribute('class', "textAreas")
    
    label1.append(textLabel,i)
    
    // Wrong answer
    const label2 = document.createElement('label')
    label2.setAttribute('for', `AnswerWrong${idNumber}`)
    const textLabel2 = document.createTextNode(`Wrong answer `)
    const i2 = document.createElement('i')
    i2.setAttribute('class','fa-solid fa-circle-xmark')
    
    label2.append(textLabel2,i2)
    const textarea2 = document.createElement('textarea')
    textarea2.setAttribute('id', `answer${idNumber}`)
    textarea2.setAttribute('placeholder', "No")
    textarea2.setAttribute('class', "textAreas")
    // Falta asignar elemento padre
    // Revisar si se puede guardar en un return
    div.append(label1,textarea1,label2,textarea2)
    createQuizzes.insertBefore(div,buttonsCreate)
}

buttonNext.addEventListener('click',createQuestions)
buttonBackCreate.addEventListener('click',eliminateFirstElements)
buttonFinish.addEventListener('click',eliminateFirstElements)

function eliminateFirstElements(){
    while(createQuizzes.childElementCount >= 3){
        createQuizzes.removeChild(createQuizzes.firstChild)
    }
}


{/* 
<label for="Question">Question <span>1º</span></label>
<textarea name="" class="textAreas" id="answerNum" placeholder="When is it christmas?"></textarea>

<label for="AnswerOk">Correct answer <i class="fa-solid fa-circle-check"></i></label>
<textarea name="" class="textAreas" id="optionOk" placeholder="25 Dec"></textarea>

<label for="AnswerWrong1">Wrong answer <i class="fa-solid fa-circle-xmark"></i></label>
<textarea name="" class="textAreas" id="optionWrong" placeholder="1 Jan"></textarea>
<button id="buttonAddAnswers">+ Add answers</button> */}