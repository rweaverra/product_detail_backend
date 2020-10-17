const Pool = require("pg").Pool;

const pool = new Pool({
  user: "ryanweaver",
  password: "rootpass",
  database: "reviews2",
  host: "localhost",
  port: 5432
});

// var sql = fs.readFileSync('postgres.sql').toString();
// pool.query()

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

const queryFeauturesById = function(productId, callback) {
 var queryString = `SELECT feature, value FROM features
 INNER JOIN product ON product_id = ${productId};`

 pool.query(queryString, (err, results) => {
   if(err, null) {
     callback(err)
   } else {
     callback(null, results)
   }
 })
}

const querySkusById = function(productId, callback) {
  var queryString = `SELECT size, quantity FROM skus
  INNER JOIN styles ON styles_id = ${productId};`

  pool.query(queryString, (err, results) => {
    if(err, null) {
      callback(err)
    }else {
      callback(null, results)
    }
  })
}



module.exports = {
  pool,
  queryProductId,
  queryStylesByProductId,
  queryFeauturesById,
  querySkusById
};