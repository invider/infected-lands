let RedSporeTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
    this.fillstyle = "#ff0000";
    this.type = dna.Spore.TYPE.RED;
}
sys.extend(RedSporeTree, dna.SporeTree);

module.exports = RedSporeTree

