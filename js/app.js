// DOM: lista de itens no carrinho e valor total do carrinho
const carrinhoLista = document.querySelector('#lista-produtos');
const valorToralHtml = document.querySelector('#valor-total');


// função: montar html de item com os valores dos inputs
const montaItemSelecionado = (produtoInput, quantidadeInput) => {

    const nomeProduto = produtoInput.split(' - ')[0];
    const precoProduto = parseFloat(produtoInput.split(' - ')[1].split('$')[1]);
    const quantidadeProduto = parseInt(quantidadeInput);

    //console.log(nomeProduto);    
    //console.log(precoProduto);
    //console.log(quantidadeProduto);

    return `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto * quantidadeProduto}</span></section>`;
};

// função: ler e somar os preços dos itens no carrinho
const somarTotaisDoCarrinho = () => {

    // seleção DOM
    const carrinhoItens = document.querySelectorAll('#lista-produtos > .carrinho__produtos__produto > span + span');

    const precosDosItens = [];
    let totalCarrinho = 0;

    carrinhoItens.forEach(item => {
        precosDosItens.push(parseFloat(item.innerHTML.split('$')[1]));
    });

    precosDosItens.forEach(preco => {
        totalCarrinho += preco 
    })

    return valorToralHtml.innerHTML = `R$${totalCarrinho}`;
};

// função: adicionar itens no carrinho
const adicionar = () => {

    // valores: produto e quantidade
    const produtoValue = document.querySelector('#produto').value;
    const produtoQuantidadeValue = document.querySelector('#quantidade').value;

    if (produtoQuantidadeValue <= 0) {
        return alert('Nenhuma quantidade adicionada.');
    } else {

        // colocar item no carrinho
        carrinhoLista.innerHTML = carrinhoLista.innerHTML + montaItemSelecionado(produtoValue, produtoQuantidadeValue);

        // somar total do carrinho
        somarTotaisDoCarrinho()

    }
};

// função: limpar itens do carrinho
const limpar = () => {
    carrinhoLista.innerHTML = "";
    valorToralHtml.innerHTML = "R$0" 
}

limpar()