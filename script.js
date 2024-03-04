const numeroEntrada = document.getElementById('numeroEntrada');
const mensaje = document.getElementById('mensaje');
const numero = document.getElementById('numero');

const numeroAleatorio = Math.trunc(Math.random() * 100) + 1;
// numero.textContent = numeroAleatorio;


function comprobarNumero() {
  if (numeroEntrada.value == numeroAleatorio) {
    mensaje.textContent = 'FELICIDADES, ACERTASTE EL NÚMERO';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
  } else if (numeroEntrada.value < 1 || numeroEntrada.value > 100) {
    mensaje.textContent = 'EL NÚMERO DEBE SER ENTRE 1 Y 100';
    mensaje.style.color = 'blue';
    numeroEntrada.value = '';
    numeroEntrada.focus();
  } else if (numeroEntrada.value > numeroAleatorio) {
    mensaje.textContent = 'El número es menor al escrito por usted';
    mensaje.style.color = 'purple';
    numeroEntrada.value = '';
    numeroEntrada.focus();
  } else if (numeroEntrada.value < numeroAleatorio) {
    mensaje.textContent = 'El número es mayor al escrito por usted';
    mensaje.style.color = 'grey';
    numeroEntrada.value = '';
    numeroEntrada.focus();
  }
}