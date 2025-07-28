const $paragraph = document.querySelector('p');

const TEXT_GAME = "Ejemplo de texto";



function gnr_text(text){
    const words =  text.split(" ");
    const letters = words.map((word)=>{
        return "<words>" + word.split("").map((letter)=>{
            return "<letters>" + letter + "</letters>"
        }).join('')
        + "</words>"
    })
    
    $paragraph.innerHTML = letters.join(" ")

}

gnr_text(TEXT_GAME)