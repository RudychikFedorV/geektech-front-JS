// https://www.youtube.com/watch?v=L5sKH_8_t4U

const phoneInput = document.querySelector("#phoneInput");
const btn = document.querySelector("#phoneCheck");
const phoneResult = document.querySelector("#phoneResult");

const phoneRegExp = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
btn.addEventListener("click", () => {
  if (phoneRegExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "ok";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "not ok";
    phoneResult.style.color = "red";
  }
});
