let mainScreens;
let currentPage;
const mainContainer = document.querySelector(`.app .main`);
const templates = document.getElementById(`templates`);


if (`content` in templates) {
  mainScreens = templates.content.querySelectorAll(`.main`);
} else {
  mainScreens = templates.querySelectorAll(`.main`);
}

const toggleScreen = (screenNumber) => {
  if (screenNumber >= 0 && screenNumber < mainScreens.length) {
    currentPage = screenNumber;
    mainContainer.innerHTML = mainScreens[screenNumber].innerHTML;
  }
};

toggleScreen(0);

document.addEventListener(`keydown`, (event) => {
  if (event.altKey && event.keyCode === 39) {
    event.preventDefault();
    toggleScreen(currentPage + 1);
  }

  if (event.altKey && event.keyCode === 37) {
    event.preventDefault();
    toggleScreen(currentPage - 1);
  }
});
