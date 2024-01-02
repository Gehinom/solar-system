import { planets } from './planets.js'

export function force(planetOne) {
  let planetOneCenterX = planetOne.x + planetOne.planetRadius / 2
  let planetOneCenterY = planetOne.y - planetOne.planetRadius / 2
  let sunCenterX = planets[0].x + planets[0].planetRadius / 2
  let sunCenterY = planets[0].y + planets[0].planetRadius / 2

  planets.forEach(planetTwo => {
    let planetTwoCenterX = planetTwo.x + planetTwo.planetRadius / 2
    let planetTwoCenterY = planetTwo.y - planetTwo.planetRadius / 2

    if (planetOne != planetTwo) {
      let distanceX = planetOneCenterX - planetTwoCenterX
      let distanceY = planetOneCenterY - planetTwoCenterY
      const g = 1 / 50000000
      let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
      const tyazhinnya = 1 / distance * planetOne.mass * planetTwo.mass * g
      let tyazhinnyaX = distanceX * tyazhinnya
      let tyazhinnyaY = distanceY * tyazhinnya
      planetOne.vx -= tyazhinnyaX / planetOne.mass
      planetOne.vy -= tyazhinnyaY / planetOne.mass
    }
  });

  if (planetOneCenterX > sunCenterX || planetOne.imgRadius >= 0) {
    planetOne.imgRadius += (sunCenterX - planetOneCenterX) / 250
  } else {
    planetOne.imgRadius -= (planetOneCenterX - sunCenterX) / 250
  }
}

