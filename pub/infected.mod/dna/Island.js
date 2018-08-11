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

Island.prototype.getScreenWidth = function(){
    return {x: this.landTileSize * this.params.islandWidth, y: this.landTileSize * this.params.islandHeight}
};

Island.prototype.drawLand = function(x, y){
    let index = this.landIndex(x, y);
    ctx.save();
    ctx.translate(x * this.landTileSize, y * this.landTileSize );
    ctx.scale(this.landTileSize, this.landTileSize);
    this.map[index].draw();
    ctx.restore();
};

Island.prototype.draw = function(){
    for (let x = 0; x < this.params.islandWidth; x++){
        for (let y = 0; y < this.params.islandHeight; y++){
            this.drawLand(x, y);
        }
    }
};

module.exports = Island;
