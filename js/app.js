const time = document.getElementById('time')
const score = document.getElementById('score')

let num = 0
let score_points = 0

time.innerHTML = num
score.innerHTML = score_points

function incrementar(){
    num += 1
    time.innerHTML = num
}

//update_time(60)