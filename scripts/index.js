//Funcionalidad menu TOggle
const selectElement = function(element) {
    return document.querySelector(element);     //selecciona los elementos
}


let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let x = selectElement('.fa-times');
let bars = selectElement('.fa-bars');
let navList = selectElement('.nav-list');


menuToggle.addEventListener('click', function(){        //Abre el menu
    navList.classList.toggle('open');
    x.classList.toggle('open');
    bars.classList.toggle('open')
})


//Acordeon Footer
const accordion = document.getElementsByClassName('container2');
        for (i=0; i<accordion.length; i++) {
            accordion[i].addEventListener('click', function () {
                this.classList.toggle('active')
            })
        }
        const accordion3 = document.getElementsByClassName('content2');
        for (i=0; i<accordion3.length; i++) {
        accordion3[i].addEventListener('click', function () {
            this.classList.toggle('active')
        })
        }
        const accordion4 = document.getElementsByClassName('content3');

        for (i=0; i<accordion4.length; i++) {
        accordion4[i].addEventListener('click', function () {
            this.classList.toggle('active')
        })
        }