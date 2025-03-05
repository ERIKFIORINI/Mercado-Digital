var menu = document.getElementById('menu')
var content = document.getElementById('content')
var toggleButton = document.getElementById('toggle-button')

toggleButton.addEventListener('click', function(){
    menu.classList.toggle('is-open');
    content.classList.toggle('is-open');
});

let products = [
    {id: 1, name: 'Açúcar refinado', price: 4.99, image:'img/acucar.jpg'},
    {id: 2, name: 'Coca Cola 2L', price: 9.49, image:'img/coca.jpg'},
    {id: 3, name: 'Energético Monster', price: 10.99, image:'img/energetico.jpg'},
    {id: 4, name: 'Café', price: 150.00, image:'img/cafe.jpg'},
    {id: 5, name: 'Sabão', price: 22.55, image:'img/sabao.jpg'},
    {id: 6, name: 'Nescau', price: 9.98, image:'img/nescau.jpg'},
];

let cart = [];

function renderProducts() {
    let productgrid = document.querySelector(".product-grid");
    productgrid.innerHTML = ''; 
    
    products.forEach((product) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button>Adicionar ao carrinho</button>
        `;

        productDiv.querySelector('button').addEventListener('click', () => 
            addToCart(product.id)
        );

        productgrid.appendChild(productDiv);
    });
}

function addToCart(productId) {
    let productInCart = cart.find((item) => item.id === productId);
    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        let product = products.find((product) => product.id === productId);
        if (!product) {
            console.error("Produto não encontrado!");
            return;
        }
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function renderCart(){
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) => {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>R$ ${product.price.toFixed(2)}</td>
            <td>R$ ${(product.price * product.quantity).toFixed(2)}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal(){
    let total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

document.getElementById("checkout").addEventListener('click', function(){
    Swal.fire({
        title: "Obrigado pela compra!",
        text: "Logo cherará em sua Casa!",
        icon: "success",
        button: "fechar",
        draggable: true
      });
    });
renderProducts();
