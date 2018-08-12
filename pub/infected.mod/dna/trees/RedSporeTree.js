let RedSporeTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
}

RedSporeTree.prototype = new dna.Tree()

module.exports = RedSporeTree

