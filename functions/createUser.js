const User = require('../models/User')

function createUser(user){
    const newUser = new User({
        name: user.name,
    })
    return newUser
}


module.exports = createUser; 