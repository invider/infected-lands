// declare a dot actor
var IslandMonitor = function(init){
    this.dt = 0;
    this.fontSize = 30;
    this.currentIsland = 0;
    //  copyying parameters from init to this
    sys.augment(this, init);
};


IslandMonitor.prototype.draw = function(){
    var island = lab.game.getIslandByIndex(this.currentIsland)
    ctx.beginPath();
    ctx.strokeStyle = '#00FF10';
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();

    ctx.font = `${this.fontSize}px Arial`;
    ctx.fillStyle = "#00c5ff"
    ctx.fillText(`Island: ${island.params.name} (${island.params.islandWidth}X${island.params.islandHeight})`,this.x, this.y + this.fontSize);

    island.x = this.x;
    island.y = this.y + 40;
    island.draw()
};

module.exports = IslandMonitor;
