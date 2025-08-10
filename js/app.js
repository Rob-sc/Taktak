const $score = document.getElementById('score')
const $time = document.getElementById('time')
const $paragraph = document.querySelector('p')
const $input = document.querySelector('input')

const TEXT_GAME = "ejemplo de texto para la aplicación de escribir texto en pantalla."
let INITIAL_TIME = 3
const INITIAL_SCORE = 0

$score.innerHTML = INITIAL_SCORE



gnr_text(TEXT_GAME)
gnr_timer()

function gnr_text(text){ 
    const words =  text.split(" ");
    const letters = words.map((word)=>{
        return "<word>" + word.split("").map((letter)=>{
            return "<letter>" + letter + "</letter>"
        }).join('')
        + "</word>"
    })
    $paragraph.innerHTML = letters.join(" ")
}

function gnr_timer(){
    setInterval(() => {
    $time.textContent = INITIAL_TIME--
    if (INITIAL_TIME < 0){
        INITIAL_TIME = 60
        //clearInterval(timer)
        //console.log("Has perdido")
    }}, 1000);
}


function gnr_score(time,word){
    const points = time * word
    INITIAL_SCORE += points
}

const $firstWord = $paragraph.querySelector('word')
$firstWord.classList.add('active')
$firstWord.querySelector('letter').classList.add('active')



function initEvent(){
    document.addEventListener('keydown', ()=>{
        $input.focus()
    })
    $input.addEventListener('keydown', onKeydown)
    $input.addEventListener('keyup', onKeyup)
}

function onKeydown(event){
    const $focusWord = $paragraph.querySelector("word.active")
    const $focusLetter = $focusWord.querySelector("letter.active")

    const {key} = event
    if (key === " "){
        event.preventDefault()

        $focusWord.classList.remove("active")
        $focusLetter.classList.remove("active")

        const $nextWord = $focusWord.nextElementSibling
        $nextWord.classList.add("active")
        
        $input.value = ""
    }
}

function onKeyup(){
    const $focusWord = $paragraph.querySelector("word.active")
    const $allLetters = $focusWord.querySelectorAll("letter")
    $allLetters.forEach(letter=>letter.classList.remove("active","is-last","correct", "incorrect"))

    $input.value.split('').forEach((input_letter, index)=>{
        if($allLetters[index].textContent == input_letter){
            $allLetters[index].classList.add("correct")
        }else{
            $allLetters[index].classList.add("incorrect")
        }
    })

    if($input.value.length < $allLetters.length){
        $allLetters[$input.value.length].classList.add("active")
    }else{
        $allLetters[$input.value.length - 1].classList.add("active", "is-last")
    }
}


initEvent()