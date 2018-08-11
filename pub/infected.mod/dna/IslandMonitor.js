// declare a dot actor
var IslandMonitor = function(init){
    this.dt = 0;
    this.currentIsland = 0
    //  copyying parameters from init to this
    sys.augment(this, init);
};


IslandMonitor.prototype.draw = function(){
    this.drawLand(x, y);
};

module.exports = IslandMonitor;