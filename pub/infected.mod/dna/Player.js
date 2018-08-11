let Player = function(st) {
    this.x = 2
    this.y = 0
    this.island = 0

    sys.augment(this, st)

    this.y += this.team
}

Player.prototype.evo = function(dt) {
}

Player.prototype.draw = function() {
    res.terrains.draw(230, 0, 0, 1, 1)

    ctx.strokeStyle = env.tuning.teamColors[this.team]
    ctx.lineWidth = 1/32
    ctx.rect(0, 0, 1, 1)
    ctx.stroke()
}

module.exports = Player

