const findLongestWord = function(string) {
    let count=string.split(" ");
    let word=" ";
    for (let i=0; i<count.length; i++){
        if (word.length<count[i].length){
            word=count[i];
        }
    }
    console.log(word)
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'