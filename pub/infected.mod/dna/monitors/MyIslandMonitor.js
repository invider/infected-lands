var MyIslandMonitor = function(init){
    dna.IslandMonitor.call(this, init);
};
sys.extend(MyIslandMonitor, dna.IslandMonitor);

MyIslandMonitor.prototype.focus = function() {
    this.currentIsland = lab.game.focus.id
}

module.exports = MyIslandMonitor;
