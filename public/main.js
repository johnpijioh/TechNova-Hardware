// Aguarda o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica da Fase 2: Renderização da Vitrine ---
    const vitrineContainer = document.getElementById('vitrine-destaque');
    
    // Verifica se estamos na página que contém a vitrine
    if (vitrineContainer) {
        carregarProdutos();
    }

    async function carregarProdutos() {
        try {
            // *** MUDANÇA CRÍTICA AQUI: Chamando a API do seu backend ***
            const response = await fetch('http://localhost:3000/api/produtos'); 
            
            if (!response.ok) {
                // Se a API retornar um erro (404, 500, etc.)
                throw new Error(`Falha ao carregar produtos da API: ${response.status} ${response.statusText}`);
            }
            // Transforma a resposta (JSON) em objetos JavaScript
            const produtos = await response.json();
            
            // Renderiza os produtos na tela
            renderizarVitrine(produtos, vitrineContainer);

        } catch (error) {
            console.error("Erro ao tentar buscar produtos:", error);
            // Mensagem de erro para o usuário
            vitrineContainer.innerHTML = "<p>Não foi possível carregar os produtos. Verifique se o servidor (index.js) e o MongoDB estão ativos.</p>";
        }
    }

    /**
     * Renderiza os cards de produto no container
     */
    function renderizarVitrine(produtos, container) {
        container.innerHTML = ''; // Limpa antes de adicionar

        produtos.forEach(produto => {
            // Criação do HTML do Card de Produto (Fase 2)
            const cardHTML = `
                <div class="card-produto" data-id="${produto.id}">
                    <a href="produto.html?id=${produto.id}">
                        <img src="${produto.imagem}" alt="${produto.nome}" class="card-produto-img">
                    </a>
                    <div class="card-produto-info">
                        <h3><a href="produto.html?id=${produto.id}">${produto.nome}</a></h3>
                        <div class="card-produto-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
                        <div class="card-produto-avaliacao">
                            Avaliação: ${produto.avaliacao} ★
                        </div>
                    </div>
                    
                    <div class="card-produto-acoes">
                        <a href="#?id=${produto.id}" class="btn btn-detalhes">Ver Detalhes</a>
                        
                        <button class="btn btn-adicionar" data-id="${produto.id}">
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    }

    // --- Lógica da Fase 1: Barra de Aceitação de Cookies (Mantida) ---
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAcceptBtn = document.getElementById('cookie-accept');

    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('active');
        }, 1000); 
    }

    cookieAcceptBtn.addEventListener('click', () => {
        cookieBanner.classList.remove('active');
        localStorage.setItem('cookiesAccepted', 'true'); 
    });

});