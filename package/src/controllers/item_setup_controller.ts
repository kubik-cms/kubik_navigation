import { Controller } from "@hotwired/stimulus"

const _stringParameterize = function(string) {
  if(string) {
    return string.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  }
}
export default class extends Controller {
  titleValue: string
  newRecordValue: Boolean
  hasTitleTarget: Boolean
  titleTarget: HTMLInputElement
  textTarget: HTMLInputElement
  slugTarget: HTMLInputElement

  static values = {
    title: String,
    newRecord: Boolean,
  }

  static targets = [
    'title',
    'text',
    'slug',
  ]


  titleValueChanged(): void {
    if(this.hasTitleTarget && this.newRecordValue) {
      this.titleTarget.value = this.titleValue
      this.textTarget.value = this.titleValue
      this.slugTarget.value = _stringParameterize(this.titleValue)
    }
  }

  updateTitle({ detail: { content } }) {
    this.titleValue = content
  }

}
