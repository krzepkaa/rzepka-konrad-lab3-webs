class Photoshop{
    constructor(canvasId){
        this.brushShape = 'round'
        this.brushSize = '10px'
        this.brushColor = 'black'
        this.setCanvas(canvasId)
        
    }
    setBrushShape(shape){
        this.brushShape = shape
    }
    setBrushSize(size){
        this.brushSize = size
    }
    setBrushColor(color){
        this.brushColor = color
    }
    setCanvas(canvasId){
        this.canvas = document.querySelector('#' + canvasId)
        this.canvasConfig = {
            top: 100,
            left: 0
        }
        
        this.canvas.style.top = this.canvasConfig.top + 'px';
        this.canvas.style.left = this.canvasConfig.left + 'px';
        
        
    }
}