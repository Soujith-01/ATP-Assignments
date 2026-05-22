//steps to create Backend
1. generate package.json 
    create .env
2. create express server
3. install mongoose and connect to mongoDB server
    REST API-mongoDB native driver->DB server
    REST API-mongoose  ODM(object document mapping) tool->DB server//used to connect to mongoDB server
//actual Backend
4. create Schema and Model of the Resource(Users)

5. Build User REST API
   - Create user
   - read all users
   - read a user by ID
   - update a user by ID
   - delete a user by ID

7. create UserApi and define routes
   - handling unavailable resourses
   - validators during update
   - hashing password(bcryptjs)
   - unique fields
   - refined version of error handling middleware

8. User Authentication(Login) --> submit credentials and get token
   - req---->Public Routes(By anyOne)
   - req--->middleware--->Protected Routes(By authenticated Users only)

# Requests
1. read users and products
2. read user and product by id
3. update user and product
4. delete user and product
   
## Data models

### User model

Fields:
- `username` (string, required)
- `password` (string, required, stored as hashed password)
- `email` (string, required, unique)
- `age` (number)
- `cart` (array of items)
  - `product` (ObjectId reference to `product`)
  - `count` (number, default `1`)

### Product model

Fields:
- `productId` (string, required)
- `productName` (string, required)
- `price` (number, required, min `10000`, max `50000`)
- `brand` (string, required)
## Environment variables

- `PORT` — port for the Express server
- `DB_URL` — MongoDB connection string
- `SECRET_KEY` — secret key used to sign JWT tokens

