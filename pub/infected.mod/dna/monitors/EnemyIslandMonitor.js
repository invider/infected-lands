var EnemyIslandMonitor = function(init){
    dna.IslandMonitor.call(this, init);
};
sys.extend(EnemyIslandMonitor, dna.IslandMonitor);

EnemyIslandMonitor.prototype.nextIsland = function() {
    this.currentIsland++
    if (this.currentIsland >= lab.game.islands) {
        this.currentIsland = 0
    }
}

EnemyIslandMonitor.prototype.prevIsland = function() {
    this.currentIsland--
    if (this.currentIsland < 0) {
        this.currentIsland = lab.game.islands - 1
    }
}

module.exports = EnemyIslandMonitor;
