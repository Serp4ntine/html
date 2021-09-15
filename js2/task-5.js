const checkForSpam = function(message) {
    let words=message.split(" ");
    let a=0;
    for(let i=0; i<words.length; i++){
        if(words[i].toUpperCase()=="sale".toUpperCase() || words[i].toUpperCase()=="spam".toUpperCase()){
            a=1;
        } 
    }
    if (a==0){
        return console.log("false")
    }else{
        return console.log("true")
    }
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true