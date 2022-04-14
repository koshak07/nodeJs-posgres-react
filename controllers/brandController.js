const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brands = await Brand.create({ name });
    return res.json(brands);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
