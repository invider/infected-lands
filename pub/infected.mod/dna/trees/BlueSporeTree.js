let BlueSporeTree = function(st) {
    dna.SporeTree.call(this, st)
    this.ttl = env.tuning.treeTTL
    this.fillstyle = "#0000ff";
    this.dropRadius = 2;
    this.type = dna.Spore.TYPE.BLUE;
};

sys.extend(BlueSporeTree, dna.SporeTree);

module.exports = BlueSporeTree

