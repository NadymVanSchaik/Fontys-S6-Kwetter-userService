const User = require('../models/User')

//TODO place where KweetCounter is updated is message is received

function updateKweetCounter(user) {
    const currentState = await Comment.findById(user.id).exec();
    const newKweetCounter = currentState.kweetCounter += 1;

    await User.updateOne(
        {_id: user.id},
        {$set: {
            kweetCounter: newKweetCounter
        }}
    )
}