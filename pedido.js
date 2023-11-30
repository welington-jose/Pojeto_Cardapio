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
                const valorTotalFormatado = valorTotal.toFixed(2).replace(/\./, ',');

                const itemPedido = document.createElement('div'); // Criar um novo elemento de item
                itemPedido.innerHTML = `
                    <div class="pd_bebidas">
                        <p class="img_pd"><img src=${imgBebida} width="50px"></p>
                        <p class="nome_pd">${nomeBebida}</p>
                        <div class="qtd_pd">
                        <p class="diminuir"><input type="button" value="-"></p>
                        <p class="qtd"><input type="text" value="${quantidade}" min="1"></p>
                            <p class="aumentar"><input type="button" value="+"></p>
                        </div>
                        <p class="totais"> Total R$ ${valorTotalFormatado} </p>
                    </div>
                    <hr>
                `;
                pedido.appendChild(itemPedido); // Adicionar o item à exibição do pedido

                // Adicionar um ouvinte de evento ao campo de entrada de quantidade
                const inputQuantidade = itemPedido.querySelector('input[type="text"]');
                const aumentar = itemPedido.querySelector('.aumentar');
                const diminuir = itemPedido.querySelector('.diminuir');

                aumentar.addEventListener('click', () => {
                    let novaQuantidade = parseInt(inputQuantidade.value) + 1;
                    inputQuantidade.value = novaQuantidade;
                    localStorage.setItem(chave, novaQuantidade);
                    adicionarItensPedido();
                    somarPedido();
                });

                diminuir.addEventListener('click', () => {
                    let novaQuantidade = parseInt(inputQuantidade.value) - 1;
                    if (novaQuantidade < 1) {
                        novaQuantidade = 0;
                    }
                    inputQuantidade.value = novaQuantidade;
                    localStorage.setItem(chave, novaQuantidade);
                    adicionarItensPedido();
                    somarPedido();
                });

                inputQuantidade.addEventListener('input', () => {
                    const novaQuantidade = parseInt(inputQuantidade.value); //chamdo dando alterado inputQuantidade
                    if (novaQuantidade <= 0) {
                        localStorage.removeItem(chave);
                        itemPedido.style.display = 'none'; // Ocultar o item no pedido
                    }
                    localStorage.setItem(chave, novaQuantidade); // Atualizar a quantidade no armazenamento local
                    adicionarItensPedido();
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
                const valorTotalFormatado = valorTotal.toFixed(2).replace(/\./, ',');

                const itemPedido = document.createElement('div'); // Criar um novo elemento de item
                itemPedido.innerHTML = `
                    <div class="pd_pasteis">
                        <p class="img_pd"><img src=${imgPasteis} width="50px"></p>
                        <p class="nome_pd">${nomePasteis}</p>
                        <div class="qtd_pd">
                        <p class="diminuir"><input type="button" value="-"></p>
                        <p class="qtd"><input type="text" value="${quantidade}" min="1"></p>
                            <p class="aumentar"><input type="button" value="+"></p>
                            
                           
                        </div>
                        <p class="totais"> Total R$ ${valorTotalFormatado} </p>
                    </div>
                    <hr>
                `;
                pedido.appendChild(itemPedido); // Adicionar o item à exibição do pedido

                // Adicionar um ouvinte de evento ao campo de entrada de quantidade
               
                 
                const inputQuantidade = itemPedido.querySelector('input[type="text"]');

                const aumentar = itemPedido.querySelector('.aumentar');
                const diminuir = itemPedido.querySelector('.diminuir');

                aumentar.addEventListener('click', () => {
                    let novaQuantidade = parseInt(inputQuantidade.value) + 1;
                    inputQuantidade.value = novaQuantidade;
                    localStorage.setItem(chave, novaQuantidade);
                    adicionarItensPedido();
                    somarPedido();
                });

                diminuir.addEventListener('click', () => {
                    let novaQuantidade = parseInt(inputQuantidade.value) - 1;
                    if (novaQuantidade < 1) {
                        novaQuantidade = 0;
                    }
                    inputQuantidade.value = novaQuantidade;
                    localStorage.setItem(chave, novaQuantidade);
                    adicionarItensPedido();
                    somarPedido();
                });

                inputQuantidade.addEventListener('input', () => {
                    const novaQuantidade = parseInt(inputQuantidade.value);
                    
                    if (novaQuantidade <= 0) {
                        localStorage.removeItem(chave);
                        itemPedido.style.display = 'none'; // Ocultar o item no pedido
                    }
                    localStorage.setItem(chave, novaQuantidade); // Atualizar a quantidade no armazenamento local
                    adicionarItensPedido();
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
        const TotalFormatado = totalPedido.toFixed(2).replace(/\./, ',');
        somaTotal.innerHTML = `<p class="totalGeral align-right"> R$ ${TotalFormatado}</p>`;
        somaTotal.style.display = totalPedido < 1 ? 'none' : 'block';

    
    
    somaTotal.addEventListener('click', ()=>{

    var phoneNumber = '5569992701050';
       // Função para obter o texto formatado do pedido
       const mensagem = encodeURIComponent(obterTextoDoPedido());
       const whatsappLink = `https://wa.me/${phoneNumber}?text=${mensagem}`;
       window.open(whatsappLink, '_blank');
    });
}
}
    
function obterTextoDoPedido() {
    const itensPedido = document.querySelectorAll('.pd_bebidas, .pd_pasteis');
    let textoPedido = '';
    let maxNomeLength = 0;

    itensPedido.forEach(item => {
        const nomeLength = item.querySelector('.nome_pd').innerText.length;
        maxNomeLength = Math.max(maxNomeLength, nomeLength);
           
        });
        itensPedido.forEach(item => {
            const nome = item.querySelector('.nome_pd').innerText;
            const quantidade = item.querySelector('.qtd input').value;
            const total = item.querySelector('.totais').textContent;
    
            const espacos = '..'.repeat(maxNomeLength - nome.length + 9);
            textoPedido += `${quantidade} ${nome}${espacos}${total}\n`;
        });
        const totalGeral = document.querySelector('.totalGeral');
        if (totalGeral) {
            const totalPedido = totalGeral.innerText;
            textoPedido += `\nTotal Pedido - ${totalPedido}`;
        }
        return textoPedido.trim();
    }
    
    adicionarItensPedido();
    somarPedido();



// Adicionar ouvintes de evento aos campos de entrada de quantidade
const inputsQuantidade = document.querySelectorAll('input[type="text"]');
inputsQuantidade.forEach((input) => {
    input.addEventListener('input', somarPedido); // Recalcular o valor total do pedido quando o input é alterado
});



