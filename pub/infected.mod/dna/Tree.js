let Tree = function(island, index) {
    this.solid = true
    this.island = island
    this.index = index
    this.ttl = 100
}

Tree.prototype.turn = function() {
    this.ttl--
}

Tree.prototype.evo = function(dt) {
}

Tree.prototype.draw = function() {
    ctx.fillStyle = '#90D070'
    ctx.fillRect(0.25, 0.25, 0.5, 0.5)
}

Tree.prototype.kill = function() {
    this.island.removePlant(this.index)
    // TODO dead tree sfx
    // TODO create a dead tree and make sideeffects
}

module.exports = Tree

