// produto id (string), name(string); price(number)
// cartItem produto, quantidade(number); price (number)
// Cart: cartitem [] = items; additem; removeitem. calculeTotal()
// colocar o botao de adc ao carrinho, listar no carrinho os produtos 


let laranja = {
    id: "1",
    nome: "laranja",
    preco: 1.99
}

let morango = {
    id: "2",
    nome: "morango",
    preco: 2.99
}

const button = document.querySelector('.button1')
const button2 = document.querySelector('.button2')



button.addEventListener('click', function(){
    const table = document.querySelector('.table')
    const linha1 = document.querySelector('.linha1');

    const td = document.createElement('td');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td.innerText = laranja.nome;
    td1.innerText = laranja.id;
    td2.innerText = laranja.preco;

    linha1.appendChild(td);
    linha1.appendChild(td1);
    linha1.appendChild(td2);
})

button2.addEventListener('click', function(){
    const table = document.querySelector('.table')
    const linha2 = document.querySelector('.linha2');

    const td = document.createElement('td');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td.innerText = morango.nome;
    td1.innerText = morango.id;
    td2.innerText = morango.preco;

    linha2.appendChild(td);
    linha2.appendChild(td1);
    linha2.appendChild(td2);
})





















