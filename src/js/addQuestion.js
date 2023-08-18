function createOptionsSubject(){
    const text = saveInputSubject()
    const option = document.createElement('option')
    const textOption = document.createTextNode(text)
    option.setAttribute('value', textOption)
    option.appendChild(textOption)
    selectSubject.appendChild(option)
}

buttonPlay.addEventListener('click',createOptionsSubject)

let questionsArray = []
let answersArray = []

function getQuestions(){
  for (let i = 0; i < saveInputNumbers(); i++) {
    questionsArray.push(document.querySelector(`#question${i}`).value)
  }
}

function getAnswers(){
  for (let i = 0; i < saveInputNumbers(); i++) {
    let answerOkValue = document.querySelector(`#answerOk${i}`).value
    let answerWrongValue = document.querySelector(`#answerWrong${i}`).value
    answersArray.push([answerOkValue,answerWrongValue])
  }
}

buttonFinish.addEventListener('click',getQuestions)
buttonFinish.addEventListener('click',getAnswers)
buttonFinish.addEventListener('click',saveAndBackHome)

function addQuestion(idNumber){
  const div = document.createElement('div')
  div.setAttribute('id',`questionOption${idNumber}`)
  const h2 = document.createElement('h2')
  h2.setAttribute('id',`questionNum${idNumber}`)
  h2.textContent = questionsArray[idNumber] + "?"
  div.appendChild(h2)
  playQuiz.append(div)
}

function addOptionsRadio(idNumber,idItem){
    const div = document.createElement('div')
    div.setAttribute('id',`divOption${idNumber}${idItem}`)
    const label = document.createElement('label')
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', `optionName${idNumber}`)
    radio.setAttribute('id', `option${idNumber}${idItem}`)
    label.setAttribute('for',`option${idNumber}${idItem}`)
    radio.setAttribute('value', `${answersArray[idNumber][idItem]}`)
    label.textContent = answersArray[idNumber][idItem]
    
    div.append(radio,label)
    const divParent = document.querySelector(`#questionOption${idNumber}`)
    divParent.appendChild(div)
}

function addQuestionsPlay(){
  for (let i = 0; i < answersArray.length; i++) {
    addQuestion(i) 
    for (let j = 0; j < 2; j++) {
      addOptionsRadio(i,j)
    }
  }
}

buttonStart.addEventListener('click', function(){
  addQuestionsPlay()
})