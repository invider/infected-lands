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
    this.targetTree = island.plantTree(target.x, target.y, dna.trees.TeleporterBackTree)
    this.targetTree.targetTree = this // set the backlink
};

TeleporterTree.prototype.touch = function(subject) {
    // teleport
    subject.islandId = this.targetTree.island.id
    subject.x = this.targetTree.x
    subject.y = this.targetTree.y
    lab.game.switchIslands()
    lib.sfx(res.sfx.teleport, 0.5)
}

module.exports = TeleporterTree

