var resultado = '';
var valor1 = '';
var valor2 = '';
var operacao = '';
var calculoExecutado = false;

var edtResultado = document.querySelector('#edtResultado');

var button1 = document.querySelector('#button1');
button1.addEventListener('click', handleButtonValor);
var button2 = document.querySelector('#button2');
button2.addEventListener('click', handleButtonValor);
var button3 = document.querySelector('#button3');
button3.addEventListener('click', handleButtonValor);
var button4 = document.querySelector('#button4');
button4.addEventListener('click', handleButtonValor);
var button5 = document.querySelector('#button5');
button5.addEventListener('click', handleButtonValor);
var button6 = document.querySelector('#button6');
button6.addEventListener('click', handleButtonValor);
var button7 = document.querySelector('#button7');
button7.addEventListener('click', handleButtonValor);
var button8 = document.querySelector('#button8');
button8.addEventListener('click', handleButtonValor);
var button9 = document.querySelector('#button9');
button9.addEventListener('click', handleButtonValor);
var button0 = document.querySelector('#button0');
button0.addEventListener('click', handleButtonValor);
var buttonPonto = document.querySelector('#buttonPonto');
buttonPonto.addEventListener('click', handleButtonValor);

var buttonSoma = document.querySelector('#buttonSoma');
buttonSoma.addEventListener('click', handleOperacao);
var buttonSubtracao = document.querySelector('#buttonSubtracao');
buttonSubtracao.addEventListener('click', handleOperacao);
var buttonMultiplicacao = document.querySelector('#buttonMultiplicacao');
buttonMultiplicacao.addEventListener('click', handleOperacao);
var buttonDivisao = document.querySelector('#buttonDivisao');
buttonDivisao.addEventListener('click', handleOperacao);

var buttonIgual = document.querySelector('#buttonIgual');
buttonIgual.addEventListener('click', handleExecutaCalculo);
var buttonLimpar = document.querySelector('#buttonLimpar');
buttonLimpar.addEventListener('click', handleLimpar);

function handleLimpar() {
  resultado = '';
  valor1 = '';
  valor2 = '';
  operacao = '';
  calculoExecutado = false;
  edtResultado.value = '';
}

function insereValor(numero) {
  if (calculoExecutado) {
    valor1 = '';
    valor2 = '';
    operacao = '';
    resultado = '';
    edtResultado.value = '';
    calculoExecutado = false;
  }
  if (!calculoExecutado) {
    if (operacao === '') {
      valor1 = valor1.toString() + numero.toString();
    } else {
      valor2 = valor2.toString() + numero.toString();
    }
    resultado = resultado.toString() + numero.toString();
    edtResultado.value = resultado;
  }
}

function insereOperacao(valor) {
  if (operacao !== '') {
    alert(
      'Digite o segundo número clique no botão de igualdade para realizar o cálculo.'
    );
    return false;
  }
  if (calculoExecutado) {
    valor1 = edtResultado.value.toString();
    valor2 = '';
    resultado = valor1;
    calculoExecutado = false;
  }
  operacao = valor.target.value;
  resultado = resultado + ' ' + operacao + ' ';
  edtResultado.value = resultado;
}

function executaCalculo() {
  if (operacao === '+') {
    result = Number(valor1) + Number(valor2);
  }
  if (operacao === '-') {
    result = Number(valor1) - Number(valor2);
  }
  if (operacao === '*') {
    result = Number(valor1) * Number(valor2);
  }
  if (operacao === '/') {
    result = Number(valor1) / Number(valor2);
  }
  operacao = '';
  calculoExecutado = true;
  edtResultado.value = result;
}

function handleButtonValor(event) {
  insereValor(event.target.value);
}

function handleOperacao(event) {
  insereOperacao(event);
}

function handleExecutaCalculo() {
  executaCalculo();
}
