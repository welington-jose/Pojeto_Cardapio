
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
                
                <div class="pd_bebidas">
                <p class="img_pd"><img src=${imgBebida} width="50px"></p>
                <p class="nome_pd">${nomeBebida}</p>
                <p class="qtd_pd"><input type="number" value="${quantidade}" min="0"></p> 
                <p class="totais"> Total R$ ${valorTotal.toFixed(2)} </p>
                </div>  <hr>
    
    `;
                pedido.appendChild(itemPedido);


                // Adicione um ouvinte de evento ao input para atualizar o localStorage
                const inputQuantidade = itemPedido.querySelector('input[type="number"]');
                inputQuantidade.addEventListener('input', () => {
                    const newQuantity = parseInt(inputQuantidade.value);
                    localStorage.setItem(chave, newQuantity); // Atualiza a quantidade no localStorage
                    somar(); // Recria a lista de itens no pedido
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
                
        <div class="pd_pasteis">
        <p class="img_pd"><img src=${imgPasteis} width="50px"></p>
        <p class="nome_pd">${nomePasteis}</p>
        <p class="qtd_pd"><input type="number" value="${quantidade}" min="0"></p> 
        <p class="totais"> Total R$ ${valorTotal.toFixed(2)} </p>
        </div>  <hr>

    `;
                pedido.appendChild(itemPedido);

                // Adicione um ouvinte de evento ao input para atualizar o localStorage
                const inputQuantidade = itemPedido.querySelector('input[type="number"]');
                inputQuantidade.addEventListener('input', () => {
                    const newQuantity = parseInt(inputQuantidade.value);
                    localStorage.setItem(chave, newQuantity); // Atualiza a quantidade no localStorage
                    somarPedido(); 
                });
            }
            
        }
    }
}
function somarPedido() {
    let totalPedido = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith('quantidade_bebidas_')) {
            const id = chave.replace('quantidade_bebidas_', '');
            const quantidade = parseInt(localStorage.getItem(chave));
            const valorBebida = localStorage.getItem(`valor_bebidas_${id}`);

            if (valorBebida && !isNaN(quantidade)) {
                const valorBebidaNumero = parseFloat(valorBebida.replace('R$ ', '').replace(',', '.'));
                if (!isNaN(valorBebidaNumero)) {
                    totalPedido += quantidade * valorBebidaNumero;
                }
            }
        } else if (chave.startsWith('quantidade_pasteis_')) {
            if (chave.startsWith('quantidade_pasteis_')) {
                const id = chave.replace('quantidade_pasteis_', '');
                const quantidade = parseInt(localStorage.getItem(chave));
                const valorPasteis = localStorage.getItem(`valor_pasteis_${id}`);
    
                if (valorPasteis && !isNaN(quantidade)) {
                    const valorPasteisNumero = parseFloat(valorPasteis.replace('R$ ', '').replace(',', '.'));
                    if (!isNaN(valorPasteisNumero)) {
                        totalPedido += quantidade * valorPasteisNumero;
                    }
                }
            }
        }
    }

    const somaTotal = document.getElementById('somaTotal');
    somaTotal.innerHTML = `R$ ${totalPedido.toFixed(2)}`;
}

adicionarItensPedido();
somarPedido();

// Adicione o ouvinte de eventos para campos de quantidade
const inputsQuantidade = document.querySelectorAll('input[type="number"]');
inputsQuantidade.forEach((input) => {
    input.addEventListener('input', somarPedido);
});
