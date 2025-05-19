document.getElementById('registerLink').addEventListener('click', function() {
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Регистрация';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('authForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Вход в аккаунт';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    
    if (login && password) {
        document.getElementById('authForm').style.display = 'none';
        document.getElementById('welcomeMessage').style.display = 'block';
    }
});

document.getElementById('registerFormContent').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerLogin = document.getElementById('registerLogin').value;

    if (password === confirmPassword) {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('welcomeMessage').style.display = 'block';
    } else {
        alert('Пароли не совпадают');
    }
});
// Открытие модального окна
        function openModal() {
            document.getElementById("orderModal").style.display = "flex";
        }

        // Закрытие модального окна
        function closeModal() {
            document.getElementById("orderModal").style.display = "none";
        }

        // Обработчик отправки формы заказа
        document.getElementById("orderForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const address = document.getElementById("address").value;
            const cardNumber = document.getElementById("cardNumber").value;

            alert(`Заказ оформлен!\nИмя: ${name}\nАдрес: ${address}\nНомер карты: ${cardNumber}`);

            // Закрыть модальное окно после оформления
            closeModal();
        });
        let cart = [];
        let total = 0;
    
        // Функция добавления товара в корзину
        function addToCart(name, price) {
            cart.push({ name, price });
            total += price;
            updateCart();
        }
    
        // Обновить отображение корзины
        function updateCart() {
            const cartItems = document.getElementById("cart-items");
            cartItems.innerHTML = ""; // Очищаем корзину перед обновлением
            cart.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.className = "cart-item";
                itemElement.innerHTML = `
                    <span>${item.name}</span>
                    <span>${item.price} ₽</span>
                `;
                cartItems.appendChild(itemElement);
            });
            document.getElementById("total-price").textContent = `${total} ₽`;
        }
    
        // Открытие модального окна
        function openModal() {
            document.getElementById("orderModal").style.display = "flex";
        }
    
        // Закрытие модального окна
        function closeModal() {
            document.getElementById("orderModal").style.display = "none";
        }
    
        // Обработчик отправки формы заказа
        document.getElementById("orderForm").addEventListener("submit", function(event) {
            event.preventDefault();
    
            const name = document.getElementById("name").value;
            const address = document.getElementById("address").value;
            const cardNumber = document.getElementById("cardNumber").value;
    
            alert(`Заказ оформлен!\nИмя: ${name}\nАдрес: ${address}\nНомер карты: ${cardNumber}`);
            
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
button.addEventListener('click', function() {
const productEl = this.closest('.product');
const id = productEl.dataset.id;
const name = productEl.dataset.name;
const price = productEl.dataset.price;

// Добавляем товар в корзину
cart.push({ id, name, price });

// Обновляем отображение корзины
renderCart();
});
});

function renderCart() {
const cartItemsEl = document.getElementById('cart-items');
cartItemsEl.innerHTML = ''; // очищаем корзину

cart.forEach(item => {
const li = document.createElement('li');
li.textContent = `${item.name} — ${item.price} золота`;
cartItemsEl.appendChild(li);
});
}


    
            // Закрыть модальное окно после оформления
            closeModal();
        });
