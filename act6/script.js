const estados = [
  { clase: 'rojo', texto: 'Alto' },
  { clase: 'amarillo', texto: 'Precaución' },
  { clase: 'verde', texto: 'Avanza' }
];

let indice = 0;

function cambiarEstado() {
  // Avanza al siguiente estado cíclicamente
  indice = (indice + 1) % estados.length;

  // Elementos
  const luz = document.getElementById('luz');
  const estadoTexto = document.getElementById('estado');

  // Eliminar clases anteriores
  luz.classList.remove('rojo', 'amarillo', 'verde');

  // Añadir nueva clase y texto
  luz.classList.add(estados[indice].clase);
  estadoTexto.textContent = estados[indice].texto;
}
