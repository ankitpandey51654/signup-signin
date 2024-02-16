let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let para = document.querySelector("p");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0"; // it will hide the name field
  title.innerHTML = "Sign In";
  para.innerHTML = "";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px"; // it will hide the name field
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};
