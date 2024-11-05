let cartItems = [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(itemId) {
  // Tampilkan animasi pada elemen yang ditambahkan
  let itemElement = document.getElementById(itemId);
  itemElement.classList.add("item-added-animation");

  // Menghapus animasi setelah selesai
  setTimeout(() => {
    itemElement.classList.remove("item-added-animation");
    addItemToCart(itemId);
  }, 600);
}

// Fungsi untuk memasukkan item ke dalam cartItems dan memperbarui tampilan keranjang
function addItemToCart(itemId) {
  const itemName = document.getElementById(itemId).querySelector("h3").textContent;
  const itemPrice = document.getElementById(itemId).querySelector("p").textContent;
  
  const item = { id: itemId, name: itemName, price: itemPrice };
  cartItems.push(item);

  updateCartDisplay();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCartDisplay() {
  const cartItemsList = document.getElementById("cartItemsList");
  cartItemsList.innerHTML = "";

  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.price}`;
    cartItemsList.appendChild(listItem);
  });
}

// Fungsi untuk membuka dan menutup menu keranjang
function toggleCartMenu() {
  const cartMenu = document.getElementById("cartMenu");
  cartMenu.classList.toggle("active");
}
