import { Controller } from "@hotwired/stimulus"
import { template } from 'lodash'

export default class extends Controller {
  static values = {
    resource_type: String,
    item_type: String,
    resourceSourceUrl: String,
  }

  static targets = [
    'resourceTypeSelect',
    'resourceFieldsTemplate',
    'resourceCollectionSelect',
    'resourceTypeSelect',
    'fieldsContainer',
  ]
  connect() {
    this._renderResults()
  }

  _renderResults() {
    switch(this.itemTypeValue) {
      case 'resource':
        this.fieldsContainerTarget.innerHTML = this.resourceFieldsTemplate()
        break;
      default:
        this.fieldsContainerTarget.innerHTML = '';
        break;
    }
  }

  get resourceFieldsTemplate() {
    return template(this.resourceFieldsTemplateTarget.innerHTML);
  }

  resourceTypeValueChanged() {
    const url = new URL(this.resourceSourceUrlValue)
    url.search = new URLSearchParams({ resource_type: this.resourceTypeValue}).toString();
    if(this.resourceTypeValue != '') {
      this.resourceCollectionSelectTarget.disabled = true
      fetch(url)
      .then(res => res.json())
      .then(result => {
        result.forEach(r => {
          this.resourceCollectionSelectTarget.innerHTML += "<option value='" + r.id + "'>" + r.title + "</option>"
        })
      })
      this.resourceCollectionSelectTarget.disabled = false
    }
  }
  itemTypeValueChanged() {
    this._renderResults()
  }
  resourceTypeChange(e) {
    this.resourceTypeValue = e.target.value
  }
  itemTypeChange(e) {
    this.itemTypeValue = e.target.value
  }
}

