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
let n = 0


function initEvent(){
    document.addEventListener('keydown', ()=>{
        $input.focus()
    })
    $input.addEventListener('keydown', onKeydown)
    $input.addEventListener('keyup', onKeyup)
}

function onKeydown(event){
    console.log(event.key)
    if(event.key === "Backspace"){
        n -= 1
    }

    console.log("Ahora el valor de N es:  " + n)
}


function onKeyup(){
    const allLetters = $focusWord.querySelectorAll("letter")
    const activeletter = allLetters[n].textContent
    const comparar = $input.value.split("")[n]

    try {
        if(activeletter == comparar){
        allLetters[n].classList.remove('active')
        allLetters[n].classList.add('correct')
        console.log("La letra activa es:  " +activeletter + " y N  vale: " + n)
        console.log("EXITO")
        
        }else{
            console.error("ERROR")
            allLetters[n].classList.remove('active')
            allLetters[n].classList.add('incorrect')

        }

        n += 1
        allLetters[n].classList.add('active')

    } catch (error) {
        console.log("La cague")
    }

    
}


initEvent()

