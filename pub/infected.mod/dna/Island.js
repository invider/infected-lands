/**
 *
 * @param params
 * @constructor
 */
var Island = function(params){
    this.params = params;
    this.map = [];
    this.landTileSize = 32;
    for (let x = 0; x < this.params.islandWidth; x++){
        for (let y = 0; y < this.params.islandHeight; y++){
            this.map.push(new dna.Land())
        }
    }
};

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

Island.prototype.drawLand = function(x, y){
    let index = this.landIndex(x, y);
    this.drawTile(x, y, this.map[index])
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
