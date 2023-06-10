const { User, Offer, OfferDevice, Device } = require("../models/models")

class OfferController {
  async createOffer(req, res) {
    const { userEmail, sum } = req.body
    const user = await User.findOne({where: {email: userEmail}})
    const offer = await Offer.create({ userId: user.id, sum: sum })
    return res.json({message:`offer was created`, offer})
  }

  async createOfferDevice(req, res) {
    const { offerID, deviceID } = req.body
    const offer = await Offer.findOne({where: {id: offerID}})
    const device = await Device.findOne({where:{id: deviceID}})
    const offer_device = await OfferDevice.create({ offerId: offer.id, deviceId: device.id })
    return res.json({message: `offer device was added` , offer_device})
  }

}

module.exports = new OfferController()