const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo, DeviceColor, PagedDevice } = require("../models/models")
const ApiError = require('../error/ApiError')
const e = require('express')

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, description, price, oldPrice, brandName, brandId, categoryName, categoryId, info, color, bigDescription } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".png"
      img.mv(path.resolve(__dirname, '../static', fileName))
      const device = await Device.create({ name, description, price, oldPrice, img: fileName, brandName, brandId, categoryName, categoryId })
      if (bigDescription) PagedDevice.create({
        bigDescription: bigDescription,
        deviceId: device.id
      })

      if (info) {
        const infoJSON = JSON.parse(info)
        infoJSON.forEach(el => {
          DeviceInfo.create({
            title: el.title,
            description: el.description,
            deviceId: device.id
          })
        });
      }

      if (color) {
        const colorJSON = JSON.parse(color)
        colorJSON.forEach(el => {
          DeviceColor.create({
            color: el,
            deviceId: device.id
          })
        })
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
      include: [{model:DeviceInfo, as: 'info'}, {model: DeviceColor, as: 'colors'}, {model: PagedDevice, as: 'pagedDevice'}]
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