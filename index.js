import { ScreenController } from "./src/controller/screen-controller.js"

export function start() {
  let button = document.getElementById("start-btn")
  button.style.display = "none"
  wrapper.onclick = null
  let screen = new ScreenController()
  wrapper.screen = screen
  wrapper.addEventListener("keypress", checkKeyDown, false)
  wrapper.addEventListener("keyup", checkKeyUp, false) 
  screen.play()
  wrapper.focus()
}
function checkKeyDown(evt) {
  evt.preventDefault()
  wrapper.screen.updateKeyDown(evt.key.toLowerCase())
}
function checkKeyUp(evt) {
  evt.preventDefault()
  wrapper.screen.updateKeyUp(evt.key.toLowerCase())
}

window.start = start
