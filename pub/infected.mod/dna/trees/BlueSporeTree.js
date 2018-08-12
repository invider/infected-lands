let BlueSporeTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
}

BlueSporeTree.prototype = new dna.Tree()

module.exports = BlueSporeTree

