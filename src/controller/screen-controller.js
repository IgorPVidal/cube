import { ScreenModel } from "../model/screen-model.js";
import { ScreenView } from "../view/screen-view.js"
import { CubeController } from "./cube-controller.js";

export class ScreenController {
    //Private
    #screenModel;
    #screenView;
    #cubeController;
    #playing;
    #controls;
    #show(element) {
        try {
            this.#screenView.show(element.draw())
        } catch (error) {
            console.log(`Error caught! [${error}]`)
        }
    }
    #executeControls() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("resolved")
            }, 20)
            Object.keys(this.#controls).forEach(key => {
                if (this.#controls[key].pressed) {
                    this.#controls[key].func()
                }
            })
        })
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
        const controls = {
            "w": {pressed: false, func: () => {this.rotateUp()}},
            "a": {pressed: false, func: () => {this.rotateLeft()}},
            "s": {pressed: false, func: () => {this.rotateDown()}},
            "d": {pressed: false, func: () => {this.rotateRight()}},
            "p": {pressed: false, func: () => {this.#playing = false}}
        }
        this.#controls = controls
    }
    async play() {
        this.#show(this)
        console.log("start")
        while (this.#playing) {
            this.#updateScreen()
            const result = await this.#executeControls()
        }
        console.log("stop")
    }
    clear() {
        this.#screenView.clear()
    }
    draw() {
        return this.#screenView.draw()
    }
    updateKeyDown(key) {
        if (this.#controls[key]) {
            this.#controls[key].pressed = true
        }
    }
    updateKeyUp(key) {
        if (this.#controls[key]) {
            this.#controls[key].pressed = false
        }
    }
    rotateUp() {
        this.#screenModel.rotateUp()
    }
    rotateLeft() {
        this.#screenModel.rotateLeft()
    }
    rotateDown() {
        this.#screenModel.rotateDown()
    }
    rotateRight() {
        this.#screenModel.rotateRight()
    }
}