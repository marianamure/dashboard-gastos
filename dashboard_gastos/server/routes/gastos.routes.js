const GastosController = require("../controllers/gastos.controller");
const UserController = require("../controllers/user.controller");

const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.get('/api/gastos', authenticate, GastosController.get_allgastos);
    app.post('/api/gastos', authenticate, GastosController.create_gasto);
    app.get('/api/gastos/:id', authenticate, GastosController.get_gasto);
    app.put('/api/gastos/:id', authenticate, GastosController.update_gasto);
    app.delete('/api/gastos/:id', authenticate, GastosController.delete_gasto);

    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);

}