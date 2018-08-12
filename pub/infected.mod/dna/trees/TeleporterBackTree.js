let TeleporterTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
    this.fillstyle = "#555";
};
sys.extend(TeleporterTree, dna.Tree);

TeleporterTree.prototype.planted = function(){
};

TeleporterTree.prototype.targeted = function(island, target){

};

module.exports = TeleporterTree

