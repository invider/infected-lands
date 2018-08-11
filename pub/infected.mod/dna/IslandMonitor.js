// declare a dot actor
var IslandMonitor = function(init){
    this.dt = 0;
    this.currentIsland = 0;
    //  copyying parameters from init to this
    sys.augment(this, init);
};


IslandMonitor.prototype.draw = function(){
    ctx.save();
    ctx.strokeStyle = '#00FF10'
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.stroke();
    ctx.restore();
};

module.exports = IslandMonitor;