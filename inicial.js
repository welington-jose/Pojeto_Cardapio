const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", ()=>
nav.classList.toggle("active"));

document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');
    let currentPage = 'pasteis.html'; // Página inicial

    // Função para carregar o conteúdo de uma página na área principal
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Adicione um event listener para detectar gestos de deslizamento
    let touchStartX = 0;
    contentDiv.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });

    contentDiv.addEventListener('touchend', function (e) {
        const touchEndX = e.changedTouches[0].clientX;
        const threshold = 50; // Ajuste conforme necessário

        if (touchEndX < touchStartX - threshold) {
            // Deslizar para a esquerda
            // Carregar a próxima página e atualizar currentPage
            if (currentPage === 'pasteis.html') {
                loadPage('bebidas.html');
                currentPage = 'bebidas.html';
            } else if (currentPage === 'bebidas.html') {
                loadPage('pedido.html');
                currentPage = 'pedido.html';
            }
            // Adicione mais casos conforme necessário
        } else if (touchEndX > touchStartX + threshold) {
            // Deslizar para a direita
            // Carregar a página anterior e atualizar currentPage
            if (currentPage === 'bebidas.html') {
                loadPage('pasteis.html');
                currentPage = 'pasteis.html';
            } else if (currentPage === 'pedido.html') {
                loadPage('bebidas.html');
                currentPage = 'bebidas.html';
            }
            // Adicione mais casos conforme necessário
        }
    });

    // Carregue a página inicial por padrão
    loadPage(currentPage);
});
