let username = document.querySelector("#username")
    , email = document.querySelector("#email")
    , password = document.querySelector("#password")
    , ConfirmPassword = document.querySelector("#ConfirmPassword")
    , signUpBtn = document.querySelector("#signUp")

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // if user dose not fill data 
    if (username.value === "" || email.value === "" || password.value === "" || ConfirmPassword.value === "") {
        alert("please fill all data")
    } else {
        // save the data from the user at localStorage
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("password", ConfirmPassword.value);
        // confirm the password after sgin up
        if (password.value === ConfirmPassword.value) {
            setTimeout(() => {
                window.location = "login.html"
            }, 1000);
        } else {
            alert("Make sure that both passwords are the same")
        }
    }
})

// show/hide ====> (password)
let iconPassBtn = document.querySelector("#iconPassBtn");
iconPassBtn.onclick = function () {
    if (iconPassBtn.className === "fas fa-eye-slash") {
        password.setAttribute("type", "text")
        iconPassBtn.className = "fas fa-eye"
    } else {
        password.setAttribute("type", "password")
        iconPassBtn.className = "fas fa-eye-slash"
    }
}
// show/hide ====> (confirm password)
let iconConfirmPassword = document.querySelector("#Confirm");
iconConfirmPassword.onclick = function () {
    if (iconConfirmPassword.className === "fas fa-eye-slash") {
        ConfirmPassword.setAttribute("type", "text")
        iconConfirmPassword.className = "fas fa-eye"
    } else {
        ConfirmPassword.setAttribute("type", "password")
        iconConfirmPassword.className = "fas fa-eye-slash"
    }
}