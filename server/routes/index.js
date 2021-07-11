const express = require('express');
const FriendModel = require('../Models/Friends');

const router = express.Router({ mergeParams: true });

router.get('/', (req,res) => {
    res.send("404 not found");
})

router.get('/insert', async (req, res) => {
    const friend = new FriendModel({ name: "Ali", age: 22 });
    await friend.save();
    res.send('Inserted friend !')
})

router.get('/read', async (req, res) => {
    FriendModel.find({}, (err, result) => {
        err ? res.send(err) : res.send(result);
    })
   
})

module.exports = router;