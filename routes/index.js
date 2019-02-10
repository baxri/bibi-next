const express = require('express');
const router = express.Router();
const joi = require('joi');


router.get('/send-email/', (req, res) => {

    const schema = {
        text: joi.string().required(),
    }

    const { error } = joi.validate(req.query, schema);

    if (error) {
        res.status(400).send(error.details);
    }

    res.send({
        // id: req.params.id,
        id: req.query.id,
    });
});


module.exports = router;