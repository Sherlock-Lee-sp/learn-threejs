import {
    BoxGeometry, 
    MeshBasicMaterial, 
    Mesh,
    CircleGeometry,
    MeshStandardMaterial,
    TextureLoader,
    CapsuleGeometry,
} from 'three'
import img from '../assetes/zelda.jpg'

function createMaterial() {
    // Create a Material

    // create a texture loader.
    const textureLoader = new TextureLoader();

    // load a texture
    const texture = textureLoader.load(
      img,
    );

    // const material = new MeshBasicMaterial()
    const material = new MeshStandardMaterial({
      // color: 'green',
      map: texture,
    })

    return material
}

/**
 * Create a visibile object
 * @returns {Cube}
 */
function createCube() {
    // fourth: Create a visibile object
    // create a geometry object
    const geometry = new BoxGeometry(2, 2, 2)
    // const geometry = new CircleGeometry(5, 102)
    // const geometry = new CapsuleGeometry( 1, 1, 4, 8 ); 

    const material = createMaterial()

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material)

    cube.rotation.set(-0.5, -0.1, 0.8)
    // cube.position.set(10, 0, 0)

    // this method will be called once per frame
    cube.tick = () => {
      // increase the cube's rotation each frame
      cube.rotation.z += 0.01;
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    };

    // const geometry2 = new CircleGeometry(5, 102)
    // const material2 = new MeshStandardMaterial({color: 'blue'})
    // const cube2 = new Mesh(geometry2, material2)
    // cube.add(cube2)

    return cube
}

export {createCube}
