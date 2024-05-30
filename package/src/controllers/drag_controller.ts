import { Controller } from "@hotwired/stimulus"
import Sortable from 'sortablejs'


const csrfToken = document.querySelector("[name='csrf-token']").content
export default class extends Controller {
  navigationGroupValue: String
  nodeUpdateUrlValue: string
  sortable: Sortable
  static values = {
    navigationGroup: String,
    nodeUpdateUrl: String
  }

  connect(): void {
    this.sortable = Sortable.create(this.element, {
      handle: '.kubik-navigation-list-node-handle',
      draggable: 'li',
      direction: 'vertical',
      ghostClass: 'kubik-navigation-list-node-ghost',
      group: this.navigationGroupValue,
      fallbackOnBody: true,
      animation: 100,
      onEnd: this.end.bind(this)
    })
  }
  end(event) {
    let data = new FormData()
    data.append('node_id', event.item.dataset.nodeId)
    data.append('position', event.newIndex + 1)
    data.append('parent_id', event.item.parentElement.dataset.nodeId)
    fetch(this.nodeUpdateUrlValue, {
      method: "PATCH",
      headers: {
        "X-CSRF-Token": csrfToken,
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'same-origin',
      body: data,
    })
  }
}
