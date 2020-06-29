require("dotenv").config();
const app = require("./index");

app.listen(3333, () => {
  console.log("Server is on...");
});
