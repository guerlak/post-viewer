const api = require("../util/api");

class UserController {
  async index(req, res) {
    const { data } = await api.get("users");
    return res.json(data);
  }
}

module.exports = new UserController();
