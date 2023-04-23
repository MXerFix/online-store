const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require("../models/models")
const ApiError = require('../error/ApiError')

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".png"
      img.mv(path.resolve(__dirname, '../static', fileName))
      const device = await Device.create({ name, price, brandId, typeId, img: fileName })

      if (info) {
        info = JSON.parse(info)
        info.forEach(el => {
          DeviceInfo.create({
            title: el.title,
            description: el.description,
            deviceId: device.id
          })
        });
      }

      return res.json(device)

    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    const { brandId, typeId } = req.query
    let devices;
    if (brandId && typeId) {
      devices = await Device.findAll({where:{brandId, typeId}})
    }
    if (!brandId && !typeId) {
      devices = await Device.findAll()
    }
    if (!brandId && typeId) {
      devices = await Device.findAll({where:{typeId}})
    }
    if (brandId && !typeId) {
      devices = await Device.findAll({where:{brandId}})
    }
    return res.json(devices)
  }

  async getOne(req, res) {
    const { id } = req.params
    const device = await Device.findOne({
      where: {id},
      include: [{model:DeviceInfo, as: 'info'}]
    })
    return res.json(device)
  }
  
  async delete(req, res) {
    const { id } = req.body
    const device = await Device.findOne({ where: {id: id} })
    await device.destroy()
    const devices = await Device.findAll()
    return res.json({message: `device with id:  ${id} was deleted`, devices} )
  }
}

module.exports = new DeviceController()