
function adicionarItensPedido() {

    const pedido = document.getElementById('pedido');
    pedido.innerHTML = '';

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
                
        <p class="pd_bebidas"><img src=${imgBebida} width="50px">  ${nomeBebida} <input type="number" value="${quantidade}" min="0">     <span class="totais"> Total R$ ${valorTotal.toFixed(2)}</span> </p>  <hr>
    
    `;
                pedido.appendChild(itemPedido);
               

                // Adicione um ouvinte de evento ao input para atualizar o localStorage
                const inputQuantidade = itemPedido.querySelector('input[type="number"]');
                inputQuantidade.addEventListener('input', () => {
                    const newQuantity = parseInt(inputQuantidade.value);
                    localStorage.setItem(chave, newQuantity); // Atualiza a quantidade no localStorage
                    adicionarItensPedido(); // Recria a lista de itens no pedido
                });
            }
        };

        if (chave.startsWith('quantidade_pasteis_')) {
            const id = chave.replace('quantidade_pasteis_', '');
            const quantidade = parseInt(localStorage.getItem(chave));

            if (quantidade > 0) {

                const nomePasteis = localStorage.getItem(`nome_pasteis_${id}`);
                const imgPasteis = localStorage.getItem(`img_pasteis_${id}`);

                const valorPasteis = localStorage.getItem(`valor_pasteis_${id}`);
                const valorPasteisNumero = parseFloat(valorPasteis.replace('R$ ', '').replace(',', '.'));
                
                const valorTotal = valorPasteisNumero * quantidade;

                const itemPedido = document.createElement('div');
                itemPedido.innerHTML = `
                
        <p class="pd_pasteis"><img src=${imgPasteis} width="50px">  ${nomePasteis} <input type="number" value="${quantidade}" min="0">   <span class="totais"> Total R$ ${valorTotal.toFixed(2)} </span></p>  <hr>
    
    `;
                pedido.appendChild(itemPedido);

                 // Adicione um ouvinte de evento ao input para atualizar o localStorage
                 const inputQuantidade = itemPedido.querySelector('input[type="number"]');
                 inputQuantidade.addEventListener('input', () => {
                     const newQuantity = parseInt(inputQuantidade.value);
                     localStorage.setItem(chave, newQuantity); // Atualiza a quantidade no localStorage
                     adicionarItensPedido(); // Recria a lista de itens no pedido
                 });
            }
        }
    }
}
adicionarItensPedido()

