import { createCemera } from "./components/camera";
import { createCube } from "./components/cube";
import { createScene } from "./components/Scene";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createLights } from "./components/light";
import { Loop } from "./systems/Loop";

let camera;
let renderer;
let scene;
let loop;
class World {
    constructor(app) {
        camera = createCemera()
        scene = createScene()
        renderer = createRenderer()
        loop = new Loop(scene, camera, renderer)
        app.appendChild(renderer.domElement)

        const cube = createCube()
        const light = createLights()

        loop.updateArr.push(cube)
        // loop.updateArr.push(camera)
        // loop.updateArr.push(light)

        scene.add(cube, light)

        const resizer = new Resizer(app, camera, renderer);
        // resizer.onResize = () => {
        //     this.render()
        // }
    }

    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }

    start() {
        loop.start()
    }

    stop() {
        loop.stop()
    }
}

export  {World}