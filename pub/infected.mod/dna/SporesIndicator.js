/**
 *
 * @param init
 * @constructor
 * @extends {Entity}
 */
var SporesIndicator = function(init){
    this.horizontal = false;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    //  copyying parameters from init to this
    sys.augment(this, init);
};


SporesIndicator.prototype.drawSpore = function(x, y, type, amount){

};

SporesIndicator.prototype.draw = function(){
    let currentX = 0;
    let currentY = 0;
    ctx.strokeStyle = "#00aa00"
    ctx.strokeRect(this.x, this.y, this.width, this.height);

    // for (let i = 0; i < lab.player.spores; i++){
    //     ctx.save();
    //     ctx.translate(this.x + currentX, this.y + currentY);
    //     ctx.scale(this.scale, this.scale);
    //     ctx.restore();
    //
    //     if (this.horizontal){
    //         currentX += this.islandsStep + this.islandSize;
    //     } else {
    //         currentY += this.islandsStep + this.islandSize;
    //     }
    // }
};

module.exports = SporesIndicator;
