let GreenSporeTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
}

GreenSporeTree.prototype = new dna.Tree()

module.exports = GreenSporeTree

