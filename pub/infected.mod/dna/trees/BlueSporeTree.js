let BlueSporeTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
    this.fillstyle = "#0000ff";
}

BlueSporeTree.prototype = new dna.Tree()

module.exports = BlueSporeTree

