let form = document.querySelector(".form")
let texte = document.querySelector(".texte")
let stop = document.querySelector(".stop")

form.addEventListener("submit", function (e) {
    if (texte.value == "") {
        e.preventDefault();
        stop.innerHTML = `Renseignez votre pseudo`;
        texte.classList.add("fond")
    }
});