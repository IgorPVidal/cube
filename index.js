import { ScreenController } from "./src/controller/screen-controller.js"

export function start() {
  let button = document.getElementById("start-btn")
  button.style.display = "none"
  wrapper.onclick = null
  let screen = new ScreenController()
  wrapper.screen = screen
  screen.play()
  wrapper.focus()
}

window.start = start
