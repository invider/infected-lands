let Player = function(st) {
    this.x = 2
    this.y = 0
    this.island = 0

    sys.augment(this, st)

    this.y += this.team
}

Player.prototype.move = function(dir) {
    switch(dir) {
    case 1: this.x--; if (this.x < 0) this.x = 0; break;
    case 2: this.y--; if (this.y < 0) this.y = 0; break;
    case 3: this.x++; if (this.x >= 10) this.x = 9; break;
    case 4: this.y++; if (this.y >= 10) this.y = 9; break;
    }
}

Player.prototype.evo = function(dt) {
}

Player.prototype.draw = function() {
    res.terrains.draw(230, 0, 0, 1, 1)

    ctx.beginPath()
    ctx.strokeStyle = env.tuning.teamColors[this.team]
    ctx.lineWidth = 1/16
    ctx.rect(0, 0, 1, 1)
    ctx.stroke()
}

module.exports = Player

