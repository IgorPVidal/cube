
export class ScreenModel {
    //Private
    #width;
    #height;
    // Translada um ponto para uma direção
    #translate(point, direction) {
        point.x += direction.x
        point.y += direction.y
        point.z += direction.z
    }
    // Retorna conjunto de pontos transladados para uma direção
    #translatePoints(points, direction) {
        for (let i = 0; i < points.length; i++) {
            this.#translate(points[i], direction)
        }
        return points
    }


    //Public
    constructor(width = 320, height = 288) {
        this.#width = width
        this.#height = height
    }
    getWidth() {
        return this.#width
    }
    getHeight() {
        return this.#height
    }
    // Alinha origem das arestas ao centro da tela
    setEdges(edges) {
        let width = this.#width
        let height = this.#height
        for (let i = 0; i < edges.length; i++) {
            edges[i] = this.#translatePoints(edges[i], {x: width/2, y: height/2, z: 0})
        }
        return edges
    }
}