export let planets = []

let sun = {
  mass: 8000000,
  planetRadius: 80,
  imgRadius: 80,
  x: window.innerWidth / 2 - 40,
  y: window.innerHeight / 2 - 40,
  vx: 0,
  vy: 0,
  img: document.createElement('img')
}
sun.img.src = 'img/0sun.svg'
sun.img.id = 'sunImg'
sun.img.style.height = sun.imgRadius + 'px'
document.body.append(sun.img)
planets.push(sun)

let mercury = {
  mass: 0.3,
  planetRadius: 12,
  imgRadius: 12,
  x: window.innerWidth / 2 - 50,
  y: window.innerHeight / 2 - 6,
  vx: 0.5,
  vy: 0,
  img: document.createElement('img')
}
mercury.img.src = 'img/1mercury.svg'
mercury.img.style.height = mercury.imgRadius + 'px'
document.body.append(mercury.img)
planets.push(mercury)

let venus = {
  mass: 4.8,
  planetRadius: 24,
  imgRadius: 24,
  x: window.innerWidth / 2 - 100,
  y: window.innerHeight / 2 - 12,
  vx: 1,
  vy: 0,
  img: document.createElement('img')
}
venus.img.src = 'img/2venus.svg'
venus.img.style.height = venus.imgRadius + 'px'
document.body.append(venus.img)
planets.push(venus)

let earth = {
  mass: 5.9,
  planetRadius: 32,
  imgRadius: 32,
  x: window.innerWidth / 2 - 150,
  y: window.innerHeight / 2 - 16,
  vx: 1.5,
  vy: 0,
  img: document.createElement('img')
}
earth.img.src = 'img/3earth.svg'
earth.img.style.height = earth.imgRadius + 'px'
document.body.append(earth.img)
planets.push(earth)

let mars = {
  mass: 0.7,
  planetRadius: 18,
  imgRadius: 18,
  x: window.innerWidth / 2 - 200,
  y: window.innerHeight / 2 - 9,
  vx: 2,
  vy: 0,
  img: document.createElement('img')
}
mars.img.src = 'img/4mars.svg'
mars.img.style.height = mars.imgRadius + 'px'
document.body.append(mars.img)
planets.push(mars)

let jupiter = {
  mass: 1900,
  planetRadius: 50,
  imgRadius: 50,
  x: window.innerWidth / 2 - 400,
  y: window.innerHeight / 2 - 25,
  vx: 2.5,
  vy: 0,
  img: document.createElement('img')
}
jupiter.img.src = 'img/5jupiter.svg'
jupiter.img.style.height = jupiter.imgRadius + 'px'
document.body.append(jupiter.img)
planets.push(jupiter)

let saturn = {
  mass: 568,
  planetRadius: 58,
  imgRadius: 58*2,
  x: window.innerWidth / 2 - 500,
  y: window.innerHeight / 2 - 58,
  vx: 3,
  vy: 0,
  img: document.createElement('img')
}
saturn.img.src = 'img/6saturn.svg'
saturn.img.style.height = saturn.imgRadius + 'px'
document.body.append(saturn.img)
planets.push(saturn)

let uranus = {
  mass: 87,
  planetRadius: 80,
  imgRadius: 80,
  x: window.innerWidth / 2 - 600,
  y: window.innerHeight / 2 - 40,
  vx: 3.5,
  vy: 0,
  img: document.createElement('img')
}
uranus.img.src = 'img/7uranus.svg'
uranus.img.style.height = uranus.imgRadius + 'px'
document.body.append(uranus.img)
planets.push(uranus)

let neptune = {
  mass: 102,
  planetRadius: 74,
  imgRadius: 74,
  x: window.innerWidth / 2 - 700,
  y: window.innerHeight / 2 - 37,
  vx: 4,
  vy: 0,
  img: document.createElement('img')
}
neptune.img.src = 'img/8neptune.svg'
neptune.img.style.height = neptune.imgRadius + 'px'
document.body.append(neptune.img)
planets.push(neptune)