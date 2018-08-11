let Team = function(st) {
    sys.augment(this, st)

    log.out('team ' + this.name)
}

Team.prototype.evo = function(dt) {
}

module.exports = Team

