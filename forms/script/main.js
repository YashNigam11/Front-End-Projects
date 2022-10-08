let pic1 = document.querySelector(".pic1");
let div1 = document.querySelector("#picture1");
let head = document.querySelector("h1");
let div2 = document.querySelector("#picture2");
let div3 = document.querySelector("#picture3");
let div4 = document.querySelector("#picture4");
div1.addEventListener("click", () => {
  pic1.src = "assets/image 2.jpg";
  head.innerText = `We make healing simple`;
  div1.style.backgroundColor = "white";
  head.style.color = "white";
});
div3.addEventListener("click", () => {
  pic1.src = "assets/image 6.jpg";
  head.innerText = `The missing link to health is here`;
  div3.style.backgroundColor = "white";
  head.style.color = "white";
});
div2.addEventListener("click", () => {
  pic1.src = "assets/image 7.jpg";
  head.innerText = `This is healthcare reinvented.`;
  div2.style.backgroundColor = "white";
  head.style.color = "white";
});
div4.addEventListener("click", () => {
  pic1.src = "assets/image 5.jpg";
  head.innerText = `Affordable Access to Lifestyle Medicine`;
  div4.style.backgroundColor = "white";
  head.style.color = "white";
});
let form = document.querySelector("#form_elements");
let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let join = document.querySelector("#join-btn");

join.addEventListener("click", () => {
  if (userName.value === " " || userName.value == null) {
  }
  if ((password.value.length) < 8) {
    alert("Please Fill the Details.")
    return false
   
  }
  
});
