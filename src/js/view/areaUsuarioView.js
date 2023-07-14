const detalhePedidos = document.getElementById('detalhePedidos');
const btnAtualizar = document.getElementById('btn-atualizar');
const btnRecebido = document.getElementById('btn-recebido');

let filaPedidos = JSON.parse(localStorage.getItem('filaPedidos')) || [];

function salvarFilaPedidos() {
  localStorage.setItem('filaPedidos', JSON.stringify(filaPedidos));
}

export function adicionarPedido(pedido, valor, entrega, tamanho) {
  filaPedidos.push({ pedido, valor, entrega, tamanho });
  salvarFilaPedidos();
}

function removerPedido() {
  if (filaPedidos.length > 0) {
    filaPedidos.shift();
    atualizarDetalhePedidos();
    salvarFilaPedidos();
  }
}

function atualizarDetalhePedidos() {
  detalhePedidos.innerHTML = '';

  for (const pedido of filaPedidos) {
    const pedidoElement = document.createElement('div');
    pedidoElement.classList.add('item-pedido');
    pedidoElement.innerHTML = `
      <span>${pedido.pedido}</span>
      <span>${pedido.valor}</span>
      <span>${pedido.entrega}</span>
    `;
    detalhePedidos.appendChild(pedidoElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  atualizarDetalhePedidos();

  btnRecebido.addEventListener('click', event => {
    event.preventDefault();
    Swal.fire('O pedido foi recebido.');
    removerPedido();
  });

  btnAtualizar.addEventListener('click', event => {
    event.preventDefault();
    atualizarDetalhePedidos();
  });
});
