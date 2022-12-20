const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', async (req, res) => {
    const html = path.join(__dirname, '../public', 'html', 'url.html');
    res.status(200).sendFile(html);
})











module.exports = router;