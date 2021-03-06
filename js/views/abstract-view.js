import ResourceModel from '../models/resource-model';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(ResourceModel.getStringByAlias(`abstractClassError`));
    }
  }

  get template() {
    throw new Error(ResourceModel.getStringByAlias(`abstractMethodError`));
  }

  get element() {
    if (this._element) {
      return this._element;
    }

    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    const template = document.createElement(`template`);
    template.innerHTML = this.template;

    return template.content.firstChild;
  }

  bind() {}
}
