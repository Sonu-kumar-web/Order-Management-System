//importing all the necessary files
const express = require('express');
const router = express.Router();

// Setting controller path
const ordersApi = require("../../../controllers/api/v1/orders_api_controller");

// Setting up all paths for controller
router.post('/create', ordersApi.addOrder);
router.get('/', ordersApi.getOrder);

// Exporting router
module.exports = router;