import { createCemera } from "./components/camera";
import { createCube } from "./components/cube";
import { createScene } from "./components/Scene";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createLights } from "./components/light";
import { Loop } from "./systems/Loop";
import { createControl } from "./systems/control";
import { creatMeshGroup } from "./components/meshGroup";

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

        const controls = createControl(camera, renderer.domElement)
        // controls.target.set(1,2,3);

        const [cube, cube2] = createCube()
        const [light, ambientLight] = createLights()
        const group = creatMeshGroup()

        // loop.updateArr.push(cube)
        // loop.updateArr.push(camera)
        // loop.updateArr.push(light)
        // loop.updateArr.push(controls)
        loop.updateArr.push(group)

        // scene.add(ambientLight, light, cube, cube2)
        scene.add(ambientLight, light, group)

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