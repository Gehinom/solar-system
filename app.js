let planets = []

let mercury = {
  radius: 24,
  x: 0,
  y: 0,
  vx: 1,
  vy: 1,
  img: document.createElement('img')
}
mercury.img.src = 'img/1mercury.svg'
mercury.img.style.height = mercury.radius + 'px'

document.body.append(mercury.img)

let venus = {
  radius: 60,
  x: 20,
  y: 20,
  vx: 1,
  vy: 1
}

planets.push(mercury)

function ruh(planet) {
  planet.x += planet.vx
  planet.y += planet.vy
}

function render(planet) {
  planet.img.style.left = planet.x
  planet.img.style.top = planet.y
}

function step() {
  requestAnimationFrame(step)
  planets.forEach(planet => {
    ruh(planet)
    render(planet)
  });
}

requestAnimationFrame(step)
