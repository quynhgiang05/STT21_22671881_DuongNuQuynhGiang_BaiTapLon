/*
    Author: Thế Bảo.
    Day: 10/03/2024.
*/

function renderMenu() {
    const menuString = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>PETSHOP</title>
            <!-- Favicon -->
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="../Favicon/apple-icon-57x57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="../Favicon/apple-icon-60x60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="../Favicon/apple-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="../Favicon/apple-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="../Favicon/apple-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="../Favicon/apple-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="../Favicon/apple-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="../Favicon/apple-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="../Favicon/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="../Favicon/android-icon-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="../Favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="../Favicon/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="../Favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="../Favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
    
            <!-- Embed font -->
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <!-- CSS -->
            <link rel="stylesheet" href="../CSS/navbar.css" />
            <link rel="stylesheet" href="../CSS/form.css">
            <link rel="stylesheet" href="../Boostrap/bootstrap.min.css" />
            <script src="../Boostrap/bootstrap.bundle.min.js"></script>
        </head>
        <body style="height: 10000000px">
            <!-- Header -->
            <header class="header">
            <nav class="navbar navbar-expand-sm px-5 fixed-top pb-0">
            <div class="container">
                <a href="./home.html">
                    <img
                        src="../Images/Logo/Logo_2.png"
                        alt=""
                        class="logo-img"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#idNav"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="idNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="../HTML/home.html" class="nav-link"
                                >TRANG CHỦ</a
                            >
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                href=""
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                >DỊCH VỤ</a
                            >
                            <ul class="dropdown-menu">
                                <li class="dropdown-item">
                                    <a href="../HTML/suckhoe.html" class="nav-link"
                                        >KHÁM THÚ Y</a
                                    >
                                </li>
                                <li class="dropdown-item">
                                    <a href="../HTML/khachsan.html" class="nav-link"
                                        >KHÁCH SẠN CHO THÚ CƯNG</a
                                    >
                                </li>
                                <li class="dropdown-item">
                                    <a href="../HTML/spa.html" class="nav-link"
                                        >GROOMING - CẮT TỈA</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                href=""
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                SẢN PHẨM
                            </a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item">
                                    <a href="../HTML/products.html" class="nav-link" id="food"
                                        >THỨC ĂN</a                                
                                </li>
                                <li class="dropdown-item">
                                    <a href="../HTML/products.html" class="nav-link" id="clothes"
                                        >QUẦN ÁO & PHỤ KIỆN</a
                                </li>
                                <li class="dropdown-item">
                                    <a href="../HTML/products.html" class="nav-link" id="cosmetic"
                                        >MỸ PHẨM & LÀM ĐẸP</a
                                </li>
                                <li class="dropdown-item">
                                    <a href="../HTML/products.html" class="nav-link" id="cleaning"
                                        >DỤNG CỤ VỆ SINH</a
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="../HTML/lienhe.html" class="nav-link">LIÊN HỆ</a>
                        </li>
                    </ul>
                    <div class="input-group search">
                        <span
                            class="input-group-text bg-white border-black"
                            style="
                                border-top-left-radius: 20px;
                                border-bottom-left-radius: 20px;
                                border-right: none;
                            "
                            ><img src="../Images/Logo/Union.png" alt=""
                        /></span>
                        <input
                            class="form-control border-black"
                            type="text"
                            name=""
                            id=""
                            style="
                                margin-right: 60px;
                                border-left: none;
                                border-top-right-radius: 20px;
                                border-bottom-right-radius: 20px;
                                outline: none;
                                box-shadow: none;
                            "
                            placeholder="Tìm kiếm..."
                        />
                    </div>
                    <div class="header-action">
                        <a href="../HTML/cart.html" style="position: relative;"
                            ><img
                                src="../Images/Logo/logo-cart.png"
                                alt=""
                                class="cart-icon"
                        /> <div class="numInCart text-light rounded-circle bg-danger d-flex justify-content-center" style="width: 30px; 
                        position: absolute; bottom: 32px; left: 22px;">0</div> </a>
                        <a href="" data-bs-toggle="modal" data-bs-target="#formModal"
                            ><img
                                src="../Images/Logo/Logo-user.png"
                                alt=""
                                class="account-icon"
                        /></a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="modal fade modal-lg" id="formModal">
        <div class="modal-dialog">
          <div class="modal-content bg-transparent border-0 ">
            <div class="modal-header border-0">
             
            </div>
            <div class="modal-body ">
              <div class="container-sign" id="container">
                <div class="form-container sign-up">
                    <form >
                        <h1>Tạo tài khoản</h1>
                        <div class="social-icons">
                            <a href="#" class="icon"><img src="../Images/Logo/icons8-google-30.png" alt=""></a>
                            <a href="#" class="icon"><img src="../Images/Logo/icons8-facebook-30.png" alt=""></a>
                            <a href="#" class="icon"><img src="../Images/Logo/icons8-github-30.png" alt=""></a>
                        </div>
                        <span>Hoặc sử dụng email của bạn để đăng ký</span>
                        <input type="text" placeholder="Name">
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <button>Đăng kí</button>
                    </form>
                </div>
                <div class="form-container sign-in">
                    <form >
                        <h1>Đăng nhập</h1>
                        <div class="social-icons">
                        <a href="#" class="icon"><img src="../Images/Logo/icons8-google-30.png" alt=""></a>
                        <a href="#" class="icon"><img src="../Images/Logo/icons8-facebook-30.png" alt=""></a>
                        <a href="#" class="icon"><img src="../Images/Logo/icons8-github-30.png" alt=""></a>
                      
                        </div>
                        <span>Hoặc sử dụng mật khẩu email của bạn</span>
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <a href="#">Quên mật khẩu</a>
                        <button>Đăng nhập</button>
                    </form>
                </div>
                <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
                            <h1>Chào mừng bạn trở lại!</h1>
                            <p>Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng của trang web</p>
                            <button class="hidden" id="login">Đăng nhập</button>
                        </div>
                        <div class="toggle-panel toggle-right">
                            <h1>Chào bạn!</h1>
                            <p>Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các tính năng của trang web</p>
                            <button class="hidden" id="register">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="modal-footer border-0">
            </div>
          </div>
        </div>
      </div> 
            </header>
            <!-- Main -->
             
        </body>
        <script type="module" src="../Database/readingDataProducts.js"></script>
    </html>`;

    const headerMenu = document.getElementById("headerMenu");
    if (headerMenu) {
        headerMenu.innerHTML = menuString;
    }
}  // Lưu ý là bỏ vô cặp dấu `` thì code bên trong mới kh bị báo lỗi, đây không phải chuỗi bình thường.

function renderFooter() {
    const footer = `<link rel="stylesheet" href="../../Boostrap/bootstrap.min.css">
    <script src="../../Boostrap/bootstrap.bundle.min.js"></script>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
      <!-- Embed font -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
      />
      <!-- CSS -->
      <link rel="stylesheet" href="../CSS/footer.css" />
      <link rel="stylesheet" href="../Boostrap/bootstrap.min.css" />
      <script src="../Boostrap/bootstrap.bundle.min.js"></script>
</head>
<body>
        <footer class="footer">
            <div class="container">
                <div class="row footer-row">
                    <div class="col footer-col">
                        <a href="../HTML/home.html">
                            <img
                                src="../IMG/Logo/Home &amp; More.jpg"
                                alt=""
                                class="logo"
                                width= "100px"
                                height= "100px"
                                style="border-radius: 5px"
                            />
                            
                        </a>
                        <figcaption class="fw-bold" style="color:white; padding-top: 15px; font-size: 16px">HOME&MORE </figcaption>
                    </div>
                    <div class="col footer-col">
                        <h3 class="footer-title" onclick="toggleFooterList(this)">CHÍNH SÁCH DỊCH VỤ <span class="toggle-icon">+</span></h3>
                    
                    <ul class="footer-list hidden">
                        <li>
                            <a href="">Chính Sách Bảo Mật</a>
                        </li>
                        <li>
                            <a href="">Chính Sách Đổi Trả Hàng</a>
                        </li>
                        <li>
                            <a href="">Chính Sách Đưa Đón & Giao Hàng</a>
                        </li>
                    </ul>
                </div>

                <div class="col footer-col">
                    <h3 class="footer-title" onclick="toggleFooterList(this)">LIÊN HỆ CHÚNG TÔI <span class="toggle-icon">+</span></h3>
                    <ul class="footer-list hidden">
                        <li>
                            <a href="">Địa Chỉ: 27 Đường số 2, Phường 12, Quận Thủ Đức, TP.Hồ Chí Minh</a>
                        </li>
                        <li>
                            <a href="">Hotline: 097430095</a>
                        </li>
                        <li>
                            <a href="">Email: homemore@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div class="col footer-col">
                    <h3 class="footer-title" onclick="toggleFooterList(this)">MẠNG XÃ HỘI <span class="toggle-icon">+</span></h3>
                    <ul class="footer-list hidden">
                        <li>
                            <a href="" class="footer-social">
                                <img src="../Images/TrangChinh/Facebook.svg" alt=""/>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="footer-social">
                                <img src="../Images/TrangChinh/Instargram.svg" alt=""/>
                                <span>Instargram</span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="footer-social">
                                <img src="../Images/TrangChinh/Linked-in.svg" alt=""/>
                                <span>Linked-in</span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="footer-social">
                                <img src="../Images/TrangChinh/Twitter.svg" alt=""/>
                                <span>Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>

                </div>
                <div class="copyright">
                    <p>Copyright 2024 © HOME & MORE © All rights reserved.</p>
                </div>
            </div>
        </footer>
</body>
</html>`;

    const footerMenu = document.getElementById("footerMenu");
    if (footerMenu) {
        footerMenu.innerHTML = footer;
    }
}


// menu riêng của trang products.html
function renderProductMenu() {
    const menuProductsString = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>PETSHOP</title>
            <!-- Favicon -->
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="../Favicon/apple-icon-57x57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="../Favicon/apple-icon-60x60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="../Favicon/apple-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="../Favicon/apple-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="../Favicon/apple-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="../Favicon/apple-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="../Favicon/apple-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="../Favicon/apple-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="../Favicon/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="../Favicon/android-icon-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="../Favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="../Favicon/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="../Favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="../Favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
    
            <!-- Embed font -->
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <!-- CSS -->
            <link rel="stylesheet" href="../CSS/navbar.css" />
            <link rel="stylesheet" href="../CSS/form.css">
            <link rel="stylesheet" href="../Boostrap/bootstrap.min.css" />
            <script src="../Boostrap/bootstrap.bundle.min.js"></script>
        </head>
        <body style="height: 10000000px">
            <!-- Header -->
            <header class="header">
            <nav class="navbar navbar-expand-sm px-5 fixed-top pb-0">
            <div class="container">
                <a href="./home.html">
                    <img
                        src="../Images/Logo/Logo_2.png"
                        alt=""
                        class="logo-img"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#idNav"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="idNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="../HTML/home.html" class="nav-link"
                                >TRANG CHỦ</a
                            >
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                href=""
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                >DỊCH VỤ</a
                            >
                            <ul class="dropdown-menu">
                                <li class="dropdown-item">
                                    <a href="../HTML/suckhoe.html" class="nav-link"
                                        >KHÁM THÚ Y</a
                                    >
                                </li>
                                <li class="dropdown-item">
                                    <a href="../HTML/khachsan.html" class="nav-link"
                                        >KHÁCH SẠN CHO THÚ CƯNG</a
                                    >
                                </li>
                                <li class="dropdown-item">
                                    <a href="../HTML/spa.html" class="nav-link"
                                        >GROOMING - CẮT TỈA</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                href=""
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                SẢN PHẨM
                            </a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item" id="food">
                                    THỨC ĂN
                                </li>
                                <li class="dropdown-item" id="clothes">
                                    QUẦN ÁO & PHỤ KIỆN
                                </li>
                                <li class="dropdown-item" id="cosmetic">
                                    MỸ PHẨM & LÀM ĐẸP
                                </li>
                                <li class="dropdown-item" id="cleaning">
                                    DỤNG CỤ VỆ SINH
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="../HTML/lienhe.html" class="nav-link">LIÊN HỆ</a>
                        </li>
                    </ul>
                    <div class="input-group search">
                        <span
                            class="input-group-text bg-white border-black"
                            style="
                                border-top-left-radius: 20px;
                                border-bottom-left-radius: 20px;
                                border-right: none;
                            "
                            ><img src="../Images/Logo/Union.png" alt=""
                        /></span>
                        <input
                            class="form-control border-black"
                            type="text"
                            name=""
                            id=""
                            style="
                                margin-right: 60px;
                                border-left: none;
                                border-top-right-radius: 20px;
                                border-bottom-right-radius: 20px;
                                outline: none;
                                box-shadow: none;
                            "
                            placeholder="Tìm kiếm..."
                        />
                    </div>
                    <div class="header-action">
                        <a href="../HTML/cart.html"
                            ><img
                                src="../Images/Logo/logo giỏ hàng.png"
                                alt=""
                                class="cart-icon"
                        /> <div id="abc+numInCart" class="numInCart text-light rounded-circle bg-danger d-flex justify-content-center" style="width: 30px; 
                        position: absolute; bottom: 54px; right: 200px;">0</div> </a>
                        <a href="" data-bs-toggle="modal" data-bs-target="#formModal"
                            ><img
                                src="../Images/Logo/Logo tài khoản.png"
                                alt=""
                                class="account-icon"
                        /></a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="modal fade modal-lg" id="formModal">
        <div class="modal-dialog">
          <div class="modal-content bg-transparent border-0 ">
            <div class="modal-header border-0">
             
            </div>
            <div class="modal-body ">
              <div class="container-sign" id="container">
                <div class="form-container sign-up">
                    <form >
                        <h1>Tạo tài khoản</h1>
                        <div class="social-icons">
                            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                        </div>
                        <span>Hoặc sử dụng email của bạn để đăng ký</span>
                        <input type="text" placeholder="Name">
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <button>Đăng kí</button>
                    </form>
                </div>
                <div class="form-container sign-in">
                    <form >
                        <h1>Đăng nhập</h1>
                        <div class="social-icons">
                            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                      
                        </div>
                        <span>Hoặc sử dụng mật khẩu email của bạn</span>
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <a href="#">Quên mật khẩu</a>
                        <button>Đăng nhập</button>
                    </form>
                </div>
                <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
                            <h1>Chào mừng bạn trở lại!</h1>
                            <p>Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng của trang web</p>
                            <button class="hidden" id="login">Đăng nhập</button>
                        </div>
                        <div class="toggle-panel toggle-right">
                            <h1>Chào bạn!</h1>
                            <p>Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các tính năng của trang web</p>
                            <button class="hidden" id="register">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="modal-footer border-0">
            </div>
          </div>
        </div>
      </div> 
            </header>
            <!-- Main -->
             
        </body>
        <script type="module" src="../Database/readingDataProducts.js"></script>
    </html>`;

    const productMenu = document.getElementById("productsMenu");
    if (productMenu) {
        productMenu.innerHTML = menuProductsString;
    }
} 
function toggleFooterList(element) {
    const list = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');

    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
        icon.textContent = '-';
    } else {
        list.style.display = 'none';
        icon.textContent = '+';
    }
}

renderMenu();
renderProductMenu();
renderFooter();

// Đoạn code có chứa Boostrap nên cần import thư viện js, css của Boostrap rồi mới chạy

// // Lấy thông tin danh sản phẩm vào giỏ hàng
// const lengthNumCart = localStorage.getItem('length');
// localStorage.setItem('numInCart', lengthNumCart);

// // Thay đổi giá trị trong id = numInCart thành lengthNumCart
// document.querySelector('.numInCart').textContent = lengthNumCart;

// window.parent.postMessage({ numInCart: lengthNumCart }, '*');