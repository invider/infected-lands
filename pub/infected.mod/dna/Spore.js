let Spore = function(type) {
    this.type = type
}

Spore.TYPES = 3
Spore.RED = 1
Spore.GREEN = 2
Spore.BLUE = 3

Spore.prototype.draw = function() {

    switch(this.type) {
        case Spore.RED: ctx.fillStyle = '#ff0000'; break;
        case Spore.GREEN: ctx.fillStyle = '#40ff00'; break;
        case Spore.BLUE: ctx.fillStyle = '#4000ff'; break;
    }
    ctx.strokeStyle = '#404080'

    ctx.beginPath()
    ctx.arc(0.5, 0.5, 0.15, 0, 2*Math.PI, false)
    ctx.fill();
    ctx.lineWidth = 1/16;
    ctx.stroke();
}

module.exports = Spore

