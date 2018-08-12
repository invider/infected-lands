let Player = function(st) {
	this.SPEED = env.tuning.actionPoints;
    this.targeting = 1;
    this.x = 2;
    this.y = 0;
    this.island = 0;
	this.actionPoints = this.SPEED;

    sys.augment(this, st);

    this.y += this.team;
}

Player.prototype.startTurn = function() {
	this.actionPoints = this.SPEED
}

Player.prototype.move = function(dir) {
    let tx = this.x
    let ty = this.y
    switch(dir) {
    case 1: tx--; break;
    case 2: ty--; break;
    case 3: tx++; break;
    case 4: ty++; break;
    }

    // check the posibility to move
    let walkable = lab.game.islandMap[this.island].isWalkable(tx, ty)
    if (walkable) {
        this.x = tx
        this.y = ty
        this.actionPoints--
        if (this.actionPoints <= 0) {
            lab.game.endTurn()
        }
    } else {
        // TODO play denied sfx
    }
}

Player.prototype.evo = function(dt) {
}

Player.prototype.draw = function() {
    res.terrains.draw(230, 0, 0, 1, 1)

    ctx.beginPath()
    ctx.strokeStyle = env.tuning.team[this.team].color
    ctx.lineWidth = 1/16
    ctx.rect(0, 0, 1, 1)
    ctx.stroke()
}

module.exports = Player

