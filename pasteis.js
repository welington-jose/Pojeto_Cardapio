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
        nome: 'Patel de frango',
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
    {
        id: 3,
        nome: 'Pastel de carne',
        img: 'imagens/pasteis/Pastel-de-Carne.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
    {
        id: 4,
        nome: 'Patel de frango',
        img: 'imagens/pasteis/pastel-frango.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
    {
        id: 5,
        nome: 'Pastel de presunto e queijo',
        img: 'imagens/pasteis/pastel-presunto-queijo.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
    {
        id: 6,
        nome: 'Pastel de carne',
        img: 'imagens/pasteis/Pastel-de-Carne.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
    {
        id: 7,
        nome: 'Patel de frango',
        img: 'imagens/pasteis/pastel-frango.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
    {
        id: 8,
        nome: 'Pastel de presunto e queijo',
        img: 'imagens/pasteis/pastel-presunto-queijo.jpg',
        quantidade: 0,
        valor: 'R$ 6,00',

    },
];

inicializarPasteis = () => {


    var conteinerProdutos = document.getElementById('pasteis');
    pasteis.forEach((val) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto-single-past');

        const produtoContent = `
            <div class="clicavel-past" data-key=${val.id}>
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

        const savedQuantidade = localStorage.getItem(`quantidade_pasteis_${val.id}`);

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

inicializarPasteis();


document.querySelectorAll('.clicavel-past').forEach((link) => {
    link.addEventListener('click', () => {
        const key = link.getAttribute('data-key');
        pasteis[key].quantidade++;

        const quantidadeElement = link.querySelector('.quantidade');
        if (quantidadeElement) {
            quantidadeElement.textContent = pasteis[key].quantidade;
            quantidadeElement.style.visibility = 'visible';
        }

        const diminuirBotao = link.parentElement.querySelector('.diminuir-qtd');
        if (diminuirBotao) {
            diminuirBotao.style.visibility = 'visible';
        }

        localStorage.setItem(`quantidade_pasteis_${key}`, pasteis[key].quantidade);
        localStorage.setItem(`valor_pasteis_${key}`, pasteis[key].valor);
        localStorage.setItem(`nome_pasteis_${key}`, pasteis[key].nome);
        localStorage.setItem(`img_pasteis_${key}`, pasteis[key].img);

        return false;
    });
});

const diminuirBotao = document.querySelectorAll('.diminuir-qtd');
diminuirBotao.forEach((botao) => {
    botao.addEventListener('click', () => {
        const key = botao.getAttribute('data-key');
        pasteis[key].quantidade--;

        const quantidadeElement = botao.parentElement.querySelector('.quantidade');
        const botaoDiminuir = botao.parentElement.querySelector('.diminuir-qtd');

        if (pasteis[key].quantidade > 0) {
            botaoDiminuir.style.visibility = 'visible';
        } else {
            botaoDiminuir.style.visibility = 'hidden';
        }

        if (quantidadeElement) {
            quantidadeElement.textContent = pasteis[key].quantidade;
            quantidadeElement.style.visibility = pasteis[key].quantidade > 0 ? 'visible' : 'hidden';
        }

        localStorage.setItem(`quantidade_pasteis_${key}`, pasteis[key].quantidade);
        localStorage.setItem(`valor_pasteis_${key}`, pasteis[key].valor);
        localStorage.setItem(`nome_pasteis_${key}`, pasteis[key].nome);
        localStorage.setItem(`img_pasteis_${key}`, pasteis[key].img);

    });
});
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", ()=>
nav.classList.toggle("active"));
