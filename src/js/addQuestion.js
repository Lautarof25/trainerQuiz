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
  const h2 = document.createElement('h2')
  h2.textContent = questionsArray[idNumber]
  playQuiz.appendChild(h2)
}

function addOptionRadio(idNumber){
    const div = document.createElement('div')
    const label = document.createElement('label')
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', 'options')
    radio.setAttribute('id', `option${idNumber}`)
    label.textContent = answersArray[idNumber]
}

{/* 
<h2 id="question">When is it Christmas?</h2>
<div id="">
  <input type="radio" name="options" id="option1">
  <label for="option1">25 Dec</label>
</div>
<div>
  <input type="radio" name="options" id="option2">
  <label for="option2">1 Jan</label>
</div> */}