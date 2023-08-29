import {
    AxesHelper,
    GridHelper
} from 'three'

function createAxesHelper() {
    const axesHelper = new AxesHelper( 5 );

    axesHelper.position.x = -6
    axesHelper.position.z = -6
    
    return axesHelper
}

function createGridHelper() {
    const size = 10;
    const divisions = 10;

    const gridHelper = new GridHelper( size, divisions );

    return gridHelper
}

export {createAxesHelper, createGridHelper}