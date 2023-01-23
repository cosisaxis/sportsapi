const express = require('express');
const router = express.Router();
const yearController = require("../controllers/yearController");

router.get('/api/years/', yearController.listYears);

module.exports = router;