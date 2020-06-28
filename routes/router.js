const express = require("express")
const router = express.Router();

const service = require("../services/exampleService");

//define a route

router.route("/items")
    .get(service.getItems)
    .post(service.createItem)


module.exports = router;