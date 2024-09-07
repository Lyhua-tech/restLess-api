const express = require("express");
const postRouter = require("./routes/postRoutes");
const userRouter = require('./routes/userRoutes')
const cors = require("cors");

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// route for post
app.use("/v1/api/post", postRouter);

// route for user
app.use("/v1/api/", userRouter);

const port = 9001;
app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});

module.exports = app;
