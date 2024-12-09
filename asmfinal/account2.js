// Lấy thông tin tài khoản từ localStorage
const username = localStorage.getItem("currentUser"); // Lấy tên người dùng đã đăng nhập
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputEmail = document.querySelector("#email");
const inputAddress = document.querySelector("#address");
const updateBtn = document.querySelector("#update-btn");
const logoutBtn = document.querySelector("#logout-btn");

// Kiểm tra nếu người dùng đã đăng nhập
if (!username) {
    window.location.href = "login.html"; // Nếu không có tài khoản đăng nhập, chuyển hướng về trang login
} else {
    const user = JSON.parse(localStorage.getItem(username));

    if (user) {
        // Hiển thị thông tin người dùng
        inputUsername.value = user.username;
        inputPassword.value = user.password; // Không nên hiển thị mật khẩu thực tế trong thực tế, nhưng ở đây chỉ là ví dụ
        inputEmail.value = user.email || ""; // Nếu không có email, để trống
        inputAddress.value = user.address || ""; // Nếu không có địa chỉ, để trống
    }
}

// Cập nhật thông tin tài khoản
updateBtn.addEventListener("click", function() {
    const updatedEmail = inputEmail.value;
    const updatedAddress = inputAddress.value;

    // Cập nhật thông tin vào localStorage
    const updatedUser = {
        username: inputUsername.value,
        password: inputPassword.value, // Giữ nguyên mật khẩu
        email: updatedEmail,
        address: updatedAddress
    };

    localStorage.setItem(username, JSON.stringify(updatedUser)); // Lưu thông tin đã cập nhật

    alert("Information updated successfully!");
});

// Đăng xuất và quay lại trang đăng nhập
logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("currentUser"); // Xóa thông tin đăng nhập
    window.location.href = "login.html"; 
});
