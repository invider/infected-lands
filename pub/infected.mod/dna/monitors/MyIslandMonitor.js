var MyIslandMonitor = function(init){
    dna.IslandMonitor.call(this, init);
};
sys.extend(MyIslandMonitor, dna.IslandMonitor);
module.exports = MyIslandMonitor;