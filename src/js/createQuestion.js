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

let idNumber = 1

function createQuestionDefault(idNumber) {
    const label = document.createElement('label')
    const textLabel = document.createTextNode("Question ")
    const span = document.createElement('span')
    const textSpan = document.createTextNode(`${idNumber}º`)
    span.appendChild(textSpan)
    label.append(textLabel,span)

    const textarea = document.createElement('textarea')
    textarea.setAttribute('id', `answer${idNumber}`)
    // Falta asignar elemento padre
    // Revisar si se puede guardar en un return
    createQuizzes.append(label,textarea)
}

function createQuestionAnswers(idNumber) {
    // Correcto answer
    const label1 = document.createElement('label')
    label1.setAttribute('for', `AnswerOK${idNumber}`)
    const textLabel = document.createTextNode(`Correct answer `)
    const i = document.createElement('i')
    i.setAttribute('class','fa-solid fa-circle-check')
    const textarea1 = document.createElement('textarea')
    textarea1.setAttribute('id', `answer${idNumber}`)
    
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
    // Falta asignar elemento padre
    // Revisar si se puede guardar en un return
    createQuizzes.append(label1,textarea1,label2,textarea2)
}

buttonNext.addEventListener('click',createQuestionDefault)
buttonNext.addEventListener('click',createQuestionAnswers)


{/* 
<label for="Question">Question <span>1º</span></label>
<textarea name="" class="textAreas" id="answerNum" placeholder="When is it christmas?"></textarea>

<label for="AnswerOk">Correct answer <i class="fa-solid fa-circle-check"></i></label>
<textarea name="" class="textAreas" id="optionOk" placeholder="25 Dec"></textarea>

<label for="AnswerWrong1">Wrong answer <i class="fa-solid fa-circle-xmark"></i></label>
<textarea name="" class="textAreas" id="optionWrong" placeholder="1 Jan"></textarea>
<button id="buttonAddAnswers">+ Add answers</button> */}