"use strict"

// Variables
const DEP = document.querySelectorAll('.departments');
DEP[0].value = 1.53; //CE
DEP[1].value = 2.04; //PE
DEP[2].value = 1.52; //MDA
DEP[3].value = 2.31; //SDA
DEP[4].value = 5.01; //HT
DEP[5].value = 3.51; //ACC
const defDEP =['CE', 'PE', 'MDA', 'SDA', 'HT', 'ACC'];
const COEF = document.querySelectorAll('.coefficient');
COEF[0].value = 0.2; //M
COEF[1].value = 1; //N
COEF[2].value = 1.67; //E
const defCOEF =['M', 'N', 'E'];
const number = document.getElementById('inp');
const answ = document.querySelector('.answer');
const info = document.getElementById('info');
const red = 'rgb(243, 39, 53)';
const grey = 'rgb(108, 117, 125)';
const yellow = 'rgb(240, 173, 78)';
// =====================================================

// Functions
function Color_One() {
    for (let i = 0; i <= 5; i++) {
        if (this.style.backgroundColor = red) {
            DEP[i].style.backgroundColor = grey;
        }
    }

    this.style.backgroundColor = red;

    if (DEP[4].style.backgroundColor == red) {
        COEF[0].value = 0.5;
        if(DEP[4].innerHTML == DEP[4].value) {
            COEF[0].innerHTML = '0.5';
        }
        return;
    } else {
        COEF[0].value = 0.2;
    }

    if (DEP[5].style.backgroundColor == red) {
        COEF[0].value = 0.4;
        if(DEP[5].innerHTML == DEP[5].value) {
            COEF[0].innerHTML = '0.4';
        }
        return;
    } else {
        COEF[0].value = 0.2;
    }

    for(let i = 0; i < 4; i++) {
        if(DEP[i].innerHTML == DEP[i].value) {
            COEF[0].innerHTML = '0.2';
        }
    }
}
function Color_Two() {
    for (let i = 0; i <= 2; i++) {
        if (this.style.backgroundColor = red) {
            COEF[i].style.backgroundColor = grey;
        }
    }
    this.style.backgroundColor = red;
}
function calc () {
    if (number.value == +number.value) {
        for (let k = 0; k <= 5; k++) {
            if (DEP[k].style.backgroundColor == red) {
                for (let i = 0; i <= 2; i++) {
                    if (COEF[i].style.backgroundColor == red) {
                        answ.innerHTML = `Заробіток складає ${(((DEP[k].value * COEF[i].value * number.value) / 100) * 1).toFixed(2)}`;
                    }
                }
            }
        }
        if (number.value == '') {
            answ.innerHTML = '';
        }
    } else {
        alert("Уведіть число");
        number.value = '';
        answ.innerHTML = '';
    }
}
function information () {
    if (this.style.backgroundColor == yellow) {
        this.style.backgroundColor = grey;
        for (let i = 0; i < 3; i++ ) {
            COEF[i].innerHTML = defCOEF[i];
        }
        for (let i = 0; i < 6; i++ ) {
            DEP[i].innerHTML = defDEP[i];
        }
    } else {
        this.style.backgroundColor = yellow;
        for (let i = 0; i < 3; i++ ) {
            COEF[i].innerHTML = COEF[i].value;
        }
        for (let i = 0; i < 6; i++ ) {
            DEP[i].innerHTML = DEP[i].value;
        }
    }

}
// =====================================================

//EventListener
for (let i = 0; i <= 5; i++) {
    DEP[i].addEventListener('click', Color_One);
    DEP[i].addEventListener('click', calc);
}
for (let i = 0; i <= 2; i++) {
    COEF[i].addEventListener('click', Color_Two);
    COEF[i].addEventListener('click', calc);
}
number.addEventListener('input', calc);
info.addEventListener('click', information);
