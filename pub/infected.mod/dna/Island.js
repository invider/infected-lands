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
        this.drop(lib.math.rndi(dna.Spore.TYPES))
    }
};

Island.prototype.drop = function(type) {
    let place = lib.math.rndi(this.params.islandWidth * this.params.islandHeight)
    this.plant[place] = new dna.Spore(type)
}

Island.prototype.evo = function(delta){
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
    return 0 <= x && x < this.params.islandWidth && 0 <= y && y < this.params.islandHeight
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
        if (t.player.island === island.id) {
            island.drawTile(t.player.x, t.player.y, t.player)
        }
    })

    ctx.restore()
};

module.exports = Island;
