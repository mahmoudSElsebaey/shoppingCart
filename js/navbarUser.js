let links = document.querySelector("#links"),
  userInfo = document.querySelector("#userInfo"),
  userData = document.querySelector("#user"),
  logOutBtn = document.querySelector("#logOut");

//////////////////// remove the links (sign in & sign up) from the home page ==> and return the user info (name & log out option)
if (localStorage.getItem("username")) {
  links.remove();
  userInfo.style.display = "flex";
  userData.innerHTML =
    '<i class="fas fa-user-circle"></i>' +
    " " +
    localStorage.getItem("username");
}
//////////////////////////// logout and then go to the login page
logOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
});
