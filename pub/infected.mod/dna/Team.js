let Team = function(st) {
    sys.augment(this, st)

    sys.spawn('Player', {
        name: 'player',
        team: this.id,
        island: this.startIsland,
    }, this)

    log.out('team ' + this.name)
}

Team.prototype.evo = function(dt) {
}

module.exports = Team

