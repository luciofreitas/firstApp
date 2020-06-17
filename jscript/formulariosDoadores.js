window.addEventListener('load', start);

var btnSubmit = document.querySelector('#divButton');

function start() {

}
function preventSubmit(event) {
  event.preventDefault();
  var form = document.querySelector('#cont-form');
  btnSubmit.addEventListener('submit', preventSubmit);
  alert(form.value + ' Cadastrado com Sucesso');
}

function mascara(i, t) {
  var v = i.value;
  if (isNaN(v[v.length - 1])) {
    i.value = v.substring(0, v.length - 1);
    return;
  }
  if (t == 'data') {
    i.setAttribute('maxlength', '10');
    if (v.length == 2 || v.length == 5) i.value += '/';
  }
  if (t == 'CPF') {
    i.setAttribute('maxlength', '14');
    if (v.length == 3 || v.length == 7) i.value += '.';
    if (v.length == 11) i.value += '-';
    if (t.length < 6 || t.length < 3) t.innerHTML = 'BACKSPACE';//não funciona
  }

}
selectPaises.onchange = function () {
  const selectPaises = document.querySelector('#selectPaises');
  const selectEstado = document.querySelector('#selectEstado');
  const estrangeiro = document.querySelector('#estrangeiro');
  console.log(selectPaises.value);
  selectPaises.value === 'Brasil' ? estrangeiro.disabled = true : estrangeiro.disabled = false;
  selectPaises.value === 'Brasil' ? selectEstado.value = 'Selecionar' : selectEstado.value = 'EX';
  selectPaises.value === 'Brasil' ? selectEstado.disabled = false : selectEstado.disabled = "true";
}




