const api = require("../util/api");

class PostController {
  async index(req, res) {
    const { data } = await api.get("posts");
    const users = await api.get("users");
    const result = data.map((post) => {
      const user = users.data.filter((u) => u.id === post.userId)[0];
      const index = users.data.indexOf(user);
      return {
        ...post,
        user: users.data[index],
      };
    });
    return res.json(result);
  }
  async getById(req, res) {
    const { id } = req.params;
    const { data } = await api.get("posts");
    const users = await api.get("users");
    const user = users.data.filter((u) => u.id === Number(id))[0];
    const posts = data.filter((data) => data.userId === Number(id));
    const result = posts.map((p) => ({ ...p, user: user }));
    return res.json(result);
  }
}

module.exports = new PostController();
