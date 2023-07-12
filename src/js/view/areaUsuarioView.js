// Obtém a fila de pedidos do localStorage ou cria uma nova fila vazia
const filaPedidos = JSON.parse(localStorage.getItem('filaPedidos')) || [];

// Função para salvar a fila de pedidos no localStorage
function salvarFilaPedidos() {
  localStorage.setItem('filaPedidos', JSON.stringify(filaPedidos));
}

// Função para adicionar um novo pedido à fila
function adicionarPedido(pedido, valor, entrega) {
  filaPedidos.push({ pedido, valor, entrega });
  atualizarDetalhePedidos();
  salvarFilaPedidos();
}

// Função para remover o primeiro pedido da fila
function removerPedido() {
  if (filaPedidos.length > 0) {
    filaPedidos.shift();
    atualizarDetalhePedidos();
    salvarFilaPedidos();
  }
}

// Função para atualizar o conteúdo do elemento detalhePedidos
function atualizarDetalhePedidos() {
  detalhePedidos.innerHTML = '';

  for (const pedido of filaPedidos) {
    const pedidoElement = document.createElement('div');
    pedidoElement.classList.add('pedido');
    pedidoElement.innerHTML = `
      <span>${pedido.pedido}</span>
      <span>${pedido.valor}</span>
      <span>${pedido.entrega}</span>
    `;
    detalhePedidos.appendChild(pedidoElement);
  }
}

// Adicionar evento de clique ao botão "Adicionar Pedido"
btnPedido.addEventListener('click', function () {
  const novoPedido = '120';
  const valorPedido = 'R$59,90';
  const previsaoEntrega = '01/08/2023';

  adicionarPedido(novoPedido, valorPedido, previsaoEntrega);
});

// Adicionar evento de clique ao botão "Pedido Recebido"
detalhePedidos.addEventListener('click', function (event) {
  const pedidoRecebido = event.target.closest('.pedido');
  if (pedidoRecebido) {
    pedidoRecebido.remove();
    salvarFilaPedidos();
  }
});
