// Render passed page.
const mainContainer = document.querySelector(`.app .main`);

const togglePage = (nextPage) => {
  if (nextPage) {
    mainContainer.innerHTML = ``;
    mainContainer.appendChild(nextPage);
  }
};

export default togglePage;
