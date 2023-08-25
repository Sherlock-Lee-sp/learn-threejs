import {
    SphereGeometry,
    Mesh,
    MeshStandardMaterial,
    MathUtils,
    Group
} from 'three'

function creatMeshGroup() {
    // a group holds other objects
    // but cannot be seen itself
    const group = new Group()

    const geometry = new SphereGeometry(0.25, 16, 16)

    const material = new MeshStandardMaterial({
        color: 'indigo',
    })

    const protoSphere = new Mesh(geometry, material)

    group.add(protoSphere)

    // create twenty clones of the protoSphere
    // and add each to the group
    for (let i = 0; i < 1; i += 0.05) {
      const sphere = protoSphere.clone();

      // position the spheres on around a circle
      sphere.position.x = Math.cos(2 * Math.PI * i);
      sphere.position.y = Math.sin(2 * Math.PI * i);

      sphere.scale.multiplyScalar(0.01 + i);

      group.add(sphere);
    }

    group.scale.multiplyScalar(2)

    const radiansPerSecond = MathUtils.degToRad(0.1);

    // each frame, rotate the entire group of spheres
    group.tick = () => {
      group.rotation.z -= radiansPerSecond;
    };

    return group;
}

export {creatMeshGroup}