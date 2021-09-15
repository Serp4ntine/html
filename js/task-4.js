let credits = 23580;
let pricePerDroid = 3000;

let amount=prompt("Желаемое количество ");

switch (amount){
    case null:
        console.log("Отменено пользователем!")
        
        break;
    default:
        if (amount*pricePerDroid>credits){
            console.log("Недостаточно средств на счету!");
        } else {
            console.log("Вы купили ", amount, " дроидов, на счету осталось ", (credits-amount*pricePerDroid), " кредитов")
        }
}