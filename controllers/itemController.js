const Item = require("../models/Item");


exports.home = (req, res) => {
  res.json({ message: "API is running" });
};


exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

// POST /api/items
exports.createItem = async (req, res) => {
  const item = new Item(req.body);
  const savedItem = await item.save();
  res.json(savedItem);
};

exports.updateItem = async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedItem);
};     

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};
