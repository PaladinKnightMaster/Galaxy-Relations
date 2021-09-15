import { dbContext } from '../db/DbContext.js'
class GalaxyService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }

  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxy.find(query)
    return galaxies
  }

  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxy.findById(galaxyId)
    return galaxy
  }

  async editGalaxy(galaxyId, galaxyData) {
    const galaxy = await this.getGalaxyById(galaxyId)
    galaxy.name = galaxyData.name || galaxy.name
    await galaxy.save()
    return galaxy
  }
}

export const galaxyService = new GalaxyService()
