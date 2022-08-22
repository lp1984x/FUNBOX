import * as lpFunc from './modules/functions.js';

const selectedColor = "#D91667",
    selectedHoverColor = '#E62E7A';


// запуск функции выключения с параметром блока
lpFunc.dsbl(b3);


// запуск функции проверки поддержки webp
lpFunc.isWebp();

// запуск функции выбора блока кликом на сам блок или на "купить"
main.onclick = function (event) {


    let x = event.target.closest('.block__content'),
        y = event.target.tagName;

    if (y == 'SPAN') {
        let n = event.target.closest('.block').querySelector('.block__content');
        lpFunc.clk(n);

    } else {

        lpFunc.clk(x);
    }
}

// наведение на выбраный ранее блок
main.onmouseover = function (event) {
    let x = event.target.closest('.block__content');
    if (event.target.closest('.block__content')) {
        if (x.parentElement.querySelector('.dis').style.visibility == '') {

            if (x.parentElement.querySelector(".block__circle").style.background != '') {

                x.parentElement.querySelector(".block__circle").style.background = selectedHoverColor;

                x.parentElement.querySelector(".block__toptext").innerHTML = 'Котэ не одобряет?';
                x.parentElement.querySelector(".block__toptext").style.color = selectedHoverColor;

                for (let node of x.querySelectorAll('.brd')) {
                    node.style.borderColor = selectedHoverColor;
                }
            }
        }
    }
}

// убрать наведение с выбраного ранее блока
main.onmouseout = function (event) {
    let x = event.target.closest('.block__content');
    if (event.target.closest('.block__content')) {
        if (x.parentElement.querySelector('.dis').style.visibility == '') {
            if (x.parentElement.querySelector(".block__circle").style.background != '') {

                x.parentElement.querySelector(".block__circle").style.background = selectedColor;

                x.parentElement.querySelector(".block__toptext").innerHTML = 'Сказочное заморское яство';

                x.parentElement.querySelector(".block__toptext").style.color = '';

                for (let node of x.querySelectorAll('.brd')) {
                    node.style.borderColor = selectedColor;
                }
            }
        }
    }
}

