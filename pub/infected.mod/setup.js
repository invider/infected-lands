module.exports = function() {
    log.out('setting up')

    sys.spawn('SlideCamera', {
        name: 'camera',
        x: 0,
        y: 0,
        keys: [],
    })

    // inject camera keyboard control
    sys.after(lab.camera, 'evo', function(dt) {
        if (this.keys[0]) this.x -= (this.speed/this.scale) * dt
        else if (this.keys[1]) this.y -= (this.speed/this.scale) * dt
        else if (this.keys[2]) this.x += (this.speed/this.scale) * dt
        else if (this.keys[3]) this.y += (this.speed/this.scale) * dt
    })

    // sys.spawn('Tiles', {
    //     x: 0,
    //     y: 0,
    //     map: res.tiles,
    //     set: res.tileMapping,
    //     viewport: function() {
    //         return lab.camera.getViewport()
    //     }
    // }, 'camera')
    //
    // sys.spawn('Sprite', {
    //     name: 'hero',
    //     tiles: res.sprite,
    //     x: 0,
    //     y: 0,
    //     w: 128,
    //     h: 128,
    //     startTilex: 0,
    //     endTilex: 5,
    //     framerate: 9,
    // }, 'camera')

    sys.spawn('Grid', {
        color: '#ff7080',
        top: 1000,
        step: 100,
        coordinates: true,
    }, 'camera')

    //
    // sys.spawn('Island', {
    //     //Z: 1000,
    //     x: 30,
    //     y: 30,
    //     width: 100,
    //     height:100
    // }, 'camera');

    sys.spawn('Game', {
        name: 'game'
    });

    sys.spawn('monitors/EnemyIslandMonitor', {
        //Z: 1000,
        x: 0,
        y: 0,
        width: 300,
        height:300
    }, 'camera');
    sys.spawn('monitors/MyIslandMonitor', {
        //Z: 1000,
        x: 0,
        y: 400,
        width: 300,
        height:300
    }, 'camera');

}
