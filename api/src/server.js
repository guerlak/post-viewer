require("dotenv").config();
const app = require("./index");

app.listen(process.env.HOST_PORT, () => {
  console.log("Server is on => " + process.env.HOST_PORT + " port");
});
