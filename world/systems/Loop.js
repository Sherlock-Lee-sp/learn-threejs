class Loop {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.updateArr = []
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            // console.log('1111')
            this.tick()

            this.renderer.render(this.scene, this.camera);
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null)
    }

    tick() {
        for (let object of this.updateArr) {
            object.tick()
        }
    }
}

export {Loop}