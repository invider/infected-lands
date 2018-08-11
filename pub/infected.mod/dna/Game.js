// declare a dot actor
var Game = function(init){
    this.dt = 0;
    this.islandMap = [];
    this.islands = 10;
    //  copyying parameters from init to this
    sys.augment(this, init);
    for (let i=0; i<this.islands; i++){
        this.generateIsland()
    }
};

Game.prototype.generateIsland = function () {
    let island = new dna.Island();
    this.islandMap.push(island);
};

module.exports = Game;