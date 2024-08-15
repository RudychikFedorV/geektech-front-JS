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

// Lesson 3
const content = document.querySelector(".content");
content.onclick = (event) => {
  if (event.target.tagName.toLowerCase() === "button") {
    if (event.target.classList.contains("red")) {
      event.target.classList.remove("red");
    } else {
      event.target.classList.add("red");
    }
  }
};
const newButton = document.createElement("button");
content.append(newButton);

// tab slider
const tabContentBlocks = document.querySelectorAll(".tab-slider-block");
const tabs = document.querySelectorAll(".tab-slider-item");
const tabParent = document.querySelector(".tab-slider-items");

const hideTabContent = () => {
  tabContentBlocks.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tab-slider-item__active");
  });
};
const showTabContent = (index = 0) => {
  tabContentBlocks[index].style.display = "block";
  tabs[index].classList.add("tab-slider-item__active");
};
hideTabContent();
showTabContent();

tabParent.onclick = (event) => {
  if (event.target.classList.contains("tab-slider-item")) {
    tabs.forEach((item, index) => {
      if (event.target === item) {
        hideTabContent();
        showTabContent(index);
      }
    });
  }
};

// Lesson 4
// CRUD - POST, GET, PATCH, DELETE - методы запросов
const btn4 = document.querySelector(".btn");

btn4.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "json/data.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();

  request.onload = () => {
    const data = JSON.parse(request.response);
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".age").innerHTML = data.age;
  };
};

// slider
const slider = document.querySelector("#slider");
const sliderWrapper = slider.querySelector(".slider-wrapper");
let slide = 1;
let slideMax = document.querySelectorAll('.slider-slide').length;
let sliderWidth = 1000;
let sliderHeight = 600;

const slideGo = (needSlide) => {
  slide = needSlide;
  sliderWrapper.style.left = (slide - 1) * sliderWidth * -1 + "px";
};

slider.querySelector(".slider-prev").onclick = () => {
  if (slide != 1) {
    slideGo(slide - 1);
  }
};
slider.querySelector(".slider-next").onclick = () => {
  if (slide != slideMax) {
    slideGo(slide + 1);
  }
};
// Lesson 5
