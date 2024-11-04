let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoContador = document.getElementById('carrinho-contador');
    const carrinhoItens = document.getElementById('carrinho-itens');
    const totalDisplay = document.getElementById('total');

    carrinhoContador.textContent = carrinho.length;
    carrinhoItens.innerHTML = carrinho.map(item => `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`).join('');
    totalDisplay.textContent = total.toFixed(2);
}
