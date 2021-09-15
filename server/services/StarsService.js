import { dbContext } from '../db/DbContext.js'

class StarsService {
  async createStar(starData) {
    const star = await dbContext.Star.create(starData)
    return star
  }

  async getStars(query) {
    const stars = await dbContext.Star.find(query)
    return stars
  }

  async editGalaxy(starId, starData) {
    const star = await this.getStarById(starId)
    star.name = starData.name || star.name
    await star.save()
    return star
  }

  async getStarById(starId) {
    const star = await dbContext.Star.findById(starId)
    return star
  }
}

export const starsService = new StarsService()
