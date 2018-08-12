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
    this.treeStepX = 40;
    this.fontSize = 30;
    this.spores = {};
};

PriceList.prototype.createSpores = function(){
    if (!this.spores.length){
        for (var typeName in dna.Spore.TYPE){
            let spore = new dna.Spore(dna.Spore.TYPE[typeName]);
            this.spores[dna.Spore.TYPE[typeName]] = spore;
        }
    }
};

PriceList.prototype._getTree = function(name){
    if (!this.treeCache[name]){
        this.treeCache[name] = new dna.trees[name]();
    }
    return this.treeCache[name];
};

PriceList.prototype._getTreeList = function(){
    return res.trees;
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
    let currentX = 10;
    this.drawItem(treeObject, currentX, 10);
    for (var typeName in dna.Spore.TYPE){
        currentX += this.treeStepX + this.treeScale;
        var type = dna.Spore.TYPE[typeName];
        var sporeItem = this.spores[type];
        var sporeCount = tree[dna.Spore.TYPENAMES[type]];

        ctx.font = `${this.fontSize}px zekton`;
        ctx.fillStyle = "#00c5ff"
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(`${sporeCount}`,currentX, 10 + this.fontSize);

        this.drawItem(sporeItem, currentX, 10)
    }
};

PriceList.prototype.draw = function(){
    let currentX = 0;
    let currentY = 0;
    this.createSpores();
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
