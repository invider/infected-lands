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

    // setup env
    env.turn = 1
};
Game.prototype.getIslandByIndex = function(index){
    lib.asserts.assertTrue(this.islandMap[index], `No island with index: ${index}`);
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

Game.prototype.nextTurn = function() {
    env.turn++
    log.out('turn #' + env.turn)
}

module.exports = Game;
