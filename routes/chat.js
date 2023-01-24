var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { Chat } = require('../models');

const v = new Validator();

router.post('/', async (req, res) => {
    const schema = {
        user_id: 'string',
        to_user_id: 'string',
        message: 'string',
        image: 'string'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
        .status(400)
        .json(validate);
    }

    const chat = await Chat.create(req.body);

    res.status(200).send(chat);
});

router.put('/:id', (req, res) => {

});

module.exports = router;