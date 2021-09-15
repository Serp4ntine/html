let country=prompt("Куда заказываем поставку?");

switch (country.toUpperCase()){
    case null:
        console.log("Отменено пользователем!")
        break;
    case "КИТАЙ": 
        console.log("Доставка в ", country, " будет стоить ", 100 , " кредитов");
        break;
    case 'ЧИЛИ': 
        console.log("Доставка в ", country, " будет стоить ", 250 , " кредитов");
        break;
    case 'АВСТРАЛИЯ': 
        console.log("Доставка в ", country, " будет стоить ", 170 , " кредитов");
        break;
    case "ИНДИЯ": 
        console.log("Доставка в ", country, " будет стоить ", 80 , " кредитов");
        break;
    case 'ЯМАЙКА': 
        console.log("Доставка в ", country, " будет стоить ", 120 , " кредитов");
        break;
    default:
        alert("Вашей страны нет в списке")
}