/**
 *
 * @param init
 * @constructor
 * @extends {Entity}
 */
var SporesIndicator = function(init){
    this.horizontal = true;
    this.x = 0;
    this.y = 0;
    this.fontSize = 32;
    this.sporeScale = 64
    this.sporesStep = 64
    this.spores = [];
    this.width = 0;
    this.height = 0;
    //  copyying parameters from init to this
    sys.augment(this, init);
};



SporesIndicator.prototype.createSpores = function(){
    if (!this.spores.length){
        for (var typeName in dna.Spore.TYPE){
            let spore = new dna.Spore(dna.Spore.TYPE[typeName]);
            this.spores.push(spore);
        }
    }
};

SporesIndicator.prototype.draw = function(){
    this.createSpores();
    ctx.strokeStyle = "#00aa00"
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    let currentX = 0;
    let currentY = 0;
    for (var i = 0; i < this.spores.length; i++){
        if (this.horizontal){
            currentX += this.sporesStep;
        } else {
            currentY += this.sporesStep;
        }
        ctx.save();
        ctx.translate(this.x + currentX, this.y + currentY);
        ctx.scale(this.sporeScale, this.sporeScale);

        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = "#00c5ff"
        ctx.textAlign = 'left'

        this.spores[i].draw();
        ctx.restore();

        var sporeType = this.spores[i].type;
        ctx.fillText(`X: ${lab.game.focus.player.spores[sporeType]}`,this.x + currentX, this.y + currentY + this.fontSize);
    }



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
