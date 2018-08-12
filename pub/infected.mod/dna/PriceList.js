/**
 *
 * @param init
 * @constructor
 * @extends {Entity}
 */
var PriceList = function(init){
    this.horizontal = false;
    //  copyying parameters from init to this
    sys.augment(this, init);
};
PriceList.prototype._getTreeList = function(){
    return res.trees;
};

PriceList.prototype.drawLine = function(tree){
    debugger;
};

PriceList.prototype.draw = function(){
    ctx.strokeStyle = "#00aa00"
    ctx.strokeRect(this.x, this.y, this.width, this.height);

    let currentX = 0;
    let currentY = 0;
    ctx.strokeStyle = "#00aa00"
    ctx.strokeRect(this.x, this.y, this.width, this.height);

    var list = this._getTreeList();
    for (let i = 0; i < list.length; i++){
        ctx.save()
        ctx.translate(currentX, currentY);
        this.drawLine(list[i]);
        ctx.restore()
    }
};

module.exports = PriceList;
