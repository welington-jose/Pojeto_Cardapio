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

    inicializarProdutos = ()=>{
        var conteinerProdutos = document.getElementById('pasteis');
        pasteis.forEach((val)=>{
            conteinerProdutos.innerHTML +=`
            
            <div class="produto-single-past">
            <span class="quantidade">${val.quantidade}</span>
            <img src="${val.img}" data-key=${val.id} class="adicionar"/>
            <p>${val.nome}</p>
            <p>${val.valor}</p>
            
            </div>
            `
             
        });
    };
    
inicializarProdutos();  

        var linksPasteis = document.querySelectorAll('.adicionar')

        linksPasteis.forEach((link)=>{
            link.addEventListener('click',()=>{
                const key = link.getAttribute('data-key');
                pasteis[key].quantidade++;

                const quantidadeElement = link.parentElement.querySelector('.quantidade');
                 if (quantidadeElement) {
                  quantidadeElement.textContent = pasteis[key].quantidade;
                  quantidadeElement.style.visibility = pasteis[key].quantidade > 0 ? 'visible' : 'hidden';
}
        return false;
                });
        });


           
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
        
            inicializarBebidas = ()=>{
                var conteinerProdutos = document.getElementById('bebidas');
                bebidas.forEach((val)=>{
                    conteinerProdutos.innerHTML +=`
                    
                    <div class="produto-single-bbd">
                    <span class="quantidade">${val.quantidade}</span>
                    <img src="${val.img}" data-key=${val.id} class="adicionar"/>
                    <p>${val.nome}</p>
                    <p>${val.valor}</p>
                    
                    </div>
                    `
                    
                    
                });
        
            };
        
        inicializarBebidas();
        
               
                
                var linksBebidas = document.querySelectorAll('.adicionar')
        
                linksBebidas.forEach((link)=>{
                    link.addEventListener('click',()=>{
                        const key = link.getAttribute('data-key');
                        bebidas[key].quantidade++;
        
        
                        const quantidadeElement = link.parentElement.querySelector('.quantidade');
                         if (quantidadeElement) {
                          quantidadeElement.textContent = bebidas[key].quantidade;
                          quantidadeElement.style.visibility = bebidas[key].quantidade > 0 ? 'visible' : 'hidden';
        
                }
                        return false;
                    });
                });

                
