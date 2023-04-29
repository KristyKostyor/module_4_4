'use strict'


let totalAmountCart = prompt("Введите сумму");
let quantyGoodsCart = prompt('Введите количество товаров');
let promoCode = prompt ('Введите промокод');
alert(`Ваша итоговая сумма ${totalAmountCart}, ${quantyGoodsCart}, ${promoCode}`);


const calculate = (totalAmountCart, quantyGoodsCart, promoCode) => {  
    let sum = totalAmountCart;
    let quanty = quantyGoodsCart;
    let promo = promoCode;

    if(quanty>10){
        sum = sum*0.97;
    }
    else if (quanty>3000) {
        sum = sum - (sum-3000)*0.15;
    }
    else if (promo === "METHED") {
        sum = sum*0.9;
    }
    else if (promo === "G3H2Z1" && quanty > 2000) {
        sum-500;
    }
        return  sum;
    
};
