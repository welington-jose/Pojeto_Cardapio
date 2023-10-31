function adicionarItensPedido() {
    const pedido = document.getElementById('pedido');
    pedido.innerHTML = ''; // Limpar a exibição do pedido
    

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith('quantidade_bebidas_')) {
            const id = chave.replace('quantidade_bebidas_', '');
            const quantidade = parseInt(localStorage.getItem(chave));

            if (quantidade > 0) {
                // Recuperar detalhes da bebida
                const nomeBebida = localStorage.getItem(`nome_bebidas_${id}`);
                const imgBebida = localStorage.getItem(`img_bebidas_${id}`);
                const valorBebida = localStorage.getItem(`valor_bebidas_${id}`);
                const valorBebidaNumero = parseFloat(valorBebida.replace('R$ ', '').replace(',', '.'));
                const valorTotal = valorBebidaNumero * quantidade;

                const itemPedido = document.createElement('div'); // Criar um novo elemento de item
                itemPedido.innerHTML = `
                    <div class="pd_bebidas">
                        <p class="img_pd"><img src=${imgBebida} width="50px"></p>
                        <p class "nome_pd">${nomeBebida}</p>
                        <p class="qtd_pd"><input type="number" value="${quantidade}" min="0"></p>
                        <p class="totais"> Total R$ ${valorTotal.toFixed(2)} </p>
                    </div>
                    <hr>
                `;
                pedido.appendChild(itemPedido); // Adicionar o item à exibição do pedido

                // Adicionar um ouvinte de evento ao campo de entrada de quantidade
                const inputQuantidade = itemPedido.querySelector('input[type="number"]');
                inputQuantidade.addEventListener('input', () => {
                    const novaQuantidade = parseInt(inputQuantidade.value);
                    if (novaQuantidade <= 0) {
                        localStorage.removeItem(chave);
                        itemPedido.style.display = 'none'; // Ocultar o item no pedido
                    }
                    localStorage.setItem(chave, novaQuantidade); // Atualizar a quantidade no armazenamento local
                    somarPedido(); // Recriar a lista de itens no pedido
                });
            }
        }

        if (chave.startsWith('quantidade_pasteis_')) {
            const id = chave.replace('quantidade_pasteis_', '');
            const quantidade = parseInt(localStorage.getItem(chave));

            if (quantidade > 0) {
                // Recuperar detalhes do pastel
                const nomePasteis = localStorage.getItem(`nome_pasteis_${id}`);
                const imgPasteis = localStorage.getItem(`img_pasteis_${id}`);
                const valorPasteis = localStorage.getItem(`valor_pasteis_${id}`);
                const valorPasteisNumero = parseFloat(valorPasteis.replace('R$ ', '').replace(',', '.'));
                const valorTotal = valorPasteisNumero * quantidade;

                const itemPedido = document.createElement('div'); // Criar um novo elemento de item
                itemPedido.innerHTML = `
                    <div class="pd_pasteis">
                        <p class="img_pd"><img src=${imgPasteis} width="50px"></p>
                        <p class="nome_pd">${nomePasteis}</p>
                        <p class="qtd_pd"><input type="number" value="${quantidade}" min="0"></p>
                        <p class="totais"> Total R$ ${valorTotal.toFixed(2)} </p>
                    </div>
                    <hr>
                `;
                pedido.appendChild(itemPedido); // Adicionar o item à exibição do pedido

                // Adicionar um ouvinte de evento ao campo de entrada de quantidade
                const inputQuantidade = itemPedido.querySelector('input[type="number"]');
                inputQuantidade.addEventListener('input', () => {
                    const novaQuantidade = parseInt(inputQuantidade.value);
                    if (novaQuantidade <= 0) {
                        localStorage.removeItem(chave);
                        itemPedido.style.display = 'none'; // Ocultar o item no pedido
                    }
                    localStorage.setItem(chave, novaQuantidade); // Atualizar a quantidade no armazenamento local
                    somarPedido(); // Recriar a lista de itens no pedido
                });
            }
        }
    }
    somarPedido(); // Atualizar o valor total do pedido
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

    const somaTotal = document.getElementById('somaTotal');
    if (somaTotal) {
        somaTotal.innerHTML = `R$ ${totalPedido.toFixed(2)}`;
        somaTotal.style.display = totalPedido < 1 ? 'none' : 'block';

    }
}

adicionarItensPedido(); // Adicionar itens ao pedido
somarPedido(); // Calcular o valor total do pedido inicial

// Adicionar ouvintes de evento aos campos de entrada de quantidade
const inputsQuantidade = document.querySelectorAll('input[type="number"]');
inputsQuantidade.forEach((input) => {
    input.addEventListener('input', somarPedido); // Recalcular o valor total do pedido quando o input é alterado
});
