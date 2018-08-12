let GreenSporeTree = function(st) {
    dna.SporeTree.call(this, st)
    this.fillstyle = "#00ff00";
    this.ttl = env.tuning.treeTTL
    this.type = dna.Spore.TYPE.GREEN;
}

sys.extend(GreenSporeTree, dna.SporeTree);

module.exports = GreenSporeTree

