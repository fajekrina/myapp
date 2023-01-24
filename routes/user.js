var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { User } = require('../models');

const v = new Validator();

router.post('/', async (req, res) => {
    const schema = {
        name: 'string',
        phone: 'string|min:11|unique'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
        .status(400)
        .json(validate);
    }

    const user = await User.create(req.body);

    res.status(200).send(user);
    res.status(200).send('Data created successfully');
});

router.put('/:id', (req, res) => {

});

module.exports = router;