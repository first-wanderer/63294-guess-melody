import {getStringByAlias} from '../strings';
import getElementFromTemplate from './../get-element-from-template';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(getStringByAlias(`abstractClassError`));
    }
  }

  get template() {
    throw new Error(getStringByAlias(`abstractMethodError`));
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
    return getElementFromTemplate(this.template);
  }

  bind() {}
}
