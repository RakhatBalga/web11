const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemController");

router.get("/", controller.home);
router.get("/api/items", controller.getItems);
router.get("/api/items/:id", controller.getItemById);
router.post("/api/items", controller.createItem);
router.put("/api/items/:id", controller.updateItem);
router.delete("/api/items/:id", controller.deleteItem);

module.exports = router;
