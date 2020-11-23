# Proto Company product server


## Table of Contents

* [Achievements and Optimizations](#achievements-and-optimizations)
* [Technologies Used](#technologies-used)
* [Requirements](#requirements)
* [Development](#development)

# Achievements and Optimizations
- Seeded database of 10 million primary records (over 35 million total records)
- Decreased query time from 4500ms to .87ms by indexing database(see first image)
- Used NGINX load balancer and horizontally scaled microservice from 1 server to 3 servers(see second image):
	- Increased response time from 350 requests per second(1532ms response rate) to 500 requests per second(17ms response rate)
	
![SDC query speed](https://user-images.githubusercontent.com/65146641/100021271-7bcc4780-2d9e-11eb-9ad6-b28d285b8ad1.png)
![Product RPS Loader io](https://user-images.githubusercontent.com/65146641/100020534-33605a00-2d9d-11eb-9e0b-be887b7c940f.png)

## Technologies Used
- JavaScript
- React
- PostgresSQL
- Express
- Node.js
- NGINX
- Jest
- Artillery
- New Relic
- Amazon Web Services

## Requirements
- Node 6.13.0 or greater
- npm

## Development
  	
> use the code below to start app
	
~~~~
npm install
npm run start
npm run server
~~~~




