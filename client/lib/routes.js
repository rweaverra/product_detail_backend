const apiPath = 'http://52.26.193.201:3000/';
/* List Products - Retrieves the list of products.

GET /products/list

Parameters

Parameter    Type        Description
page         integer     Selects the page of results to return. Default 1.
count        integer     Specifies how many results per page to return. Default 5.

Status: 200 OK

[
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo...",
    "category": "Jackets",
    "default_price": "140"
  }
]
*/
const listProducts = (callback) => {
  const path = `${apiPath}/products/list`;
  fetch(path)
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};
/* Product Information - Returns all product level information for a specified product id.

GET /products/:product_id

Parameters
Parameter    Type        Description
product_id   integer     Required ID of the Product requested

Status: 200 OK

{
  "id": 11,
  "name": "Air Minis 250",
  "slogan": "Full court support",
  "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance...",
  "category": "Basketball Shoes",
  "default_price": "0",
  "features": [
    {
      "feature": "Sole",
      "value": "Rubber"
    },
    {
      "feature": "Material",
      "value": "FullControlSkin"
    },
    // ...
  ],
}
*/

/* Product Styles - Returns the all styles available for the given product.

GET /products/:product_id/styles

Parameters
Parameter    Type        Description
product_id   integer     Required ID of the Product requested
Response

Status: 200 OK

{
  "product_id": "1",
  "results": [
    {
      "style_id": 1,
      "name": "Forest Green & Black",
      "original_price": "140",
      "sale_price": "0",
      "default?": 1,
      "photos": [
        {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
        },
       {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
        }
        // ...
      ],
    "skus": {
      "XS": 8,
      "S": 16,
      "M": 17,
      "L": 10,
      "XL": 15
    }
  },
  {
    "style_id": 2,
    "name": "Desert Brown & Tan",
    "original_price": "140",
    "sale_price": "0",
    "default?": 0,
    "photos": [
        {
          "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_2_photo_number.jpg"
        }
      // ...
      ],
    "skus": {
      "S": 16,
      "XS": 8,
      "M": 17,
      "L": 10,
      "XL": 15,
      "XXL": 6
      }
  },
  // ...
}
*/

/* Reviews - Returns a list of reviews for a particular product.

GET /reviews/:product_id/list

Parameters
Parameter    Type        Description
product_id   integer     Specifies the product for which to retrieve reviews.
page         integer     Selects the page of results to return. Default 1.
count        integer     Specifies how many results per page to return. Default 5.
sort         text        Changes the sort order of reviews to be based on newest/helpful/"relevant

Status: 200 OK

{
  "product": "2",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": 0,
      "response": "",
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": 0,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    },
    // ...
  ]
}
*/

/* Questions & Answers
  I think I will want to connect to Kym's service via link.
*/

/* Cart - Retrieves list of products added to the cart by a user.

GET /cart/:user_session

Parameters

Parameter    Type        Description
user_session integer     Identifier for the user session for which the cart should be pulled

Status: 200 OK

[{
    "id": 1,
    "user_session": 1234,
    "product_id": 1,
    "active": 1
  },
  {
    "id": 2,
    "user_session": 1234,
    "product_id": 4,
    "active": 1
  },
  // ...
]
*/

/* Add to Cart - Adds a product to the cart.

POST /cart/

Body Parameters
Parameter    Type        Description
user_session int         Integer identifying the user session
product_id   int         ID for the product being added to the cart

Status: 201 CREATED
*/

/* Interactions - Adds a interaction to the db.

POST /interactions/

Body Parameters
Parameter    Type        Description
element      string      Required. Selector for the element which was clicked
widget       string      Required. Name of the module/widget in which the click occured
time         string      Required. Time the interaction occurred

Success: Status: 201 CREATED
Invalid parameters: Status: 422 UNPROCESSABLE ENTITY
 */

export default listProducts;
