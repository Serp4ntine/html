const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  let log=login.split('');
  if (log.length>3 && log.length<16){
      return true
  } else {
      return false
  }
};

const isLoginUnique = function(allLogins, login) {
  let a=0;
  for (let i=0; i<allLogins.length; i++){
      if(allLogins[i]==login){
          a=1;
          break;
      }
  }
  if(a==1){
      return false
  } else {
      return true
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)){
      if (isLoginUnique(allLogins, login)){
        allLogins.push(login);
        console.log("Логин успешно добавлен!")
      } else {
          console.log("Такой логин уже используется!")
      }
  }else{
      console.log("Ошибка! Логин должен быть от 4 до 16 символов")
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'