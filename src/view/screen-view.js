
export class ScreenView {
    // Private
    #pixelBaseColor
    #canvas
    #ctx
    #createCanvas(width, height) {
        let canvas = document.createElement('canvas')
        canvas.id = "canvas"
        canvas.width = width
        canvas.height = height
        canvas.style.border = "1px dashed black"
        canvas.innerText = "canvas"  
        return canvas
    }
    #startCanvas() {
        this.#drawBackground()
    }
    #drawBackground() {
        this.#drawRectangle(0, 0, this.#canvas.width, this.#canvas.height, this.#pixelBaseColor)
    }
    #drawRectangle(x, y, width, height, color) {
        this.#ctx.fillStyle = color
        this.#ctx.fillRect(x, y, width, height)
    }

    // Public
    constructor(width = 320, height = 288, pixelBaseColor = "rgb(191 200 176)") {
        this.#pixelBaseColor = pixelBaseColor
        this.#canvas = this.#createCanvas(width, height)
        if (this.#canvas.getContext) {
            this.#ctx = this.#canvas.getContext("2d")
            this.#startCanvas()
        } else {
            console.log("Warning! Canvas not supported.")
        }
    }
    clear() {
        this.#drawBackground()
    }
    draw() {
        return this.#canvas
    }
    drawEdges(edges, color) {
        let edge = null
        for (let i = 0; i < edges.length; i++) {
            edge = edges[i]
            this.#ctx.beginPath()
            this.#ctx.moveTo(edge[0].x, edge[0].y)
            this.#ctx.lineTo(edge[1].x, edge[1].y)
            this.#ctx.strokeStyle = color
            this.#ctx.stroke()
        }
    }
    // fixme talvez adicionar elementos na página não precisaria ser feito pela ScreenView
    show(element) {
        if (element.id) {
            let old = document.getElementById(element.id)
            if (old) {
                wrapper.removeChild(old)
            }
            wrapper.append(element)
        } else {
            throw new Error(`Expected element.id, received: ${element.id}`); 
        }
    }
    // fixme talvez remover elementos da página não precisaria ser feito pela ScreenView
    remove(id) {
        let element = document.getElementById(id)
        if (element) {
            wrapper.removeChild(element)
        }
    }
}
