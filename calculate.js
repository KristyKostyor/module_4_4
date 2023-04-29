'use strict'
const totalAmountSum = +prompt("Введите сумму");
const quantyGoodsCart = +prompt("Введите количество товаров");
const promoCode = prompt("Введите промокод");

const calculate = (totalAmountSum, quantyGoodsCart, promoCode) => {  
    let sum = totalAmountSum;
    let quanty = quantyGoodsCart;
    let promo = promoCode;

    if (quanty > 10) {
      sum *= 0.97;
    }
    if (sum > 3000) {
      sum = sum - (sum - 3000) * 0.15;
    }
    if (promo === "METHED") {
        sum*=0.9;
    }
    else if (promo === "G3H2Z1" && sum > 2000) {
        sum -= 500;
    }
        return  sum;
    
};

    alert(calculate(`Ваша итоговая сумма: ${totalAmountSum}, ${quantyGoodsCart}, ${promoCode}`));
