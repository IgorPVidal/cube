
export class ScreenModel {
    //Private
    #width;
    #height;
    #xRad;
    #yRad;
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
    #rotateAxisX(y, z, rad) {
        let yp = y * Math.cos(rad) + z * -Math.sin(rad)
        let zp = y * Math.sin(rad) + z * Math.cos(rad)
        return {y: Math.round(yp), z: Math.round(zp)}
    }
    #rotateAxisY(x, z, rad) {
        let xp = x * Math.cos(rad) + z * Math.sin(rad)
        let zp = x * -Math.sin(rad) + z * Math.cos(rad)
        return {x: Math.round(xp), z: Math.round(zp)}
    }
    #rotatePoints(points) {
        let xz = null
        let yz = null
        for (let i = 0; i < points.length; i++) {
            xz = this.#rotateAxisY(points[i].x, points[i].z, this.#yRad)
            points[i].x = xz.x
            yz = this.#rotateAxisX(points[i].y, xz.z, this.#xRad)
            points[i].y = yz.y
            points[i].z = yz.z
        }
        return points
    }


    //Public
    constructor(width = 320, height = 288) {
        this.#width = width
        this.#height = height
        this.#xRad = 0
        this.#yRad = 0
    }
    getWidth() {
        return this.#width
    }
    getHeight() {
        return this.#height
    }
    // Rotaciona pontos com base nos ângulos armazenados
    // Alinha origem das arestas ao centro da tela
    setEdges(edges) {
        let width = this.#width
        let height = this.#height
        for (let i = 0; i < edges.length; i++) {
            edges[i] = this.#rotatePoints(edges[i])
            edges[i] = this.#translatePoints(edges[i], {x: width/2, y: height/2, z: 0})
        }
        return edges
    }
    rotateUp(rad = Math.PI/100) {
        this.#xRad -= rad
    }
    rotateLeft(rad = Math.PI/100) {
        this.#yRad -= rad
    }
    rotateDown(rad = Math.PI/100) {
        this.#xRad += rad
    }
    rotateRight(rad = Math.PI/100) {
        this.#yRad += rad
    }
}