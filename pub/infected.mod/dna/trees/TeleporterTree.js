let TeleporterTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
    this.fillstyle = "#ccc";
};
sys.extend(TeleporterTree, dna.Tree);

TeleporterTree.prototype.planted = function(){
    /** @type Player */
    let player = lab.game.control.player;
    player.targeting = true;
    lab.game.focus.player.targetListener = this;
};

TeleporterTree.prototype.targeted = function(island, target){
    island.plantTree(target.x, target.y, dna.trees.TeleporterBackTree)
};

module.exports = TeleporterTree

