const publishToQueue = require('../services/MQservices')

function updateUser(user) {
    queueName = "update-user"
    id = user.id.toString()
    userName = user.name.toString()
    payload =  id+"|"+userName
    publishToQueue(queueName, payload);
}

module.exports = updateUser;