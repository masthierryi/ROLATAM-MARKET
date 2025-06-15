document.addEventListener('DOMContentLoaded', () => {
    
    // Elementos do painel de detalhes que serão atualizados
    const cardName = document.getElementById('card-name');
    const cardLink = document.getElementById('card-link');
    const priceMax = document.getElementById('price-max');
    const priceMed = document.getElementById('price-med');
    const priceMin = document.getElementById('price-min');

    // Carrega os dados do arquivo JSON
    fetch('../database.json')
        .then(response  => response.json())
        .then(data      => {
            const listItems = document.querySelectorAll('.lista li');

            // Adiciona um evento de clique para cada item da lista
            listItems.forEach(item => {
                item.addEventListener('click', () => {
                    const cardId   = item.dataset.id;
                    const cardData = data.cartas.find(card => card.id === cardId);

                    listItems.forEach(li => { li.classList.remove('selecionado'); });
                    item.classList.add('selecionado'); // muda a classe do item selecionado

                    // Atualiza o painel de detalhes com os dados da carta clicada
                    if (cardData) {
                        cardName.textContent = cardData.nome;
                        cardLink.href        = cardData.link;
                        priceMax.textContent = cardData.preco_max;
                        priceMed.textContent = cardData.preco_med;
                        priceMin.textContent = cardData.preco_min;                        
                    }
                });
            });
        });
        
});