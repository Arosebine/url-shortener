const Url = require('../models/url.models');
const ShortUniqueId = require('short-unique-id');
const shortUniqueId = new ShortUniqueId();
const validUrl = require('valid-url');



exports.createUrlShortener = async (req, res) => {
    try {
        const { longUrl } = req.body;
        // if (!validUrl.isUri({ url })) {
        //     return res.status(400).json({
        //         message: 'Invalid URL',
        //     });
        // };
        const base = process.env.BASE_URL;
        // validate the base url
        if (!validUrl.isUri(base)) {
            return res.status(400).json({
                message: 'Invalid URL',
            });
        };
        // generate a short url
        const shortUrl = shortUniqueId.randomUUID(10);
        const shortUrlLink = `${base}/${shortUrl}`;
        const urlShortener = await Url.create({
            longUrl,
            urlCode: shortUrl,
            shortUrl: shortUrlLink,
        });
        return res.status(200).json({
            message: 'Url shortened successfully',
            urlShortener: urlShortener
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            Error: error.message,
        });
    }
};


exports.getUrlShortener = async (req, res) => {
    try {
        const { urlCode } = req.body;
        const urlShortener = await Url.findOne({ urlCode });
        if (urlShortener) {
            //  return res.redirect(urlShortener.longUrl);
            return res.status(200).json({
                message: 'Url found',
                urlShortener: urlShortener,
            });
        } else {
            return res.status(404).json({
                message:
                'Url not found',
            });
        };
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            Error: error.message,
        });
    }
};