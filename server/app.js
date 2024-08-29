const express = require("express");
const postRouter = require("./routes/postRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/v1/api/post", postRouter);

const port = 9001;
app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});

module.exports = app;
