const pasteis = [
    {
        id: 0,
        nome: 'Pastel de carne',
        img: 'imagens/pasteis/Pastel-de-Carne.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
    {
        id: 1,
        nome: 'Pastel de frango',
        img: 'imagens/pasteis/pastel-frango.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
    {
        id: 2,
        nome: 'Pastel de presunto e queijo',
        img: 'imagens/pasteis/pastel-presunto-queijo.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
]

inicializarProdutos = () => {
    var conteinerProdutos = document.getElementById('pasteis');
    pasteis.forEach((val) => {
        conteinerProdutos.innerHTML += `
            
            <div class="produto-single-past" data-key=${val.id} />
            <span class="quantidade">${val.quantidade}</span>
            <img src="${val.img}"/>
            <p>${val.nome}</p>
            <p>${val.valor}</p>
            
            </div>
            `
        const savedQuantidade = localStorage.getItem(`quantidade_${val.id}`);
        if (savedQuantidade) {
            val.quantidade = parseInt(savedQuantidade);
            const quantidadeElement = conteinerProdutos.querySelector(`[data-key="${val.id}"] .quantidade`);
            if (quantidadeElement) {
                quantidadeElement.textContent = savedQuantidade;
                quantidadeElement.style.visibility = savedQuantidade > 0 ? 'visible' : 'hidden';
            }
        }

    });
};

inicializarProdutos();

var linksPasteis = document.querySelectorAll('.produto-single-past')

linksPasteis.forEach((link) => {
    link.addEventListener('click', () => {
        const key = link.getAttribute('data-key');
        pasteis[key].quantidade++;

        const quantidadeElement = link.querySelector('.quantidade');
        if (quantidadeElement) {
            quantidadeElement.textContent = pasteis[key].quantidade;
            quantidadeElement.style.visibility = pasteis[key].quantidade > 0 ? 'visible' : 'hidden';
        }
        localStorage.setItem(`quantidade_${key}`, pasteis[key].quantidade);
        return false;
    });
});

