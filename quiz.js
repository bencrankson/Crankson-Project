const startButton =document.getElementById(
    "start-btn"
)
const nextButton =document.getElementById(
    "next-btn"
)
startButton.addEventListener('click', startGame)
const questionContainerelements =document.getElementById('question container')
const questionElement =document.getElementById('question')
const answerButtonElement =document.getElementById('answer-btn')

let shuffleQuestion, currentQuestionIndex 


nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})




function startGame() {

startButton.classList.add('hide')
shuffleQuestion =question.sort(()=> Math.random()-.5)
currentQuestionIndex = 0
questionContainerelements.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion() {
   resetState() 

  showQuestion(shuffleQuestion[currentQuestionIndex])  
    
}

function showQuestion(question){
 questionElement.innerText=question.question
question.answer.forEach( answer =>{
const button =document.createElement('button')
button.innerText =answer.text
button.classList.add('btn')
if(answer.correct) {
    button.dataset.correct =answer.correct
}
button.addEventListener('click',selectAnswer)
answerButtonElement.appendChild(button)
})
}

function resetState(){
    nextButton.classList.add('hide')
    while( answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}






function selectAnswer(e){
const selectButton = e.target
const correct =selectButton.dataset.correct
setStatusClass(document.body,correct)
Array.from(answerButtonElement.children).forEach( button => {
    setStatusClass(button, button.dataset.correct )
})

if (shuffleQuestion.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide') 
} else{
    startButton.innerText='Restart'
    startButton.classList.remove('hide')
}

}

function setStatusClass( element, correct){
   clearStatusClass(element)
   if (correct){
    element.classList.add('correct')
   } else{
    element.classList.add('wrong')
   }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const question =[
{
    question:'which of these is the longest river in world ?',
  answer:[
    { text: 'River Nile', correct:true},
    { text: 'Parana River',wrong:false},
    { text: 'Amazon River',wrong:false},
    { text: 'congo River',wrong:false}
  ]
},
{
    question: 'Most populated country is the worls',
    answer:[
        
            {text:'Canada',correct:false},
            {text:'China',correct:true},
            {text:'Niger',correct:false},
            {text:'Ghana',correct:false}

        
    ]
},
{
    question: 'who many days are in a week',
    answer:[
        
            {text:'7',correct:true},
            {text:'12',correct:false},
            {text:'9',correct:false},
            {text:'8',correct:false}

        
    ]
    
}


]
