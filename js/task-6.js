let number;
let total = 0;

do{
    number=prompt();
    total= total + Number(number);
}while(number!=null);
alert(total);