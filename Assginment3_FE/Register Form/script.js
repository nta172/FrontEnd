function handleRegister() {
  const name = document.getElementById("name").value.trim(); // trim() xóa khoảng trắng đầu vào cuôi.
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const phoneRegex = /^[0-9]{9,11}$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^\S+$/; // không chứa dấu cách

  // Kiểm tra hợp lệ
  if (name === "") {
    alert("Họ tên không được để trống.");
    return;
  }

  // test là kiểm tra chuỗi có khớp không.
  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ.");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Mật khẩu không được để trống và không chứa dấu cách.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Xác nhận mật khẩu không khớp.");
    return;
  }

  // Hiển thị kết quả
  const result = `
    <h3>Thông tin đã đăng ký:</h3>
    <p><strong>Họ tên:</strong> ${name}</p>
    <p><strong>Số điện thoại:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
  `;
  document.getElementById("result").innerHTML = result;
}
