const publishToQueue = require('../services/MQservices')

function updateUser(user) {
    queueName = "update-user"
    id = user.id.toString()
    userName = user.name.toString()
    payload =  id+"|"+userName
    for (let i = 0; i < 50; i++) {
        messagePayload = payload + "|"+i
        console.log(messagePayload)
        publishToQueue(queueName, messagePayload);
    }
    
}

module.exports = updateUser;