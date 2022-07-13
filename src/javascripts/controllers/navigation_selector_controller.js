import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    itemType: String
  }

  static targets = [
    'advancedSettingsTemplate',
    'headerTemplate',
    'linkTemplate',
    'nodeTemplate',
    'resourceSelectionTemplate',
    'resourceTemplate',
    'fieldsContainer',
  ]

  connect() {
    this._renderResults()
  }

  _renderResults() {
    this.fieldsContainerTarget.innerHTML = '';
    switch(this.itemTypeValue) {
      case 'resource':
        this.fieldsContainerTarget.insertAdjacentHTML("beforeend", this.navTemplate('resourceSelectionTemplate'));
        this.fieldsContainerTarget.insertAdjacentHTML("beforeend", this.navTemplate('resourceTemplate'));
        this.fieldsContainerTarget.insertAdjacentHTML("beforeend", this.navTemplate('advancedSettingsTemplate'));
        break;
      case 'header':
        this.fieldsContainerTarget.insertAdjacentHTML("beforeend", this.navTemplate('headerTemplate'));
        break;
      case 'link':
        this.fieldsContainerTarget.insertAdjacentHTML("beforeend", this.navTemplate('linkTemplate'));
        this.fieldsContainerTarget.insertAdjacentHTML("beforeend", this.navTemplate('advancedSettingsTemplate'));
        break;
      case 'node':
        this.fieldsContainerTarget.insertAdjacentHTML("beforeend", this.navTemplate('nodeTemplate'));
        break;
    }
  }

  navTemplate(template) {
    return this[template+'Target'].innerHTML;
  }

  itemTypeChange(e) {
    this.itemTypeValue = e.target.value;
  }

  itemTypeValueChanged() {
    this._renderResults()
  }

}
