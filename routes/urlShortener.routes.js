const express = require('express');
const { createUrlShortener, getUrlShortener } = require('../controller/urlShortener.controller');
const router = express.Router();


router.post('/url', createUrlShortener);
router.get('/url/:urlCode', getUrlShortener);



module.exports = router;