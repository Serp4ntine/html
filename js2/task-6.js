

let input;
const numbers = [];
let total = 0;

do{
    input=prompt();
    numbers.push(input);
}while(input!=null);

if(numbers!=null){
    for(let i=0; i<numbers.length; i++){
        total = total + Number(numbers[i]);
    }
}
alert(total);