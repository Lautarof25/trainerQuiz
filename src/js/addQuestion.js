function createOptionsSubject(){
    const text = saveInputSubject()
    const option = document.createElement('option')
    const textOption = document.createTextNode(text)
    option.setAttribute('value', textOption)
    option.appendChild(textOption)
    selectSubject.appendChild(option)
}

{/* <div id="selectQuiz" class="flex-col d-none">
<label for="select">Select subject</label>
<select class="select" name="" id="selectSubject">
  <!-- Dynamic -->
  <option value="holidays" default>Holidays</option>
</select>
<button id="buttonStart">Start Quiz</button>
</div> */}

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

{/* 
<div id="questionOption0">
  <h2 id="questionNumber">When is it Christmas?</h2>
  <div id="divOptions0">
    <input type="radio" name="options" id="option1" value="25 Dec">
    <label for="option1">25 Dec</label>
  </div>
  <div id="divOptions1">
    <input type="radio" name="options" id="option2" value="1 Jan">
    <label for="option2">1 Jan</label>
</div>*/}