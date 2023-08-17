const bebidas = [
    {
        id: 0,
        nome: 'Coca Cola lata 300ml',
        img: 'imagens/bebidas/coca_lt300.jpg',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
    {
        id: 1,
        nome: 'Coca cola zero lata 300ml',
        img: 'imagens/bebidas/coca0_lt300.jpg',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
    {
        id: 2,
        nome: 'Guaraná lata 300ml',
        img: 'imagens/bebidas/guarana_lt300.jpg',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
]

inicializarBebidas = () => {
    var conteinerProdutos = document.getElementById('bebidas');
    bebidas.forEach((val) => {
        conteinerProdutos.innerHTML += `
                        
                <div class="produto-single-bbd" data-key=${val.id}>
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


inicializarBebidas();



var linksBebidas = document.querySelectorAll('.produto-single-bbd')

linksBebidas.forEach((link) => {
    link.addEventListener('click', () => {
        const key = link.getAttribute('data-key');
        bebidas[key].quantidade++;


        const quantidadeElement = link.querySelector('.quantidade');
        if (quantidadeElement) {
            quantidadeElement.textContent = bebidas[key].quantidade;
            quantidadeElement.style.visibility = bebidas[key].quantidade > 0 ? 'visible' : 'hidden';

        }
        localStorage.setItem(`quantidade_${key}`, bebidas[key].quantidade);
        return false;
    });
});

