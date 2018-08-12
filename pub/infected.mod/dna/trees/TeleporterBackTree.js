let TeleporterBackTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
    this.fillstyle = "#555";
};
sys.extend(TeleporterBackTree, dna.Tree);

TeleporterBackTree.prototype.planted = function(){
};

TeleporterBackTree.prototype.targeted = function(island, target){
};

TeleporterBackTree.prototype.touch = function(subject) {
    subject.islandId = this.targetTree.island.id
    subject.x = this.targetTree.x
    subject.y = this.targetTree.y
    lab.game.switchIslands()
    lib.sfx(res.sfx.teleport, 0.5)
}

module.exports = TeleporterBackTree

