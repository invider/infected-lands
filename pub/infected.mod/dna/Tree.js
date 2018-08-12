let Tree = function(st) {
    this.solid = true
    this.ttl = -1;
    this.fillstyle = "#333444";
    sys.augment(this, st)
}

Tree.prototype.turn = function() {
    this.ttl--
    if (this.ttl === 0) this.kill()
}

Tree.prototype.evo = function(dt) {
}

Tree.prototype.draw = function() {
    ctx.fillStyle = this.fillstyle;
    ctx.fillRect(0.25, 0.25, 0.5, 0.5)
}

Tree.prototype.kill = function() {
    this.island.removePlant(this.index)
    // TODO dead tree sfx
    // TODO create a dead tree and make sideeffects
}

module.exports = Tree

