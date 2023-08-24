import {Scene, Color} from 'three'

/**
 * Create a scene
 * @param {Cube} cube 
 * @returns 
 */
function createScene(cube) {
    // second: Create a scene
    const scene = new Scene()

    // Set the scene's background color
    scene.background = new Color('skyblue')
    // add the mash to the scene
    scene.add(cube)

    return scene
}

export {createScene}