const bebidas = [
    {
        id: 0,
        nome: 'Coca Cola lata 300ml',
        img: 'imagens/bebidas/coca_lt300.png',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
    {
        id: 1,
        nome: 'Guaraná lata 300ml',
        img: 'imagens/bebidas/guarana_lt300.png',
        quantidade: 0,
        valor: "R$ 4,00",

    },
    {
        id: 2,
        nome: 'Coca cola zero lata 300ml',
        img: 'imagens/bebidas/coca0_lt300.png',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
    {
        id: 3,
        nome: 'Coca Cola lata 300ml',
        img: 'imagens/bebidas/coca_lt300.png',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
    {
        id: 4,
        nome: 'Coca cola zero lata 300ml',
        img: 'imagens/bebidas/coca0_lt300.png',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
    {
        id: 5,
        nome: 'Guaraná lata 300ml',
        img: 'imagens/bebidas/guarana_lt300.png',
        quantidade: 0,
        valor: "R$ 4,00",

    },
    {
        id: 6,
        nome: 'Coca Cola lata 300ml',
        img: 'imagens/bebidas/coca_lt300.png',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
    {
        id: 7,
        nome: 'Coca cola zero lata 300ml',
        img: 'imagens/bebidas/coca0_lt300.png',
        quantidade: 0,
        valor: 'R$ 4,00',

    },
    {
        id: 8,
        nome: 'Guaraná lata 300ml',
        img: 'imagens/bebidas/guarana_lt300.png',
        quantidade: 0,
        valor: "R$ 4,00",

    },
   
   
];

inicializarBebidas = () => {


    var conteinerProdutos = document.getElementById('bebidas');
    bebidas.forEach((val) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto-single-bbd');

        const produtoContent = `
            <div class="clicavel-bbd" data-key=${val.id}>
                <span class="quantidade">${val.quantidade}</span>
                <img src="${val.img}"/>
                <p>${val.nome}</p>
                <p class="valor">${val.valor}</p>
            </div>
            <button class="diminuir-qtd" data-key=${val.id}>-</button>
        `;

        produtoDiv.innerHTML = produtoContent;
        conteinerProdutos.appendChild(produtoDiv);

        const diminuirBotao = produtoDiv.querySelector('.diminuir-qtd');
        if (diminuirBotao) {
            diminuirBotao.style.visibility = val.quantidade > 0 ? 'visible' : 'hidden';
        }


        const savedQuantidade = localStorage.getItem(`quantidade_bebidas_${val.id}`);
        if (savedQuantidade) {
            const quantidade = parseInt(savedQuantidade);
            if (!isNaN(quantidade)) {
                val.quantidade = quantidade;
            }


            const quantidadeElement = produtoDiv.querySelector('.quantidade');
            if (quantidadeElement) {
                quantidadeElement.textContent = savedQuantidade;
                quantidadeElement.style.visibility = savedQuantidade > 0 ? 'visible' : 'hidden';
            }

            
           
        }

    });
};

inicializarBebidas();


document.querySelectorAll('.clicavel-bbd').forEach((link) => {
    link.addEventListener('click', () => {
        const key = link.getAttribute('data-key');
        bebidas[key].quantidade++;

          const quantidadeElement = link.querySelector('.quantidade');
        if (quantidadeElement) {
            quantidadeElement.textContent = bebidas[key].quantidade;
            quantidadeElement.style.visibility = 'visible';
        }
        

        const diminuirBotao = link.parentElement.querySelector('.diminuir-qtd');
        if (diminuirBotao) {
            diminuirBotao.style.visibility = 'visible';
        }

        localStorage.setItem(`quantidade_bebidas_${key}`, bebidas[key].quantidade);
        localStorage.setItem(`valor_bebidas_${key}`, bebidas[key].valor);
        localStorage.setItem(`nome_bebidas_${key}`, bebidas[key].nome);
        localStorage.setItem(`img_bebidas_${key}`, bebidas[key].img);


        return false;
    });
});

const diminuirBotao = document.querySelectorAll('.diminuir-qtd');
diminuirBotao.forEach((botao) => {
    botao.addEventListener('click', () => {
        const key = botao.getAttribute('data-key');
        bebidas[key].quantidade--;

        const quantidadeElement = botao.parentElement.querySelector('.quantidade');
        const botaoDiminuir = botao.parentElement.querySelector('.diminuir-qtd');

        if (bebidas[key].quantidade > 0) {
            botaoDiminuir.style.visibility = 'visible';
        } else {
            botaoDiminuir.style.visibility = 'hidden';
        
        }

        if (quantidadeElement) {
            quantidadeElement.textContent = bebidas[key].quantidade;
            quantidadeElement.style.visibility = bebidas[key].quantidade > 0 ? 'visible' : 'hidden';
        }

        localStorage.setItem(`quantidade_bebidas_${key}`, bebidas[key].quantidade);
        localStorage.setItem(`valor_bebidas_${key}`, bebidas[key].valor);
        localStorage.setItem(`nome_bebidas_${key}`, bebidas[key].nome);
        localStorage.setItem(`img_bebidas_${key}`, bebidas[key].img);

    });
});
