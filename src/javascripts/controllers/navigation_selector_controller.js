import { Controller } from "@hotwired/stimulus"

const _createEmptyOptionElement = function() {
  const option = document.createElement("option");
  return option
}

const _createIndexOptionElement = function(label, value) {
  const option = document.createElement("option");
  option.text = label
  option.value = value
  return option
}

const _stringParameterize = function(string) {
  if(string) {
    return string.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  }
}

export default class extends Controller {
  static values = {
    resourceType: String,
    itemType: String,
    itemAction: String,
    listingOptionLabel: String,
    listingOption: String,
    resourceSourceUrl: String,
    selectedResource: Object,
    newRecord: Boolean,
  }

  static targets = [
    'advancedSettingsTemplate',
    'headerTemplate',
    'linkTemplate',
    'nodeTemplate',
    'resourceSelectionTemplate',
    'resourceTemplate',
    'resourceTypeSelect',
    'resourceCollectionSelect',
    'resourceTypeSelect',
    'fieldsContainer',
    'itemLookWrapper',
    'itemAdvancedWrapper',
    'linkTitle',
    'linkText',
    'linkSlug',
    'linkLocation',
    'linkLocationWrapper',
    'paramsInput'
  ]
  connect() {
    this._renderResults()
  }

  _renderResults() {
    this.fieldsContainerTarget.innerHTML = '';
    switch(this.itemTypeValue) {
      case 'resource':
        this.fieldsContainerTarget.innerHTML += this.resourceTypeSelectTemplate
        this.fieldsContainerTarget.innerHTML += this.resourceFieldsTemplate
        this.fieldsContainerTarget.innerHTML += this.advancedSettingsTemplate
        break;
      case 'header':
        this.fieldsContainerTarget.innerHTML += this.headerTemplate
        break;
      case 'link':
        this.fieldsContainerTarget.innerHTML += this.linkTemplate
        this.fieldsContainerTarget.innerHTML += this.advancedSettingsTemplate
        break;
      case 'node':
        this.fieldsContainerTarget.innerHTML += this.nodeTemplate
        break;
      default:
        break;
    }
  }

  get advancedSettingsTemplate() {
    return this.advancedSettingsTemplateTarget.innerHTML;
  }

  get resourceFieldsTemplate() {
    return this.resourceTemplateTarget.innerHTML;
  }

  get linkTemplate() {
    return this.linkTemplateTarget.innerHTML;
  }

  get headerTemplate() {
    return this.headerTemplateTarget.innerHTML;
  }

  get nodeTemplate() {
    return this.nodeTemplateTarget.innerHTML;
  }

  get resourceTypeSelectTemplate() {
    return this.resourceSelectionTemplateTarget.innerHTML;
  }

  resourceTypeValueChanged() {
    const url = new URL(this.resourceSourceUrlValue)
    url.search = new URLSearchParams({ resource_type: this.resourceTypeValue}).toString();
    if(this.resourceTypeValue != '') {
      this.resourceCollectionSelectTarget.disabled = true
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(result => {
        result.forEach(r => {
          const slug = typeof(r.slug == 'undefined') ? _stringParameterize(r.title) : r.slug
          this.resourceCollectionSelectTarget.innerHTML += "<option data-item-slug='"+ slug +"' value='" + r.id + "'>" + r.title + "</option>"
        })
        this.resourceCollectionSelectTarget.insertBefore(_createIndexOptionElement(this.listingOptionLabelValue, this.listingOptionValue), this.resourceCollectionSelectTarget.firstChild);
        this.resourceCollectionSelectTarget.insertBefore(_createEmptyOptionElement(), this.resourceCollectionSelectTarget.firstChild);
        if(this.itemActionValue == 'index') {
          this.resourceCollectionSelectTarget.value = '__index__'
        } else {
          this.resourceCollectionSelectTarget.value = this.selectedResourceValue.id
        }
        this.resourceCollectionSelectTarget.disabled = false
      })
    }
  }

  selectedResourceValueChanged() {
    if(this.newRecordValue && this.selectedResourceValue.name) {
      let title = ''
      if(this.selectedResourceValue.name == this.listingOptionLabelValue) {
        title = '-- ' + this.resourceTypeValue + ' Listing --'
        this.linkSlugTarget.readonly = false
      } else {
        title = this.selectedResourceValue.name
        this.linkSlugTarget.readonly = true
      }
      this.linkTitleTarget.value = title
      this.linkTextTarget.value = title
      this.linkSlugTarget.value = _stringParameterize(title)
    }
  }

  resourceTypeChange(e) {
    this.resourceTypeValue = e.target.value
    this.resourceCollectionSelectTarget.disabled = true
    this.resourceCollectionSelectTarget.innerHTML = ''
  }

  itemTypeChange(e) {
    this.itemTypeValue = e.target.value
  }

  itemTypeValueChanged() {
    this._renderResults()
  }

  resourceChange(e) {
    const selectedOption = e.target.options[e.target.selectedIndex]
    this.selectedResourceValue = { name: selectedOption.innerText, id: e.target.value, slug: selectedOption.dataset.slug }
  }
}
