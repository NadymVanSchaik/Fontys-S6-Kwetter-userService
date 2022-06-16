const express = require('express');
const router = express.Router();
const User = require('../models/User')
const app = express();
const bodyParser = require('body-parser');
const updateUser = require('../functions/updateUser')
const deleteUser = require('../functions/deleteUser');
const createUser = require('../functions/createUser');
const { remove } = require('../models/User');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json();

router.get('/all', async (req, res) => {
    try{
        const users = await User.find({}).exec();
        res.json(users)
    } catch(err){
        res.json({message: err});
    }
})

//Add User 
router.post('/', jsonParser, (req, res) => {
    createUser(req.body).save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message: err})
    })
})

//Update User
router.patch('/:id', jsonParser, async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.id},
            {$set: {
                name: req.body.name, 
            }}
        );
        updateUser(updatedUser);
        res.json(updatedUser)
    } catch(err) {
        console.log(err)
        res.json({message: err})
    }
})

//Delete User
router.delete('/:id', async (req, res) => {
    try {
        const removedUser = await User.remove({_id: req.params.id});
        res.json(removedUser)
        deleteUser(removedUser)
    } catch(err) {
        res.json({message: err})
    }
})


module.exports = router;