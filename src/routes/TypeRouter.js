const express = require("express");
const router = express.Router()
const TypeController = require('../controllers/TypeController');
// const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', TypeController.createType)
router.put('/update/:id', TypeController.updateType)
router.delete('/delete/:id', TypeController.deleteType)
// router.get('/get-all', TypeController.getAllType)

module.exports = router
