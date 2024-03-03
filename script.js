const numeroEntrada = document.getElementById('numeroEntrada');
const mensaje = document.getElementById('mensaje');
const numero = document.getElementById('numero');

const numeroAleatorio = Math.trunc(Math.random() * 100);
// numero.textContent = numeroAleatorio;


function comprobarNumero() {
  if (numeroEntrada.value == numeroAleatorio) {
    mensaje.textContent = 'FELICIDADES, ACERTASTE EL NÚMERO';
    mensaje.style.color = 'green';
  } else if (numeroEntrada.value < 1 || numeroEntrada.value > 100) {
    mensaje.textContent = 'EL NÚMERO DEBE SER ENTRE 1 Y 100';
    mensaje.style.color = 'blue';
    numeroEntrada.value = '';
    numeroEntrada.focus();
  } else {
    mensaje.textContent = 'NO ES EL NÚMERO';
    mensaje.style.color = 'red';
    numeroEntrada.value = '';
    numeroEntrada.focus();
  }
}