var scene = document.querySelectorAll('.scene');
 scene.forEach(e => {
    var parallaxInstance = new Parallax(e, {
        relativeInput: true
    })
    parallaxInstance.friction(0.02, 0.02);
 })