import Thing from '../models/Thing'

const controller = {

  create: (req, res) => {
    Thing({
        name: req.body.name
      })
      .save()
      .then(doc => {
        res.status(201).json({ success: doc })
      })
      .catch(err => {
        res.status(404).json({ error: err })
      })
  },

  update: (req, res) => {
    Thing.findOne({ _id: req.params.id })
      .then(doc => {
        doc.name = req.body.name
        doc.save()
          .then(() => {
            res.status(200).json({ success: doc })
          })
          .catch(err => {
            res.status(404).json({ error: err })
          })
      })
      .catch(err => {
        res.status(404).json({ error: err })
      })
  },

  delete: (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(doc => {
        res.status(200).json({ success: doc })
      })
      .catch(err => {
        res.status(404).json({ error: err })
      })
  },
  
  get: (req, res) => {
    Thing.find()
      .then(results => {
        res.status(200).json({ success: results })
      })
      .catch(err => {
        res.status(404).json({ error: err })
      })
  }

}

export default controller
