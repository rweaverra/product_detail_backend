const express = require('express');
const app = express();
const pool = require('../db');
const PORT = 3000;

app.use(express.static('../client/dist'));
app.use(express.json())




app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});




//Below works
app.post("/test", (req, res) => {
  console.log('inside app.post')
pool.query('SELECT * FROM people', (err,res)=>{
 console.log(err,res);

}
)
 });




//PRODUCTS API===================================================
//list Products
app.get('/products/list/:page/:count', function (req, res) {
  //need to account for page and count parameters


});


// app.post("/test", (req, res) => {
//   console.log('inside app.post')
// pool.query('SELECT * FROM people', (err,res)=>{
//  console.log(err,res);

// }
// )
//  });

//product information
app.get('/products/:product_id', function (req, res) {
  //query databbase

  pool.queryProductId((err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  })
console.log('this test');
});


//product Styles
app.get('/products/:product_id/styles', function (req, res) {
  //query databbase



  if(err) {
    res.sendStatus(422)
  } else {
    res.sendStatus(200)
  }
});

//related Products
app.get('/products/:product_id/related', function (req, res) {
  //query databbase



  if(err) {
    res.sendStatus(422)
  } else {
    res.sendStatus(200)
  }
});


//GET /cart/:user_session
app.get('/cart/:user_session', function (req, res) {
  //query database

  if(err) {
    res.sendStatus(400)
  } else {
    res.sendStatus(200)
  }
});




//add to cart

app.post('/cart/:user_session/:product_id', function (req, res) {
  //query database

  if(err) {
    res.sendStatus(500)
  } else {
    res.sendStatus(201)
  }
});

//Interactions API
app.post('/interactions/:element/:widget/:time', function (req, res) {
  //query database

  if(err) {
    res.sendStatus(422)
  } else {
    res.sendStatus(201)
  }
});


