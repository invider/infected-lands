// declare a dot actor
var Game = function(init){
    //  copyying parameters from init to this
    sys.augment(this, init);

    this.dt = 0;
    this.islandMap = [];
    this.islands = env.tuning.islands;
    for (let i = 0; i < this.islands; i++){
        this.generateIsland()
    }

};
Game.prototype.getIslandByIndex = function(index){
    asserts.true(this.islandMap[index], `No island with index: ${index}`);
    return this.islandMap[index];
};

Game.prototype.spawn = function() {
    sys.spawn('Player', {}, 'game')
}

Game.prototype.generateIsland = function () {
    let island = new dna.Island();
    console.log("Generating island..");
    this.islandMap.push(island);
};

module.exports = Game;