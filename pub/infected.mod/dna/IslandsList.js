// declare a dot actor
var IslandsList = function(init){
    this.fontSize = 30;
    this.scale = 0.1;
    this.islandsStep = 10;
    this.horizontal = false;
    //  copyying parameters from init to this
    sys.augment(this, init);
};


IslandsList.prototype.draw = function(){
    let currentX = 0;
    let currentY = 0;
    for (let i = 0; i < lab.game.islands; i++){
        var island = lab.game.getIslandByIndex(i);
        var size = island.getScreenWidth()
        if (this.horizontal){
            currentX += this.islandsStep + size.x * this.scale + this.islandsStep;
        } else {
            currentY += this.islandsStep + size.y * this.scale + this.islandsStep;
        }
        ctx.save();
        ctx.translate(this.x + currentX, this.y + currentY);
        ctx.scale(this.scale, this.scale);
        island.draw();
        ctx.restore()
    }
};

module.exports = IslandsList;
