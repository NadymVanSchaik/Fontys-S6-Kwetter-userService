const publishToQueue = require('../services/MQservices')

function deleteUser(user) {
    queueName = "delete-user"
    payload = user
    publishToQueue(queueName, payload);
}
module.exports = deleteUser;