function createOptionsSubject(){
    const text = saveInputSubject()
    const option = document.createElement('option')
    const textOption = document.createTextNode(text)
    option.setAttribute('value', textOption)
    option.appendChild(textOption)
    selectSubject.appendChild(option)
}

buttonPlay.addEventListener('click',createOptionsSubject)


function addOptionRadio(){
    const label1 = document.createElement('label')
    const radio1 = document.createElement('input')
    radio1.setAttribute('type', 'radio')
    radio1.setAttribute('name', 'options')
    radio1.setAttribute('id', 'option1')
    const label2 = document.createElement('label')
    const radio2 = document.createElement('input')
    radio2.setAttribute('type', 'radio')
    radio2.setAttribute('name', 'options')
    radio2.setAttribute('id', 'option2')



}

{/* <input type="radio" name="options" id="option1">
<label for="option1">25 Dec</label>
</div>
<div>
<input type="radio" name="options" id="option2">
<label for="option2">1 Jan</label> */}

{/* <div id="selectQuiz" class="flex-col d-none">
<label for="select">Select subject</label>
<select class="select" name="" id="selectSubject">
  <!-- Dynamic -->
  <option value="holidays" default>Holidays</option>
</select>
<button id="buttonStart">Start Quiz</button>
</div> */}