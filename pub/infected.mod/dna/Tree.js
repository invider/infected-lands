let Tree = function() {
    this.solid = true
}

Tree.prototype.draw = function() {
    ctx.fillStyle = '#90D070'
    ctx.fillRect(0.25, 0.25, 0.5, 0.5)
}

module.exports = Tree

