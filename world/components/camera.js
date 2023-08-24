import {PerspectiveCamera} from 'three'

/**
 * Create camera object
 * @returns {any}
 */
function createCemera() {
    // third: Create camera object
    const fov = 35
    const aspect = 1
    const near = 0.1
    const far = 100
    const camera = new PerspectiveCamera(fov, aspect, near, far)
    // every object is initially created at ( 0, 0, 0 )
    // move the camera back so we can view the scene
    camera.position.set(0, 0, 10);

    camera.tick = () => {
        camera.position.z += 0.1
        camera.position.y += 0.01
    }

    return camera
}

export {createCemera}

