const express = require("express");
const postRouter = require("./routes/postRoutes");

const app = express();

app.use(express.json());

app.use("/v1/api/post", postRouter);

const port = 9001;
app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});

module.exports = app;
