import { planets } from './planets.js'
import { force } from './force.js'

function ruh(planet) {
  planet.x += planet.vx
  planet.y += planet.vy
}

function render(planet) {
  planet.img.style.left = planet.x
  planet.img.style.top = planet.y
  planet.img.style.height = planet.imgRadius
}

function step() {
  requestAnimationFrame(step)
  planets.forEach(planet => {
    ruh(planet)
    render(planet)
    force(planet)
  });
}

requestAnimationFrame(step)
