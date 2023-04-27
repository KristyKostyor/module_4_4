'use strict'


const convector = (euro) => {
    let sum = euro;
    return sum * 1.2 * 73;
};


    const price = +prompt('Введите, пожалуйста, сумму в euro');
        alert (`Стоимость товара в рублях ${convector(price)}`);

