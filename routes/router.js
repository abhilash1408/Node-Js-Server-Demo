const express = require("express")
const router = express.Router();

const service = require("../services/exampleService");

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
}

router.route("/items")
    .get(nocache, service.getItems)
    .post(nocache, service.createItem)


module.exports = router;