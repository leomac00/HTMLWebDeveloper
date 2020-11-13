// let amount = 576 //quantidade teste
// let bills = {
//     1: 0,
//     2: 0,
//     5: 0,
//     10: 0,
//     20: 0,
//     50: 0,
//     100: 0,
//   }

// function billCount(array, total, dividedBy) {
//   let tempTotal = total;
//   let remainder = total % dividedBy
//   amount = remainder
//   total -= remainder;
//   result = total / dividedBy;
//   return array[dividedBy]=result, amount;
// }

// console.log(amount)
// for (let i = 6; i >= 0; i--) {
//     bill = parseInt(Object.keys(bills)[i]);
//     billCount(bills, amount, bill);
//     console.log(bills[bill] + ' nota(s) de R$ ' + bill + ',00')
// }

//----------

// let array = Array(5);
// let par = 0;
// let impar = 0;
// let positivo = 0;
// let negativo = 0;

// for (let i = 0; i <= 4; i++) {
//     array[i] = parseInt(gets());
//     //verificar se é par utilizando o operador módulo %. se o resto for zero é par
//     if (array[i] % 2 == 0) {
//         par++;
//     }

//     //verificar se é impar utilizando o operador módulo %. se o resto for diferente de zero é impar
//     if (array[i] % 2 != 0) {
//         impar++;
//     }

//     //verificar se é positivo se o número for maior do que zero
//     if (array[i] > 0) {
//         positivo++;
//     }

//     //verificar se é negativo se o número for menor do que zero
//     if (array[i] < 0) {
//         negativo++;
//     }


// }

// console.log(par + " valor(es) par(es) " + "\n" + impar + " valor(es) impar(es) " + "\n" + positivo + " valor(es) positivo(s) " + "\n" + negativo + " valor(es) negativo(s)")

//----------
let numbers = {
    even: 0,
    odd: 0,
    pos: 0,
    neg: 0
}

for (let i = 0; i < 5; i++) {
    let num = gets();
    if (num > 0){numbers.pos++;}
    if (num < 0){numbers.neg++;}
    if (num % 2 == 0){numbers.even++;}
    if (num % 2 != 0){numbers.odd++;}
}

message = numbers.even + ' valor(es) par(es)';
message += '\n' + numbers.odd + ' valor(es) impar(es)';
message += '\n' + numbers.pos + ' valor(es) positivo(s)';
message += '\n' + numbers.neg + ' valor(es) negativo(s)';

console.log(message)
//----------

// let num = 6;
// let result = 0;

// if (num % 2 == 0) {
//     while (result < num) {
//         result = result + 2;
//         console.log(result)
//     }
// } else {
//     num--;
//     while (result < num) {
//         result = result + 2;
//         console.log(result)
//     }
// }

//----------

// let count = 0;
// let i = 0;

// while (i < 7) {
//   let line = gets();
//   if (line > 0) {
//     count++
//   }
//   i++;
// }

// console.log(count + ' valores positivos')