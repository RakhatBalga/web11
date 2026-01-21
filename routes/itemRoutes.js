const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemController");


router.get("/", controller.getItems);
router.post("/", controller.createItem);


router.get("/:id", controller.getItemById);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);

module.exports = router;
