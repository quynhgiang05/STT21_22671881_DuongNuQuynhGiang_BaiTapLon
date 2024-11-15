function formLogin() {
    const loginString =  `
    <link rel="stylesheet" href="../.CSS/bootstrap.min.css">
    <script src="../../JS/bootstrap.bundle.min.js"></script>
    <span  class="bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#formModal"
        ><img class="mt-2" src="../../IMG/Logo/Logo-user.png" alt=""
    /></span>`;
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.innerHTML = loginString;
    }
}  

formLogin();

