import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.json({
    test: 'test'
  });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_URL}`
  )
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));

export default app;
