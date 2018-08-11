// declare a dot actor
var Island = function(init){
    this.dt = 0;
    this.map = [];
    this.islandWidth = 8;
    this.islandHeight = 8;
    this.landTileSize = 32;
    //  copyying parameters from init to this
    sys.augment(this, init);
    for (let x = 0; x < this.islandWidth; x++){
        for (let y = 0; y < this.islandHeight; y++){
            this.map.push(new dna.Land)
        }
    }
};

Island.prototype.evo = function(delta){
};

Island.prototype.landIndex = function(x, y){
    return y * this.islandWidth + x
};

Island.prototype.drawLand = function(x, y){
    let index = this.landIndex(x, y);
    this.map[index].x = x * this.landTileSize;
    this.map[index].y = y * this.landTileSize;
    this.map[index].draw()
};

Island.prototype.draw = function(){
    for (let x = 0; x < this.islandWidth; x++){
        for (let y = 0; y < this.islandHeight; y++){
            this.drawLand(x, y);
        }
    }
};

module.exports = Island;
