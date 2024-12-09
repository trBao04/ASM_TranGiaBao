const inputUsername = document.querySelector("#login-username");
const inputPassword = document.querySelector("#login-password");

function login() {
    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("Please enter both username and password.");
        return false;
    }

    const user = JSON.parse(localStorage.getItem(inputUsername.value));

    if (!user) {
        alert("No account found. Please register first.");
        return false;
    }

    // Lưu tên người dùng vào localStorage để xác định người dùng hiện tại
    localStorage.setItem("currentUser", inputUsername.value); // Lưu tên người dùng hiện tại

    if (user.password === inputPassword.value) {
        alert("Login successful!");
        window.location.href = "form1.html"; // Chuyển hướng đến trang mua hàng
        return false; 
    } else {
        alert("Invalid username or password!");
        return false;
    }
}


