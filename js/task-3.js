const ADMIN_PASSWORD = 'aaaa0000';
let message=prompt();
switch (message){
    case ADMIN_PASSWORD:
        console.log("Добро пожаловать!");
        break;
    case null:
        console.log("Отменено пользователем!")
        
        break;
    default:
        console.log("Доступ запрещен, неверный пароль!");
}
