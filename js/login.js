let username = document.querySelector("#username")
    , password = document.querySelector("#password")
    , signInBtn = document.querySelector("#signIn")

// get user data
let getUsername = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // if user dose not fill data 
    if (username.value === "" || password.value === "") {
        alert("please fill all data")
    } else {
        // save the data from the user at localStorage
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        // sure that the data is correct or not
        if (getUsername && getUsername.trim() === username.value.trim() && getPassword && getPassword.trim() === password.value) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1000);
        } else {
            alert("username or password is not correct")
        }
    }
})
// show / hide password
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