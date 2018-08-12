let Player = function(st) {
	this.SPEED = env.tuning.actionPoints;
    this.targeting = 0;
    this.targetListener = false;
    this.shopping = 0;
    this.spores = {

    };
    for (var k in dna.Spore.TYPE){
        this.spores[dna.Spore.TYPE[k]] = 10;
    }

    this.x = 2;
    this.y = 0;
    this.islandId = 0;
	this.actionPoints = this.SPEED;

    sys.augment(this, st);

    this.y += this.team;
}

Player.prototype.startTurn = function() {
	this.actionPoints = this.SPEED
};

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
    let island = lab.game.islandMap[this.islandId]
    let walkable = island.isWalkable(tx, ty)
    if (walkable) {
        this.x = tx
        this.y = ty
        this.actionPoints--

        // try to harvest
        island.harvest(tx, ty, this)

        if (this.actionPoints <= 0) {
            lab.game.endTurn()
        }
    } else {
        // try to touch
        let touched = island.touch(tx, ty, this)

        // TODO play denied sfx
    }
}

Player.prototype.addSpore = function(type) {
    // TODO harvest sfx if on main or target screen
    this.spores[type]++
    lib.sfx(res.sfx.pickup, 0.5)
}

Player.prototype.slime = function() {
    let island = lab.game.islandMap[this.islandId]
    island.putSlime(this.x, this.y, this.team)
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

