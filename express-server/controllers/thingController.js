import Thing from '../models/Thing'

const controller = {

  create: (req, res) => {
    if (req.body.name) {
      Thing({
        name: req.body.name
      })
      .save()
      .then(doc => {
        res.status(201).json({ success: doc })
      })
      .catch(err => {
        res.status(404).json({ error: 'could not create a new Thing' })
      })
    } else {
      res.status(404).json({ error: '"name" param required' })
    }
  },
  
  update: (req, res) => {
    if (req.body.name) {
      Thing.findOne({ _id: req.params.id })
      .then(doc => {
        doc.name = req.body.name
        doc.save()
        .then(() => {
          res.status(200).json({ success: doc })
        })
        .catch(err => {
          res.status(404).json({ error: 'error occurred saving thing' })
        })
      })
      .catch(err => {
        res.status(404).json({ error: 'error occurred updating' })
      })
    } else {
      res.status(404).json({ error: 'no "name" in body params' })
    }
  },

  delete: (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(doc => {
        res.status(200).json({ success: doc, deleted: true })
      })
      .catch(err => {
        res.status(404).json({ error: 'could not delete' })
      })
  },

  get: (req, res) => {
    Thing.find()
      .then(results => {
        res.status(200).json({ success: results })
      })
      .catch(err => {
        res.status(404).json({ error: 'could not GET all Things' })
      })
  }

}

export default controller
