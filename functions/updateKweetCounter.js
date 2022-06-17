const User = require('../models/User')


async function updateKweetCounter(payload) {
    payloadArray = payload.split('|')

    User.findById(payloadArray[0]).exec()
    .then((req, res) => {
        var newKweetCounter = req.kweetCounter
        if(payloadArray[1] == 0 ){
            newKweetCounter -= 1;
            console.log("Kweet counter -1")
        } else if(payloadArray[1] == 1) {
            newKweetCounter += 1;
            console.log("Kweet counter +1")
        }
        User.updateOne(
            {_id: payloadArray[0]},
            {$set: {
                kweetCounter: parseInt(newKweetCounter)
            }}
        ).exec()
    });
}

module.exports = updateKweetCounter