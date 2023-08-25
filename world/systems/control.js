import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

function createControl(camera, canvas) {
    const controls = new OrbitControls(camera, canvas)

    // 添加阻尼感觉
    controls.enableDamping = true;

    // 必须要调用update方法
    controls.tick = () => controls.update()

    controls.minDistance = -Infinity;
    controls.maxDistance = Infinity;

    // 自动旋转
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    return controls
}

export {createControl}