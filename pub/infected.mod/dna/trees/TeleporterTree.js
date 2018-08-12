let TeleporterTree = function(st) {
    dna.Tree.call(this, st)
    this.ttl = env.tuning.treeTTL
    this.fillstyle = "#ccc";
};

TeleporterTree.prototype.planted = function(){
    /** @type Player */
    let player = lab.game.control.player;
    player.targeting = true;
};

TeleporterTree.prototype = new dna.Tree()

module.exports = TeleporterTree

