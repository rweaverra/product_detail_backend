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


const queryProductId = function(callback) {
  var queryString = `SELECT * FROM product WHERE id = 1;`

  pool.query(queryString, (err, results) => {
    if(err) {
      callback(err, null);
    }else {
      callback(null, results);
    }

 })

}



module.exports = {
  pool,
  queryProductId
};