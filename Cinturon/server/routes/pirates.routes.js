const PiratesController = require("../controllers/pirates.controller")

module.exports = (app) => {
    app.post("/api/pirates", PiratesController.create_pirate);
    app.get("/api/pirates", PiratesController.get_allpirates);
    app.get("/api/pirates/:id", PiratesController.get_pirate);
    app.delete("/api/pirates/:id", PiratesController.delete_pirate);
}
