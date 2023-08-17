document.addEventListener('DOMContentLoaded', function () {
    // Função para mostrar os itens do carrinho no pedido
    const mostrarItensCarrinho = () => {
        const conteinerPedido = document.getElementById('pedido');
        conteinerPedido.innerHTML = ''; // Limpa o conteúdo anterior

        // Recupera os dados do localStorage e exibe no pedido
        bebidas.forEach((bebida) => {
            const quantidade = parseInt(localStorage.getItem(`quantidade_${bebida.id}`));
            if (quantidade > 0) {
                conteinerPedido.innerHTML += `
                    <div class="item-carrinho">
                        <p>${bebida.nome}</p>
                        <p>Quantidade: ${quantidade}</p>
                    </div>
                `;
            }
        });

        pasteis.forEach((pastel) => {
            const quantidade = parseInt(localStorage.getItem(`quantidade_${pastel.id}`));
            if (quantidade > 0) {
                conteinerPedido.innerHTML += `
                    <div class="item-carrinho">
                        <p>${pastel.nome}</p>
                        <p>Quantidade: ${quantidade}</p>
                    </div>
                `;
            }
        });
    };

    // Chama a função para mostrar os itens do carrinho
    mostrarItensCarrinho();
});
