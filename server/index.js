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

//current test of query styles-
app.get('/products/:product_id/styles', (req, res) => {
  var productId = req.params.product_id;
 var newResults = {};
 var resultsArray;
 var counter = 1;
 var photosArray = [];
 var skus = {};
 var photoCounter = 1;
 var skusCounter = 1;

  pool.queryStyles(productId, (err, results) => {
    if(err) {
      res.sendStatus(400)
    }else {
      var returnedResults = results.rows
      console.log('results array', returnedResults[0]['size']);
      var skuKey = returnedResults[0]['size'].toString()


      //iterate results row
      newResults['style_id'] = returnedResults[0]['stylesid'];
      newResults['name'] = returnedResults[0]['name'];
      newResults['original_price'] = returnedResults[0]['original_price'];
      newResults['default?'] = returnedResults[0]['default_style'];
      newResults['photos'] = [returnedResults[0]['thumbnail_url'], returnedResults[0]['url']];
      skus[returnedResults[0]['size']] = returnedResults[0]['quantity'];

    console.log('newResults', newResults);
    console.log('skus', skus);

      for(var i = 1; i < returnedResults.length; i++) {
        //if styles id hasnt change
        if(returnedResults['stylesid'] === counter) {
             //check photos and add
             console.log(returnedResults[i].skusid)
             if(returnedResults[i]['photos'] > skusCounter) {
               console.log('yeah')
               skus[returnedResults[i]['size']] = skus[returnedResults[i]['quantity']]
               skusCounter++;
             }
             if(returnedResults[i]['skusid'] > photosCounter) {
               console.log('counting skussssss')
               photosArray.push(
                 { 'thumbnail_url': returnedResults[i]['thumbnail_url'],
                    'url': returnedResults[i]['url']
               });
               photosCounter++;
             }
          //check features and add

        }

        //if styles id has changed
         if(returnedResults[i].stylesid > counter) {
           //combine all of the style 1 photos in an array, add the skus object, and then push the full object into the array. then recall the function.
          counter ++;
          photosArray = [];
          skus = {};
          photoCounter = 1;
         skusCounter = 1;




         }

      }

      res.send(returnedResults);
    }
  })
});
//product styles

/*
this was original query it pulled all the data but didn't organize it correctly
app.get('/products/:product_id/styles', (req, res) => {
  var productId = req.params.product_id;
  var resultObject = {product_id: productId.toString()}
  console.log('resultObject', resultObject)

  pool.queryStylesByProductId(productId, (err, results) => {
    if(err) {
      res.sendStatus(400)
    }else {
      var returnedResults = results.rows
      console.log('results array', returnedResults);
      resultObject.results = returnedResults;

      pool.querySkusById(productId, (err, results) => {
        if(err){
          res.sendStatus(404)
        } else {
          var skus = results.rows;
          resultObject.skus = skus;

          pool.queryPhotosById(productId, (err, results) => {
            if(err) {
              res.sendStatus(400)
            } else {
              console.log('query photos is working', results.rows);
              var photos = results.rows;
          resultObject.photos = photos;
              res.send(resultObject);
            }
          })
        }
      })
      //make query to add the photos
    }
  })

})
*/

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