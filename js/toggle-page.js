// Render passed page.
const mainContainer = document.querySelector(`.app .main`);
let currentPage;

const togglePage = (nextPage) => {
  if (nextPage) {
    if (currentPage) {
      mainContainer.replaceChild(nextPage, currentPage);
    } else {
      mainContainer.appendChild(nextPage);
    }

    currentPage = nextPage;
  }
};

export default togglePage;
