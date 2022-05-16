module.exports = app => {
  const cart = require("../controllers/consumer.controller.js");

  var router = require("express").Router();

  router.post("/", cart.create);

  router.get("/", cart.findAll);

  router.get("/published", cart.findAllPublished);

  router.get("/:id", cart.findOne);

  router.put("/:id", cart.update);

  router.delete("/:id", cart.delete);

  router.delete("/", cart.deleteAll);

  app.use("/api/cart", router);
};