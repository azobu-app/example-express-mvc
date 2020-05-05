const users = require('./users.json')

let counter = 1
let items = users

module.exports = {
  find: () => {
    return items
  },

  findById: (id) => {
    return items.find((item) => item.id === id)
  },

  create: (newItem) => {
    counter++
    const newItems = items.concat({
      id: counter,
      name: newItem.name,
      username: newItem.username,
      email: newItem.email,
    })
    items = newItems
  },

  deleteMany: () => {
    items = []
  },

  findByIdAndDelete: (id) => {
    return items.find((item) => item.id === id)
  },

  findByIdAndUpdate: (id, newItem) => {
    return items.map((item) => {
      if (item.id === id) {
        return {
          name: newItem.name,
          username: newItem.username,
          email: newItem.email,
        }
      }
    })
  },
}
