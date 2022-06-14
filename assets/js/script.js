// console.log("hello world")

const projeto = document.getElementById("portfolio1")

// console.log(projeto)

projeto.src="/assets/img/pokedex.png"

const buttonElement = document.getElementById("btn-change") // seleção dee elemento pelo ID
const prt_elgeladon = document.getElementById("card-hidden")

console.log(prt_elgeladon)

buttonElement.addEventListener("click", function(){
    if (prt_elgeladon.classList.contains("hidden")) {
        prt_elgeladon.classList.remove("hidden")  // -- > classlist (remove) > retira uma "classe"
    } else {
        prt_elgeladon.classList.add("hidden")    // classlist (add) > add uma "classe"
    }
})