import { ScreenModel } from "../model/screen-model.js";
import { ScreenView } from "../view/screen-view.js"
import { CubeController } from "./cube-controller.js";

export class ScreenController {
    //Private
    #screenModel;
    #screenView;
    #cubeController;
    #playing;
    #show(element) {
        try {
            this.#screenView.show(element.draw())
        } catch (error) {
            console.log(`Error caught! [${error}]`)
        }
    }
    #updateScreen() {
        let edges = this.#screenModel.setEdges(this.#cubeController.getEdges())
        this.clear()
        this.#screenView.drawEdges(edges, this.#cubeController.getColor())
    }

    //Public
    constructor(width = 320, height = 288) {
        this.#screenModel = new ScreenModel(width, height)
        this.#screenView = new ScreenView(width, height)
        this.#cubeController = new CubeController()
        this.#playing = true
    }
    async play() {
        this.#show(this)
        console.log("start")
        while (this.#playing) {
            this.#updateScreen()
            this.#playing = false
        }
        console.log("stop")
    }
    clear() {
        this.#screenView.clear()
    }
    draw() {
        return this.#screenView.draw()
    }
}