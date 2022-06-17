const User = require('../models/User')


async function updateKweetCounter(user) {
    console.log(user)
    // const currentState = await Comment.findById(user.id).exec();
    // const newKweetCounter = currentState.kweetCounter += 1;

    // await User.updateOne(
    //     {_id: user.id},
    //     {$set: {
    //         kweetCounter: newKweetCounter
    //     }}
    // )
}

module.exports = updateKweetCounter