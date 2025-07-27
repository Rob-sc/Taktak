const $time = document.getElementById('time')
const $score = document.getElementById('score')


let num = 0
let score_points = 0
let TEXT_GAME = "Lore ip sum"

$time.innerHTML = num
$score.innerHTML = score_points

gnr_text(TEXT_GAME)

const $p = document.querySelector('p')

function gnr_text(text){
    const words = text.split(" ")
    words.forEach(word => {
        $p.innerHTML += "<word>" + word.split('') 
        + "</word>"
    });
}