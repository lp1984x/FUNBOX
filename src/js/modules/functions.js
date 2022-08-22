const disabledText = '#FFFF66',
    disabledColor = "#B3B3B3",
    selectedColor = "#D91667";




// функция выключающая блок
export function dsbl(x) {

    if (x == b1) {
        x.querySelector(".block__buy").innerHTML = 'Печалька, с фуа-гра закончился.';
    }
    if (x == b2) {
        x.querySelector(".block__buy").innerHTML = 'Печалька, с рыбой закончился.';
    }

    if (x == b3) {
        x.querySelector(".block__buy").innerHTML = 'Печалька, с курой закончился.';
    }

    x.querySelector(".block__buy").style.color = disabledText;
    x.querySelector('.dis').style.visibility = 'visible';
    x.querySelector(".block__circle").style.background = disabledColor;

    for (let node of x.querySelectorAll('.brd')) {
        node.style.borderColor = disabledColor;
    }
}


// функция проверки поддержки webp
export function isWebp() {

    //проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //добавление класса для html
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}






// функция выбора блока
export function clk(x) {

    if (x.querySelector('.dis').style.visibility == "") {

        if (x.querySelector(".block__circle").style.background == '') {

            x.querySelector(".block__circle").style.background = selectedColor;

            for (let node of x.querySelectorAll('.brd')) {
                node.style.borderColor = selectedColor;
            }
            if (x.parentElement.id == 'b1') {
                x.parentElement.querySelector(".block__buy").innerHTML = 'Печень утки разварная с артишоками.';
            }
            else if (x.parentElement.id == 'b2') {
                x.parentElement.querySelector(".block__buy").innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
            }
            else if (x.parentElement.id == 'b3') {
                x.parentElement.querySelector(".block__buy").innerHTML = 'Филе из цыплят с трюфелями в бульоне.';
            }
        } else {
            x.querySelector(".block__circle").style.background = '';
            for (let node of x.querySelectorAll('.brd')) {
                node.style.borderColor = '';
            }
            x.parentElement.querySelector(".block__buy").innerHTML = 'Чего сидишь? Порадуй котэ, <span>купи.</span>';
            x.parentElement.querySelector(".block__toptext").innerHTML = 'Сказочное заморское яство';
            x.parentElement.querySelector(".block__toptext").style.color = '';
        }
    }

}