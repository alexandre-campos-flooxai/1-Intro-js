// comentario
// console.log('Hello world');
console.log('Hello world');

// variavel
// var

// declaração por escopo
// let

// declaração que não muda
// const

// operadores igualdade
let a = 10;
const b = 20;

console.log(a == b);
// false

let c = 10;
const d = '10';

console.log(c == d);
// true

console.log(c === d);
//false

// operador comparação
console.log(c !== d);
//true

console.log(c != d);
//false

// operador lógico
// and
console.log(c == d && typeof d == 'string');

console.log(c == d && typeof c == 'string');

// or
console.log(c == d || typeof c == 'string');

let cor = 'amarelo';

if (cor === 'verde') {
  console.log('siga');
} else {
  console.log('pare');
}

if (cor === 'verde') {
  console.log('siga');
} else if (cor === 'amarelo') {
  console.log('atenção');
} else {
  console.log('pare');
}

// controle de fluxo
// switch
let cor2 = 'azul';

switch (cor2) {
  case 'vermelho':
    console.log('vermelho');
    break;

  case 'verde':
    console.log('verde');
    break;
  case 'amarelo':
    console.log('amarelo');
    break;

  default:
    console.log('erro');
}

// laço repetição

let n = 5;

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${n} = ${i * n}`); //Template Strings

  console.log(i + ' x ' + n + ' = ' + i * n); //'concatenação'
}
