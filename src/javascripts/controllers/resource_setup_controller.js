import { Controller } from "@hotwired/stimulus"

const _stringParameterize = function(string) {
  if(string) {
    return string.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  }
}

const _buildOptionGroup = function(label) {
  const option = document.createElement('optgroup')
  option.setAttribute('label', label);
}

const _buildOptionElement = function(text, attributes) {
  const option = document.createElement('option')
  option.innerText = text;
  Object.entries(attributes).forEach( item => {
    option.setAttribute(item[0], item[1]);
  });
  return option.outerHTML
}

const csrfToken = document.querySelector("[name='csrf-token']").content
export default class extends Controller {
  static values = {
    resourceType: String,
    itemAction: String,
    params: Object,
    listingOption: String,
    listingOptionLabel: String,
    selectedResource: Object,
    sourceUrl: String,
    scope: String,
    showListingOptions: Boolean,
    showIndividualOptions: { type: Boolean, default: false },
  }

  static targets = [
    'scopeSelection',
    'resourceCollectionSelect',
    'nestedChildrenWrapper',
    'nestedChildrenField',
    'resourceTypeInput',
  ]

  connect() {
    if(this.hasScopeSelectionTarget) {
      const existingScope = [...this.scopeSelectionTarget.options].filter(element => element.dataset.resourceType == this.resourceTypeValue).find(element => element.value == this.scopeValue)
      if(existingScope) {
        this.sourceUrlValue = existingScope.dataset.url
        if(this.hasScopeSelectionTarget) {
          this.scopeSelectionTarget.value = existingScope.value
        }
      }
    }
    if(this.paramsValue.id == '__index__') {
      this.selectedResourceValue = { id: this.paramsValue.id }
    }
    this.listingOptionsUpdate()
  }

  resourceTypeChange(e) {
    const selectedOption = e.target.options[e.target.selectedIndex]
    this.resourceTypeValue = selectedOption.dataset.resourceType
    this.sourceUrlValue = selectedOption.dataset.url
    this.paramsValue = { scope: e.target.value, action: 'index' }
    this.resourceCollectionSelectTarget.disabled = true
    this.resourceCollectionSelectTarget.innerHTML = ''
  }

  resourceChange(e) {
    const selectedOption = e.target.options[e.target.selectedIndex]
    this.selectedResourceValue = { name: selectedOption.innerText, id: e.target.value, slug: selectedOption.dataset.slug }
  }

  resourceTypeValueChanged() {
    if(this.hasResourceTypeInputTarget) {
      this.resourceTypeInputTarget.value = this.resourceTypeValue
    }
  }

  sourceUrlValueChanged() {
    if(this.sourceUrlValue != '') {
      if(this.hasResourceCollectionSelectTarget) {
        this.resourceCollectionSelectTarget.disabled = true
      }
      fetch(this.sourceUrlValue, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(result => {
        this.resourceCollectionSelectTarget.insertAdjacentHTML("beforeend", _buildOptionElement('', { value: '' }))
        this.resourceCollectionSelectTarget.insertAdjacentHTML("beforeend", _buildOptionElement(this.listingOptionLabelValue, { value: this.listingOptionValue }))
        const listGroup = _buildOptionGroup('List')
        result.forEach(r => {
          this.resourceCollectionSelectTarget.insertAdjacentHTML("beforeend", _buildOptionElement(r.title, { value: r.id, 'data-item-slug': r.title }))
        })

        if(this.selectedResourceValue == '__index__') {
          this.resourceCollectionSelectTarget.value = '__index__'
        } else if (this.selectedResourceValue.id) {
          this.resourceCollectionSelectTarget.value = this.selectedResourceValue.id
        } else {
          this.resourceCollectionSelectTarget.value = ''
        }
        this.resourceCollectionSelectTarget.disabled = false
      })
    }
  }

  selectedResourceValueChanged() {
    let resourceName = ''
    if(this.selectedResourceValue.id == '__index__') {
      this.showListingOptionsValue = true
      resourceName = `--- ${this.resourceTypeValue} listing ---`
    } else {
      this.showListingOptionsValue = false
      resourceName = this.paramsValue.name
    }
    this.dispatch(
      'titleChange',
      { detail :
        { content: resourceName  }
      }
    )
  }

  showListingOptionsValueChanged() {
    this.listingOptionsUpdate()
  }

  listingOptionsUpdate() {
    if(this.hasNestedChildrenWrapperTarget) {
      if(this.showListingOptionsValue == true) {
        this.nestedChildrenWrapperTarget.style.display = 'block'
      } else {
        this.nestedChildrenWrapperTarget.style.display = 'none'
      }
    }
  }
}
