let button= document.querySelector('button');

button.addEventListener("mouseover", function(){
    this.classList.add('couleur');
});
button.addEventListener("mouseout", function(){
    this.classList.remove('couleur');
});