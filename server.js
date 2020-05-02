const app = require("./src/app");

const port = process.env.PORT || 3000;

switch (process.env.APP) {
  default:
    app.listen(port, () => {
      console.log("Running server on port:", port);
      console.log("--------------------------");
    });
}
