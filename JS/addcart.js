

document.addEventListener("DOMContentLoaded", function () {
  
} );

document.addEventListener("DOMContentLoaded", function () {
  const addCartButtons = document.querySelectorAll(".add-cart");

  addCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".card");
      const imgSrc = card.querySelector("img").src;
      const title = card.querySelector(".card-title").innerText;
      const price = card.querySelector(".card-text").innerText;

      const product = {
        img: imgSrc,
        title: title,
        price: price
      };

      let cart = localStorage.getItem("cart");
      cart = cart ? JSON.parse(cart) : [];

      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Sản phẩm đã được thêm vào giỏ hàng!");
    });
  });
});

// Show
document.addEventListener("DOMContentLoaded", function () {
  let cart = localStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];

  const productsContain = document.querySelector(".products-contain");
  const totalPriceLabel = document.querySelector("#totalPrice");
  const totalItemsLabel = document.querySelector("#totalItems");
  const selectAllCheckbox = document.querySelector("#selectAll");
  const deleteButton = document.querySelector(".txtXoa");

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
  }

  function parsePrice(priceString) {
    return parseInt(priceString.replace(/\./g, "").replace(" đ", ""));
  }

  function displayCartItems() {
    const productsContain = document.querySelector(".products-contain");
    productsContain.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    cart.forEach((product, index) => {
      const price = parsePrice(product.price);
      const quantity = product.quantity || 1;
      const totalPrice = price * quantity;

      total += totalPrice;
      totalItems += quantity;

      const productHTML = `
            <tr>
                <td class="text-center">
                    <input type="checkbox" class="product-checkbox" data-index="${index}">
                </td>
                <td class="text-center">
                    <img src="${
                      product.img
                    }" alt="Product Image" class="img" style="width: 80px;">
                    <span class="ms-2">${product.title}</span>
                </td>
                <td class="text-center">${formatPrice(price)}</td>
                <td class="text-center">
                    <div class="amountCo d-flex flex-row justify-content-center align-items-center">
                        <img class="me-2 minus-amount" src="../IMG/Logo/minus.png" alt="Decrease" data-index="${index}">
                        <input type="text" value="${quantity}" class="text-center amount-num" data-index="${index}" style="width: 40px;">
                        <img class="ms-2 plus-amount" src="../IMG/Logo/plus.png" alt="Increase" data-index="${index}">
                    </div>
                </td>
                <td class="text-center">${formatPrice(totalPrice)}</td>
                <td class="text-center">
                    <button class="delete btn btn-danger" data-index="${index}">Xóa</button>
                </td>
            </tr>
        `;
      productsContain.innerHTML += productHTML;
    });

    totalItemsLabel.innerText = totalItems;
    totalPriceLabel.innerText = formatPrice(total);
  }

  function updateQuantity(index, newQuantity) {
    if (newQuantity > 0) {
      cart[index].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCartItems();
    }
  }

  function deleteProduct(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  }

  selectAllCheckbox.addEventListener("change", function () {
    const checkboxes = document.querySelectorAll(".product-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  deleteButton.addEventListener("click", function () {
    const selectedIndexes = [];
    const checkboxes = document.querySelectorAll(".product-checkbox");
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        selectedIndexes.push(index);
      }
    });

    for (let i = selectedIndexes.length - 1; i >= 0; i--) {
      cart.splice(selectedIndexes[i], 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  });

  productsContain.addEventListener("click", function (e) {
    const target = e.target;
    const index = target.getAttribute("data-index");

    if (target.classList.contains("minus-amount")) {
      const quantity = parseInt(cart[index].quantity || 1);
      updateQuantity(index, quantity - 1);
    }

    if (target.classList.contains("plus-amount")) {
      const quantity = parseInt(cart[index].quantity || 1);
      updateQuantity(index, quantity + 1);
    }

    if (target.classList.contains("delete")) {
      deleteProduct(index);
    }
  });

  displayCartItems();
});


















// ============================Auth=============================
document.addEventListener("DOMContentLoaded", function () {
  const avatarIcon = document.getElementById("avatar-icon");
  const accountLink = document.getElementById("account-link");
  const logoutLink = document.getElementById("logout-link");
  const loginForm = document.getElementById("login-form");
  const registrationForm = document.getElementById("registration-form");

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    changeAvatar(loggedInUser.avatar);
    showLogout();
  }

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      showError("Email đã tồn tại");
      return;
    }

    const avatar = "../IMG/Logo/219983.png";
    users.push({ name, email, password, avatar });
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
      icon: "success",
      title: "Đăng ký thành công!",
      text: "Bạn có thể đăng nhập ngay bây giờ.",
      timer: 2000,
      showConfirmButton: false
    });

    registrationForm.reset();
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
        text: "Chào mừng " + user.name,
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        changeAvatar(user.avatar);
        showLogout();
      });
    } else {
      showError("Email hoặc mật khẩu không chính xác.");
    }
  });

  logoutLink.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("loggedInUser");
    resetAvatar();
    showLogin();

    Swal.fire({
      icon: "success",
      title: "Đã đăng xuất!",
      text: "Bạn đã đăng xuất thành công.",
      timer: 2000,
      showConfirmButton: false
    });
  });

  function changeAvatar(avatar) {
    avatarIcon.src = avatar;
  }

  function resetAvatar() {
    avatarIcon.src = "../IMG/Logo/219983.png";
  }

  function showLogout() {
    accountLink.style.display = "none";
    logoutLink.style.display = "inline-block";
  }

  function showLogin() {
    accountLink.style.display = "inline-block";
    logoutLink.style.display = "none";
  }

  function showError(message) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
      timer: 2000,
      showConfirmButton: false
    });
  }
});
