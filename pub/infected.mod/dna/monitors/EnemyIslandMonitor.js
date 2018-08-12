var EnemyIslandMonitor = function(init){
    dna.IslandMonitor.call(this, init);
};
sys.extend(EnemyIslandMonitor, dna.IslandMonitor);

EnemyIslandMonitor.prototype.nextIsland = function() {
    this.currentIsland++
    if (this.currentIsland >= lab.game.islands) {
        this.currentIsland = 0
    }
    if (this.currentIsland === lab.myIsland.currentIsland) {
        this.nextIsland()
    }
}

EnemyIslandMonitor.prototype.prevIsland = function() {
    this.currentIsland--
    if (this.currentIsland < 0) {
        this.currentIsland = lab.game.islands - 1
    }
    if (this.currentIsland === lab.myIsland.currentIsland) {
        this.prevIsland()
    }
}

EnemyIslandMonitor.prototype.refocus = function() {
    // don't look at the same island as myIsland
    if (this.currentIsland === lab.myIsland.currentIsland) {
        this.nextIsland()
    }
}

module.exports = EnemyIslandMonitor;
