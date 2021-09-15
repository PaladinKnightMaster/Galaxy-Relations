import { galaxyService } from '../services/galaxyService.js'
import BaseController from '../utils/BaseController.js'

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxy')
    this.router
      .get('', this.getAll)
      .get('/:galaxyId', this.getGalaxy)
      .post('', this.create)
      .put('/:id', this.editGalaxy)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxyService.getGalaxies(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxyService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async editGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.editGalaxy(req.params.galaxyId, req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.getGalaxyById(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
