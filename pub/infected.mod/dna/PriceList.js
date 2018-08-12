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
    this.treeScale = 64;
    this.treeCache = {};
    this.treeStepY = 10;
};

PriceList.prototype._getTree = function(name){
    if (!this.treeCache[name]){
        this.treeCache[name] = new dna.trees[name]();
    }
    return this.treeCache[name];
}

PriceList.prototype._getTreeList = function(){
    return res.trees;
};

PriceList.prototype._drawSpores = function(tree){

};
PriceList.prototype.drawItem = function(item, x, y){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(this.treeScale, this.treeScale);
    item.draw();
    ctx.restore()
};

PriceList.prototype.drawLine = function(tree){
    let treeObject = this._getTree(tree.name);
    this.drawItem(treeObject, 10, 10);
};

PriceList.prototype.draw = function(){
    let currentX = 0;
    let currentY = 0;
    ctx.strokeStyle = "#00aa00";
    ctx.strokeRect(this.x, this.y, this.width, this.height);

    var list = this._getTreeList();
    for (let i = 0; i < list.length; i++){
        ctx.save();
        ctx.translate(this.x + currentX, this.y + currentY);
        this.drawLine(list[i]);
        ctx.restore();
        currentY += this.treeScale + this.treeStepY;
    }
};

module.exports = PriceList;
