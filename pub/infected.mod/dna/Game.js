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

    this.teams = []

    // setup env
    env.turn = 1
};
Game.prototype.getIslandByIndex = function(index){
    lib.asserts.assertTrue(this.islandMap[index], `No island with index: ${index}`);
    return this.islandMap[index];
};

Game.prototype.spawn = function() {
    // spawn human players
    let humans = env.tuning.players - env.tuning.computers

    for (let i = 0; i < humans; i++) {
        sys.spawn('Team', {
            name: 'Player ' + (i+1),
            computer: false,
        }, this.teams)
    }

    for (let i = 0; i < env.tuning.computers; i++) {
        sys.spawn('Team', {
            name: 'Computer ' + (i+1),
            computer: true,
        }, this.teams)
    }
};

Game.prototype.genIslandParams = function(){
    for (let i = 0; i < 10000; i++){

        const params = lib.arrayTools.randomElement(res.islands);
        if (this.islandMap.find(o => o.params === params) === undefined){
            return params;
        }
    }
    throw new Exception("Error, cannot find params");
};

Game.prototype.generateIsland = function () {
    let params = this.genIslandParams()
    let island = new dna.Island(params);
    island.params = params;
    console.log("Generating island..");
    this.islandMap.push(island);
};

Game.prototype.nextTurn = function() {
    env.turn++
    log.out('turn #' + env.turn)
}

module.exports = Game;
