//expressão de função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3));

function calc(n1, n2, op) {
  return eval(`${n1} ${op} ${n2}`);
}

let valor = calc(5, 5, '*');

console.log(valor);

//função anônima
// (function (n1, n2, op) {
//   return eval(`${n1} ${op} ${n2}`);
// })();

//arrow function
let calc3 = (n1, n2, op) => {
  return eval(`${n1} ${op} ${n2}`);
};

let valor2 = calc3(10, 5, '*');

console.log(valor2);

//eventos
window.addEventListener('focus', (event) => {
  console.log('focou');
});

document.addEventListener('click', (event) => {
  console.log('clicou');
});

//datas
let data = Date.now();

console.log(data);

let data2 = new Date();

console.log(data2);

console.log(data2.toLocaleDateString('pt-Br'));

//array
let carros = ['palio', 'ferrarri', 'gol'];
console.log(carros);
console.log(carros.length);
console.log(carros[2]);

carros.forEach(function (value, index) {
  console.log(value, index);
});

let nomes = ['alex', 'paulo', 'marcos'];

nomes.forEach((n, i) => {
  console.log(`Nome: ${n}, índice ${i}`);
});

//objetos
// método antigo

let celular = function () {
  // let cor = 'prata';
  this.cor = 'prata';

  // function ligar() {}
  this.ligar = function () {
    console.log('uma ligação');
    return 'ligando';
  };
};

let objeto = new celular();
console.log(objeto);

console.log(objeto.ligar());

//novo método
class celular2 {
  constructor() {
    this.cor = 'preto';
  }
  ligar() {}
}

let obj2 = new celular2();
console.log(obj2);
