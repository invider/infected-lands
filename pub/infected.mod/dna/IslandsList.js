/**
 *
 * @param init
 * @constructor
 * @extends {Entity}
 */
var IslandsList = function(init){
    this.fontSize = 30;
    this.scale = 0.3;
    this.islandsStep = 10;
    this.islandSize = 50;
    this.horizontal = false;
    //  copyying parameters from init to this
    sys.augment(this, init);
};

IslandsList.prototype.calcScale = function(){
    let maxSizes = lab.game.getIslandsMaxSizes();
    let max = Math.max(maxSizes.x, maxSizes.y);
    return this.islandSize / max;
};

IslandsList.prototype.drawSelector = function (x, y) {
    ctx.strokeStyle = "#ff0000";
    ctx.strokeRect(x, y, this.islandSize, this.islandSize);
};

IslandsList.prototype.draw = function(){
    let currentX = 0;
    let currentY = 0;
    this.scale = this.calcScale();

    for (let i = 0; i < lab.game.islands; i++){
        var island = lab.game.getIslandByIndex(i);
        var islandSizes = island.getScreenWidth();
        var offset = lib.geometry.getOffsetToCenterInner(this.islandSize, this.islandSize, islandSizes.x * this.scale, islandSizes.y * this.scale);
        ctx.save();

        ctx.translate(this.x + currentX + offset.x, this.y + currentY + offset.y);
        ctx.scale(this.scale, this.scale);
        island.draw();
        ctx.restore();
        if (i == lab.targetIsland.currentIsland){
            this.drawSelector(this.x + currentX, this.y + currentY);
        }
        debugger;
        if (this.horizontal){
            currentX += this.islandsStep + this.islandSize;
        } else {
            currentY += this.islandsStep + this.islandSize;
        }
    }
};

module.exports = IslandsList;
