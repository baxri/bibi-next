const express = require('express');
const router = express.Router();
const joi = require('joi');


router.post('/login/', (req, res) => {

    const schema = {
        email: joi.string().required().email(),
        password: joi.string().required(),
    }

    console.log(req.params)

    // const { error } = joi.validate(req.query, schema);

    // if (error) {
    //     res.status(400).send(error.details);
    // }

    res.send({
        ok: true
    });
});


module.exports = router;