// declare a dot actor
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

Island.prototype.drawLand = function(x, y){
    let index = this.landIndex(x, y);
    this.map[index].x = this.x + x * this.landTileSize;
    this.map[index].y = this.y + y * this.landTileSize;
    this.map[index].draw()
};

Island.prototype.draw = function(){
    for (let x = 0; x < this.params.islandWidth; x++){
        for (let y = 0; y < this.params.islandHeight; y++){
            this.drawLand(x, y);
        }
    }
};

module.exports = Island;
