module.exports = function() {
    log.out('setting up')

    /*
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
    */

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
        top: 2000,
        step: 100,
        coordinates: false,
    }, '')

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
        name: 'targetIsland',
        //Z: 1000,
        x: 0,
        y: 0,
        width: 600,
        height:400
    }, '');
    sys.spawn('monitors/MyIslandMonitor', {
        name: 'myIsland',
        //Z: 1000,
        x: 0,
        y: 450,
        width: 600,
        height:400
    }, '');
    lab.targetIsland.nextIsland()

    sys.spawn('IslandsList', {
        name: 'islandsList',
        //Z: 1000,
        x: 650,
        y: 0,
        width: 60,
        height:400
    }, '');

    sys.spawn('SporesIndicator', {
        name: 'sporesIndicator',
        //Z: 1000,
        x: 950,
        y: 70,
        width: 400,
        height: 60
    }, '');

    sys.spawn('PriceList', {
        name: 'priceList',
        //Z: 1000,
        x: 950,
        y: 170,
        width: 400,
        height: 600
    }, '');

    // show the story
    sys.spawn('text/scroll', {
        Z: 100,
        rx: 10,
        ry: 90,
        period: 1.5,
        time: 5,       // how long display each line
        fadein: 1.5,
        fadeout: 2,
        speed: -30,
        txt: res.story,
        font: '20px Zekton',
        color: '#FFFF20',
    })

}
