// Create new DOM-element from passed string.
const getElementFromTemplate = (templateString) => {
  const template = document.createElement(`template`);
  template.innerHTML = templateString;

  return template.content.firstChild;
};

export {getElementFromTemplate};
