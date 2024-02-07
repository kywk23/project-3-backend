const express = require("express");
const router = express.Router();

class TradesRouter {
  constructor(controller, checkJwt) {
    this.tradesController = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    router.get("/", this.tradesController.getAll.bind(this.tradesController));
    router.get(
      "/pending",
      this.tradesController.getUserPendingTrade.bind(this.tradesController)
    );
    router.get(
      "/ongoing",
      this.tradesController.getUserOngoingTrade.bind(this.tradesController)
    );
    router.get(
      "/completed",
      this.tradesController.getUserCompletedTrade.bind(this.tradesController)
    );
    router.get(
      "/:tradeId",
      this.tradesController.getTradeById.bind(this.tradesController)
    );
    router.post(
      "/",
      this.tradesController.insertTrade.bind(this.tradesController)
    );
    return router;
  }
}

module.exports = TradesRouter;