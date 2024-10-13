const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");
const paragraph = document.querySelector(".paragraph--js");

let glasses = 0;

let key = new Date().toLocaleString().slice(0, 10);

if (localStorage.getItem(key)) {
  glasses = parseInt(localStorage.getItem(key));
}
setInterval(() => {
  if (key !== new Date().toLocaleString().slice(0, 10)) {
    key = new Date().toLocaleString().slice(0, 10);
    setCounter(0);
    glasses = 0;
  }
}, 1000 * 60);

const setCounter = (value) => {
  paragraph.innerHTML = value;
  localStorage.setItem(key, value);
};

setCounter(glasses);

addButton.addEventListener("click", () => {
  glasses = glasses + 1;
  setCounter(glasses);
});

removeButton.addEventListener("click", () => {
  if (glasses >= 1) {
    glasses = glasses - 1;
    setCounter(glasses);
  }
});



