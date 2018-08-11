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

    this.team = []

    // setup env
    env.turn = 1
};
/**
 *
 * @param index
 * @returns {Island}
 */
Game.prototype.getIslandByIndex = function(index){
    lib.asserts.assertTrue(this.islandMap[index], `No island with index: ${index}`);
    return this.islandMap[index];
};


Game.prototype.getIslandsMaxSizes = function(){
    let res = {
        x: 0,
        y: 0
    };
    this.islandMap.forEach(o => {
        let size = o.getScreenWidth();
        res.x = Math.max(res.x, size.x);
        res.y = Math.max(res.y, size.y);
    })
    return res;
};


Game.prototype.spawn = function() {
    // spawn teams
    sys.spawn('Team', {
        name: 'Team 1',
    }, 'game')
    sys.spawn('Team', {
        name: 'Team 2',
    }, 'game')
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
