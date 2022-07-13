import { Controller } from "@hotwired/stimulus"


const csrfToken = document.querySelector("[name='csrf-token']").content
export default class extends Controller {
  static values = {
  }

  connect() {
  }
}
