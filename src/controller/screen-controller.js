import { ScreenView } from "../view/screen-view.js"

export class ScreenController {
    //Private
    #screenView;
    #show(element) {
        try {
            this.#screenView.show(element.draw())
        } catch (error) {
            console.log(`Error caught! [${error}]`)
        }
    }

    //Public
    constructor() {
        this.#screenView = new ScreenView()
    }
    async play() {
        this.#show(this)
    }
    clear() {
        this.#screenView.clear()
    }
    draw() {
        return this.#screenView.draw()
    }
}