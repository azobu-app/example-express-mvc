const User = require('./model')

module.exports = {
  getAll: (req, res, next) => {
    res.send({
      message: 'Get all users',
      users: User.find(),
    })
  },

  getById: (req, res, next) => {
    const id = Number(req.params.id)

    res.send({
      message: 'Get user by id',
      user: User.findById(id),
    })
  },

  add: (req, res, next) => {
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
    }

    User.create(newUser)

    res.send({
      message: 'Add new user',
      user: newUser,
    })
  },
}
