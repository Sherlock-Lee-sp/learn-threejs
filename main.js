import './style.css'
import {World} from './world/World'

// first: Access the HTML scene-container Element in JavaScript
const app = document.getElementById('app')

const world = new World(app)

// 2. Render the scene
// world.render();
world.start()

// const button = document.getElementById('button')
// button.addEventListener('click',() => {
//   // 2. Render the scene
//   world.render();
// })
