import { 
  DirectionalLight,
  AmbientLight
 } from 'three';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 10);
  // move the light right, up, and towards us
  light.position.set(10, 15, 10);
  light.tick = () => {
    light.position.x += -0.1
  }

  const light2 = new AmbientLight('white', 2)

  return [light, light2];
}

export { createLights };