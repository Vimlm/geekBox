import { boxP, boxM, boxG } from "../view/produtosView.js";
import { adicionarPedido } from "../view/areaUsuarioView.js";

boxP.addEventListener('click', event => {
  event.preventDefault();
  Swal.fire('Caixa P adicionada com sucesso.');
  const tamanhoCaixa = 'P';
  adicionarPedido('Pedido P', 'R$59,90', '01/08/2023', tamanhoCaixa);
});

boxM.addEventListener('click', event => {
  event.preventDefault();
  Swal.fire('Caixa M adicionada com sucesso.');
  const tamanhoCaixa = 'M';
  adicionarPedido('Pedido M', 'R$99,00', '01/08/2023', tamanhoCaixa);
});

boxG.addEventListener('click', event => {
  event.preventDefault();
  Swal.fire('Caixa G adicionada com sucesso.');
  const tamanhoCaixa = 'G';
  adicionarPedido('Pedido G', 'R$159,00', '01/08/2023', tamanhoCaixa);
});
