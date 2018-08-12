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
    this.treeCache = {

    }
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

PriceList.prototype.drawLine = function(tree){
    let treeObject = this._getTree(tree.name);
    ctx.save();
    ctx.translate(10, 10);
    treeObject.draw();
    ctx.restore()
};

PriceList.prototype.draw = function(){
    let currentX = 0;
    let currentY = 0;
    ctx.strokeStyle = "#00aa00";
    ctx.strokeRect(this.x, this.y, this.width, this.height);

    var list = this._getTreeList();
    for (let i = 0; i < list.length; i++){
        ctx.save();
        ctx.translate(currentX, currentY);
        this.drawLine(list[i]);
        ctx.restore();
    }
};

module.exports = PriceList;
