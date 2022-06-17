const User = require('../models/User')

function createUser(user){
    const newUser = new User({
        name: user.name,
        kweetCounter: 0,
    })
    return newUser
}


module.exports = createUser; 