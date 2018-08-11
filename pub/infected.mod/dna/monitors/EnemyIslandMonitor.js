var EnemyIslandMonitor = function(init){
    dna.IslandMonitor.call(this, init);
};
sys.extend(EnemyIslandMonitor, dna.IslandMonitor);
module.exports = EnemyIslandMonitor;