const { ok } = require('assert');
const express = require('express');
const path = require('path');

const createDB = require('../config/db');
const Url = require('../models/urlModels');
const router = express.Router();



const baseUrl = "http://localhost:3000/url";

createDB.sync().then(() => {
    console.log("Db runnig");
})
router.post('/', async (req, res) => {
    try {
        const { longUrl } = req.body;
        const shortId = baseUrl + Math.trunc(Math.random() * 30) + 1;

        const storeUrl = await Url.create({
            longUrl: longUrl,
            shortUrl: shortId
        });

        return res.status(200).json({
            status: ok,
            shortUrl: storeUrl.shortUrl
        });

    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "something went wrong" });
        return;
    }


});


router.get('/:short', async (req, res) => {
    let shortId = req.params.short;
    try {
        let url = await Url.findOne({
            where: {
                longUrl: longUrl,
                shortUrl: shortId
            }
        });
        if (!url) {
            res.status(404).send({ message: "Enter valid url" });
        }
        return res.redirect(url.longUrl);
    } catch (e) {
        return res.status(500).send({ message: "Something went wrong " });
    }
})


module.exports = router;