let produto1 = new Object();
produto1.nome = 'Arroz'
produto1.id = 1;
produto1.preco = 1.99;


let produto2 = new Object();
produto2.nome = 'Feijão'
produto2.id = 2;
produto2.preco = 3.99;
    
let carrinho = [];
console.log(carrinho);

let produtos;


function adicionarproduto1(){
    carrinho.push(produto1);
    alert(`${produto1.nome} adicionado ao carrinho`)
    
}

function adicionarproduto2(){
    carrinho.push(produto2);
    alert(`${produto2.nome} adicionado ao carrinho`)
}


function mostrarProdutos(){
    
}