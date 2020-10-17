const express = require('express');
const app = express();
const pool = require('../db');
const cors = require('cors')
const PORT = 3000;

app.use(express.static('../client/dist'));
app.use(express.json())
app.use(cors());



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
  var page = req.params.page;
  var count = req.params.count;
});



//product items
app.get('/products/:product_id', function (req, res) {
  console.log('req.body', req.params.product_id);
  var productId = req.params.product_id;
  var resultObject ={};

  pool.queryProductId(productId, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      resultObject = results.rows[0];
      pool.queryFeauturesById(productId, (err, results) => {
        if (err) {
          res.sendStatus(404);
        } else {
          var features = results.rows
          resultObject.features = features;
          console.log('resultObject', resultObject);
          res.send(resultObject);
  }
    }
      )
  }
});
});


//product styles

app.get('/products/:product_id/styles', (req, res) => {
  var productId = req.params.product_id;
  var resultObject = {product_id: productId.toString()}
  console.log('resultObject', resultObject)

  pool.queryStylesByProductId(productId, (err, results) => {
    if(err) {
      res.sendStatus(400)
    }else {
      var returnedResults = results.rows
      resultObject.results = returnedResults;
      pool.querySkusById(productId, (err, results) => {
        if(err){
          res.sendStatus(404)
        } else {
          console.log('queryskus is working', results.rows);
          var skus = results.rows;
          resultObject.skus = skus;
          res.send(resultObject);
        }
      })
      // res.send(resultObject);
      //make query to add the skus.
    }
  })

})


/*

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


*/