const time = document.getElementById('time')

let num = 0

time.innerHTML = num

function incrementar(){
    num += 1
    time.innerHTML = num
}

//update_time(60)