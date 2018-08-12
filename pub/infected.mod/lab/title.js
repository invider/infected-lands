module.exports = {
    draw: function() {
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'
        ctx.font = '18px zekton'

        ctx.fillStyle = env.tuning.team[lab.game.control.id].color
        let text = env.tuning.team[lab.game.control.id].name + ' Player Turn'
        ctx.fillText(text, ctx.width/2, 30)
    }
}
