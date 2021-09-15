import { starsService } from '../services/StarsService.js'
import BaseController from '../utils/BaseController.js'

export class StarController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:starId', this.getStar)
      .post('', this.create)
      .put('/:id', this.editStar)
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getStars(req.query)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getStar(req, res, next) {
    try {
      const stars = await starsService.getStarById(req.params.starId)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async editStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
