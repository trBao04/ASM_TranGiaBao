function register() {
    const username = document.querySelector("#register-username").value;
    const password = document.querySelector("#register-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    const email = document.querySelector("#register-email").value;
    const address = document.querySelector("#register-address").value;

    if (!username || !password || !confirmPassword || !email || !address) {
        alert("Please fill in all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another.");
        return false;
    }

    const newUser = {
        username: username,
        password: password,
        email: email,  // Lưu email của người dùng
        address: address // Lưu địa chỉ của người dùng
    };

    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem(username, JSON.stringify(newUser));

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
    return false;
}
