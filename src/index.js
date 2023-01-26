const app = require("./app");

if (process.env.NODE_ENV !== "prod") {
  require("dotenv").config();
}

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
