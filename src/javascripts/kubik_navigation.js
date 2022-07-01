import { Application } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo"
import NavigationSelectorController from "./controllers/navigation_selector_controller.js"

window.Stimulus = Application.start()
Stimulus.register("navigation-selector", NavigationSelectorController)
