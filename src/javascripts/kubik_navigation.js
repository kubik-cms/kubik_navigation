import { Application } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo"
import NavigationSelectorController from "./controllers/navigation_selector_controller.js"
import ActiveSelectController from "./controllers/active_select_controller.js"
import DragController from "./controllers/drag_controller.js"
import ResourceSetupController from "./controllers/resource_setup_controller.js"
import ItemSetupController from "./controllers/item_setup_controller.js"

window.Stimulus = Application.start()
Stimulus.register("active-select", ActiveSelectController)
Stimulus.register("navigation-selector", NavigationSelectorController)
Stimulus.register("resource-setup", ResourceSetupController)
Stimulus.register("item-setup", ItemSetupController)
Stimulus.register("drag", DragController)
