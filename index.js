const express = require('express')
const logger = require('./Logger');
const app = express();
const morgon = require('morgan');
const port = 3000;





// app.get('/',logger, (req, res) => {
//   res.send('Hello Omkar !')
// })
//  For above code we can also use
//app.use(logger); //should be always at TOP

app.use(morgon('tiny'));
app.get('/', (req, res) => {
  res.send('Hello Omkar !')
})

app.get('/users', (req, res) => {
  res.status(200).send('All Users !')
})

app.get('/user/:id', (req, res) => {
  const {id} = req.params;
  console.log(id);
  res.status(200).send(`User -->${id}`);
})

app.listen(port, () => {
  console.clear();
  console.log(`Example app listening on port ${port}`)
})
