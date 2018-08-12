let RedSporeTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
    this.fillstyle = "#ff0000";
}

RedSporeTree.prototype = new dna.Tree()

module.exports = RedSporeTree

