console.log(null>0);
console.log(null<0);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);
//The reason is that an equity check == and the comparison >,<,>=,<= works different.
//Comparison converts a  null into number and treating as 0. That's why null>=0 and null<=0 are true but null>0,null<0 are false.
//Strict comparison ===,checks datatypes as well as value if we check "2"===2, then it gives false