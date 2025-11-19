
export class CubeModel {
    // Private
    // Tamanho da aresta do cubo
    #edge
    #color
    #points
    #edges
    

    // Public
    constructor(edge = 100, color = "rgb(94 94 94)") {
        // Cubo deve iniciar centralizado na origem.
        // Por exemplo: O ponto {x: 0, y: 0, z: 0} deve ser movido para {x: -edge/2, y: -edge/2, z: -edge/2}
        this.#edge = edge
        this.#color = color
        let a = -edge/2
        let b = edge-edge/2
        this.#points = [
            {x: a, y: a, z: a},
            {x: b, y: a, z: a},
            {x: a, y: b, z: a},
            {x: a, y: a, z: b},
            {x: b, y: b, z: a},
            {x: a, y: b, z: b},
            {x: b, y: a, z: b},
            {x: b, y: b, z: b},
        ]
        this.#edges = [
            [this.#points[0], this.#points[1]],
            [this.#points[0], this.#points[2]],
            [this.#points[0], this.#points[3]],
            [this.#points[1], this.#points[4]],
            [this.#points[1], this.#points[6]],
            [this.#points[2], this.#points[4]],
            [this.#points[2], this.#points[5]],
            [this.#points[3], this.#points[5]],
            [this.#points[3], this.#points[6]],
            [this.#points[4], this.#points[7]],
            [this.#points[5], this.#points[7]],
            [this.#points[6], this.#points[7]],
        ]
    }
    getEdge() {
        return this.#edge
    }
    getColor() {
        return this.#color
    }
    // Retorna uma cópia da lista de arestas do cubo.
    getEdges() {
        return JSON.parse(JSON.stringify(this.#edges))
    }
    // Retura uma cópia da lista de pontos do cubo.
    getPoints() {
        return JSON.parse(JSON.stringify(this.#points))
    }
}