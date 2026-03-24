
const estoque = [
    {id: 1, nome: "Notebook", preco: 3500, categoria: "Eletrônicos"},
    {id: 2, nome: "Smartphone", preco: 2000, categoria: "Eletrônicos"},
    {id: 3, nome: "Camiseta", preco: 50, categoria: "Roupas"},
    {id: 4, nome: "Calça", preco: 80, categoria: "Roupas"},
    {id: 5, nome: "Cadeira Gamer", preco: 3200.89, categoria: "Móveis"},
    {id: 6, nome: "Mesa de Escritório", preco: 4500, categoria: "Móveis"},
    
];

const btnAdicionar = document.getElementById("btn-adicionar");

btnAdicionar.addEventListener("click", () => {
    const prodIdInput = document.getElementById("prod-id");
    const nomeInput = document.getElementById("prod-nome");
    
    const precoInput = document.getElementById("prod-preco");
    precoInput.value = parseFloat(precoInput.value);

    const categoriaInput = document.getElementById("prod-categoria");

    if (!prodIdInput.value || !nomeInput.value || isNaN(precoInput.value) || !categoriaInput.value) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    const novoProduto = {
        id: parseInt(prodIdInput.value),
        nome: nomeInput.value,
        preco: precoInput.value,
        categoria: categoriaInput.value,
    };
    estoque.push(novoProduto);
    alert(`Produto "${novoProduto.nome}" adicionado com sucesso!`);


    // Limpar os campos após adicionar
    prodIdInput.value = "";
    nomeInput.value = "";
    precoInput.value = "";
    categoriaInput.value = "";

    console.log("Produto adicionado:", novoProduto);
    console.log("Estoque atualizado:", estoque);

});