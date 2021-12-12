const redCirc = new mojs.Shape({
    left: 0,
    top: 0,
    stroke: 'red',
    strokeWidth: 5,
    fill: 'none',
    radius: {15: 30},
    opacity: {1: 0},
    duration: 1000
});

const sparks = new mojs.Burst({
    left: 0,
    top: 0,
    radius: {0: 30, easing: 'cubic.out'},
    angle: {0: 90, easing: 'quad.out'},
    count: 50,
    children: {
        shape: 'cross',
        stroke: 'white',
        points: 12,
        radius: 10,
        fill: 'none',
        angle: {0: 360},
        duration: 300
    }
});

document.addEventListener('click', function (e) {
    redCirc.tune({x: e.pageX, y: e.pageY,}).replay();
    sparks.tune({x: e.pageX, y: e.pageY}).replay();
});

const pentagons = new mojs.Burst({
    radius: {0: 500, easing: 'cubic.out'},
    angle: {0: 720, easing: 'quad.out'},
    count: 20,
    children: {
        shape: 'polygon',
        radius: {1: 300},
        points: 5,
        fill: ['purple', 'pink', 'yellow', 'green'],
        delay: 500,
        duration: 3000
    }
}).play();