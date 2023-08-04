const items = [
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

    inicializarCardapio = ()=>{
        var conteinerProdutos = document.getElementById('pasteis');
        items.forEach((val)=>{
            conteinerProdutos.innerHTML +=`
            
            <div class="produto-single">
            <img src="${val.img}"/>
            <p>${val.nome}</p>
            <p>${val.valor}</p>
            <a key="${val.id}" href="#">Adiocionar ao pedido</a>

            </div>
            `
            ;
            
        });

    };

inicializarCardapio();

        atualizarPedido = () => {
            console.log(items);
        }
        const links = document.querySelectorAll('a')

        links.forEach((link)=>{
            link.addEventListener('click',()=>{
                const key = link.getAttribute('key');
                items[key].quantidade++;
                atualizarPedido();
                return false;
            
            
            });
        });
           