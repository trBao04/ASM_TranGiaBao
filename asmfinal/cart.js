// Khởi tạo giỏ hàng từ Local Storage (nếu chưa có thì tạo mảng rỗng)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Lấy tất cả các nút "Add to Cart"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Tính tổng số sản phẩm
    document.getElementById("cart-count").textContent = cartCount; // Cập nhật số lượng lên giao diện
}

// Xử lý sự kiện click vào nút "Add to Cart"
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.dataset.name; // Tên sản phẩm
        const productPrice = parseFloat(button.dataset.price); // Giá sản phẩm
        

        // Tìm sản phẩm trong giỏ hàng
        const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng
            existingProduct.quantity++;
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        // Lưu giỏ hàng vào Local Storage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Cập nhật số lượng sản phẩm trong giỏ hàng
        updateCartCount();

        // Hiển thị thông báo
        alert(`Đã thêm ${productName} vào giỏ hàng!`);
    });
});

// Cập nhật số lượng sản phẩm khi trang được tải
updateCartCount();

// Xem giỏ hàng trong console (dùng để kiểm tra)
console.log("Cart:", cart);

