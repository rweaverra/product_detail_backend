const Pool = require("pg").Pool;

const pool = new Pool({
  user: "ryanweaver",
  password: "rootpass",
  database: "reviews1",
  host: "localhost",
  port: 5432
});



// pool.query('SELECT * FROM people', (err,res)=>{
//   console.log(err,res)
//   pool.end()
// })


const queryProductId = function(productId, callback) {
  var queryString = `SELECT * FROM product WHERE id = ${productId};`

  pool.query(queryString, (err, results) => {
    if(err) {
      callback(err, null);
    }else {
      callback(null, results);
    }
 })
}

const queryStylesByProductId = function(productId, callback) {
  var queryString = `SELECT * FROM styles WHERE product_id = ${productId};`

  pool.query(queryString, (err, results) => {
    if(err) {
      callback(err, null)
    }else {
      callback (null, results)
    }

  })
}



module.exports = {
  pool,
  queryProductId,
  queryStylesByProductId
};