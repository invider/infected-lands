/**
 *
 * @param params
 * @constructor
 */
var Island = function(params){
    this.params = params;
    this.map = [];
    this.plant = [];

    this.landTileSize = 32;
    for (let x = 0; x < this.params.islandWidth; x++){
        for (let y = 0; y < this.params.islandHeight; y++){
            this.map.push(new dna.Land())
        }
    }

    for (let i = 0; i < 15; i++) {
        this.dropSpore(lib.math.rndi(dna.Spore.TYPES))
    }

    for (let i = 0; i < 4; i++) {
        this.dropTree(dna.Tree)
    }
};

Island.prototype.dropSpore = function(type) {
    let place = lib.math.rndi(this.params.islandWidth * this.params.islandHeight)
    this.plant[place] = new dna.Spore(type, this, place)
}

Island.prototype.dropTree = function(cons) {
    let index = lib.math.rndi(this.params.islandWidth * this.params.islandHeight)
    this.plant[index] = new cons({
        island: this,
        index: index,
    })
}

Island.prototype.plantTree = function(x, y, cons) {
    let index = this.landIndex(x, y)
    this.plant[index] = new cons({
        island: this,
        index: index,
    })
    this.plant[index].planted();
};

Island.prototype.removePlant = function(index) {
    this.plant[index] = false
};

Island.prototype.evo = function(delta){
};

Island.prototype.turn = function() {
    this.plant.forEach(p => {
        if (p && p.turn) p.turn()
    })
};

Island.prototype.landIndex = function(x, y){
    return y * this.params.islandWidth + x
};

Island.prototype.getScreenSize = function(x, y){
    x = (x === undefined ? this.params.islandWidth: x);
    y = (y === undefined ? this.params.islandHeight: y);
    return {x: this.landTileSize * x, y: this.landTileSize * y}
};



Island.prototype.drawTile = function(x, y, e) {
    ctx.save();

    ctx.translate(x * this.landTileSize, y * this.landTileSize );
    ctx.scale(this.landTileSize, this.landTileSize);
    e.draw();

    ctx.restore();
};

Island.prototype.isWalkable = function(x, y){
    let walkable = 0 <= x && x < this.params.islandWidth && 0 <= y && y < this.params.islandHeight
    if (walkable) {
        let plant = this.plant[this.landIndex(x, y)]
        if (plant && plant.solid) return false
    }
    return walkable
};


Island.prototype.isTargetable = function(x, y){
    return 0 <= x && x < this.params.islandWidth && 0 <= y && y < this.params.islandHeight
};

Island.prototype.drawLand = function(x, y){
    let index = this.landIndex(x, y);
    this.drawTile(x, y, this.map[index])

    if (this.plant[index]) {
        // we have something growing here
        this.drawTile(x, y, this.plant[index])
    }
};

Island.prototype.adjustCoordinates = function(x, y){
    if (x >= this.params.islandWidth){
        x = this.params.islandWidth - 1;
    }
    if (x < 0){
        x = 0;
    }
    if (y >= this.params.islandHeight){
        y = this.params.islandHeight - 1;
    }
    if (y < 0){
        y = 0;
    }
    return {
        x:x,
        y:y
    }
};

Island.prototype.harvest = function(x, y, player) {
    let ix = this.landIndex(x, y)
    let plant = this.plant[ix]
    if (plant && plant.harvestable) {
        player.addSpore(plant.type)
        this.plant[ix] = false
    }
}

Island.prototype.draw = function(){
    ctx.save()

    // draw land
    for (let x = 0; x < this.params.islandWidth; x++){
        for (let y = 0; y < this.params.islandHeight; y++){
            this.drawLand(x, y);
        }
    }

    // TODO draw slime
    // TODO draw plants
    
    // draw artifacts

    // draw players
    let island = this
    lab.game.team.forEach(function (t) {
        if (t.player.islandId === island.id) {
            island.drawTile(t.player.x, t.player.y, t.player)
        }
    })

    ctx.restore()
};

module.exports = Island;
