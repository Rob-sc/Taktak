const $score = document.getElementById('score')
const $time = document.getElementById('time')
const $paragraph = document.querySelector('p')
const $input = document.querySelector('input')

const TEXT_GAME = "Ejemplo de texto para la aplicación de escribir texto en pantalla."
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
    const timer = setInterval(() => {
    $time.textContent = INITIAL_TIME--
    if (INITIAL_TIME < 0){
        INITIAL_TIME = 60
        //clearInterval(timer)
        //console.log("Has perdido")
    }
}, 1000);

}

const $focusWord = $paragraph.querySelector('word')
$focusWord.classList.add('active')
$focusWord.querySelector('letter').classList.add('active')

const Ejemplo = $focusWord.querySelector('letter').textContent

$input.addEventListener('input', ()=>{
    if ($input.value == Ejemplo){
        console.log("EXITO")
    }else{
        console.log('Error')
    }

    })



