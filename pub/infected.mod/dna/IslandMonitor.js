// declare a dot actor
var IslandMonitor = function(init){
    this.dt = 0;
    this.currentIsland = 0;
    //  copyying parameters from init to this
    sys.augment(this, init);
};


IslandMonitor.prototype.draw = function(){
    ctx.beginPath();
    ctx.strokeStyle = '#00FF10';
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    var island = lab.game.getIslandByIndex(this.currentIsland)
    island.x = this.x;
    island.y = this.y;
    island.draw()
};

module.exports = IslandMonitor;
