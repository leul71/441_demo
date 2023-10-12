import express  from "express";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () =>{
  console.log(`listening on port ${port}`);
})