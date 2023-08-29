
function adicionarItensPedido() {

    const pedido = document.getElementById('pedido');

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith('quantidade_bebidas_')) {
            const id = chave.replace('quantidade_bebidas_', '');
            const quantidade = parseInt(localStorage.getItem(chave));

            if (quantidade > 0) {

                const nomeBebida = localStorage.getItem(`nome_bebidas_${id}`);
                const imgBebida = localStorage.getItem(`img_bebidas_${id}`);

                const valorBebida = localStorage.getItem(`valor_bebidas_${id}`);
                const valorBebidaNumero = parseFloat(valorBebida.replace('R$ ', '').replace(',', '.'));
                
                const valorTotal = valorBebidaNumero * quantidade;

                const itemPedido = document.createElement('div');
                itemPedido.innerHTML = `
                
        <p><img src=${imgBebida} width="50px">  ${nomeBebida} QTD ${quantidade}    Total R$ ${valorTotal.toFixed(2)} <p>  
    
    `;
                pedido.appendChild(itemPedido);
            }
        }
    }
}
adicionarItensPedido()