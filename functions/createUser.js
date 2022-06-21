const User = require('../models/User')

function createUser(user){
    console.log(user)
    const newUser = new User({
        kweetCounter: 0,
        name: user.name,
    })
    console.log(user.name, " is a new user: ", newUser)
    return newUser
}


module.exports = createUser; 