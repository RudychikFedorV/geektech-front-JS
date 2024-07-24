// lesson 1
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

// Lesson 2

const parentBlock = document.querySelector(".parent-block");
const childBlock = document.querySelector(".child-block");

let positionX = 0;
let positionY = 0;

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
  if (positionX < offsetWidth && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX === offsetWidth && positionY < offsetHeight) {
    positionY++;
    childBlock.style.top = `${positionY}px`;
  } else if (positionY === offsetHeight && positionX > 0) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX === 0 && positionY > 0) {
    positionY--;
    childBlock.style.top = `${positionY}px`;
  }
  requestAnimationFrame(moveBlock);
};

moveBlock();
