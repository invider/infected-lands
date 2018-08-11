let Player = function(st) {
    sys.augment(this, st)
}

Player.prototype.evo = function(dt) {
}

Player.prototype.draw = function() {
    res.sprite.draw(20, 100, 100)
}

module.exports = Player

