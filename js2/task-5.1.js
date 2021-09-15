const checkForSpam = function(message) {
    let words=message.split("");
    let a=0;
    for(let i=0; i<words.length; i++){
        if((words[i]=="S"||words[i]=="s")){
            if((words[i+1]=="P"||words[i+1]=="p")&&(words[i+2]=="a"||words[i+2]=="A")&&(words[i+3]=="M"||words[i+3]=="m")){
            a=1;}
            if((words[i+1]=="A"||words[i+1]=="a")&&(words[i+2]=="L"||words[i+2]=="l")&&(words[i+3]=="E"||words[i+3]=="e")){
                a=1;}
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