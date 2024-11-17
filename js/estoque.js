if (localStorage.getItem("estoque") === null) {
    localStorage.setItem("estoque", 10);
}
function atualizarEstoque() {
    const estoque = localStorage.getItem("estoque");
    document.getElementById("estoque-produto1").innerText = estoque;
    document.getElementById("estoque-produto2").innerText = estoque;
    document.getElementById("estoque-produto3").innerText = estoque;
    document.getElementById("estoque-produto4").innerText = estoque;
    document.getElementById("estoque-produto5").innerText = estoque;
}

function reservarProduto() {
    let estoqueAtual = localStorage.getItem("estoque");
    if (estoqueAtual > 0) {
        estoqueAtual--;
        localStorage.setItem("estoque", estoqueAtual);
        atualizarEstoque();
        alert("Produto reservado com sucesso!");
    } else {
        alert("Desculpe, estoque esgotado!");
    }
}

window.onload = function() {
    atualizarEstoque();
};