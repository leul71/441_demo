import express  from "express";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  const name = req.query.name;
  res.type('html');
  res.send (`
  <html>
    <head>
      <title> Hello ${name}</title>
    </head>
    <body>
      Hello ${name}
    </body>
</html>
  `)

});

app.listen(port, () =>{
  console.log(`listening on port ${port}`);
})