import { CubeModel } from "../model/cube-model.js";

export class CubeController {
    // Private
    #cubeModel

    // Public
    constructor(edge = 100, color = "rgb(94 94 94)") {
        this.#cubeModel = new CubeModel(edge, color)
    }
    getEdge() {
        return this.#cubeModel.getEdge()
    }
    getColor() {
        return this.#cubeModel.getColor()
    }
    getEdges() {
        return this.#cubeModel.getEdges()
    }
    getPoints() {
        return this.#cubeModel.getPoints()
    }
}