# Comic Store Backend

## Project Overview

This project is a backend service for an eCommerce comic book store, built using Node.js, Express, and MySQL. It allows the management of comic book data through a RESTful API. The main features include adding, updating, retrieving, and deleting comic records in a MySQL database.

## Key Features

- **CRUD Operations**: The API supports full CRUD operations (Create, Read, Update, Delete) for managing comic book entries.
- **MySQL Database**: A `comic_store` database is used to store the comic details like name, author, publication year, price, discount, and condition.
- **Error Handling**: Proper error messages are returned for missing or incorrect data, as well as database errors.

## Technologies Used

- **Node.js** and **Express.js**: For creating the server and handling API requests.
- **MySQL**: To store and manage comic data.
- **Postman**: For testing the API endpoints.

## Project Setup

1. **Database**: 
   - Create the `comic_store` database.
   - Create a `comics` table with fields like `name`, `author`, `price`, etc.
   
2. **Backend Setup**:
   - Install dependencies: `express`, `mysql2`, `dotenv`.
   - Set up environment variables in a `.env` file (DB credentials, PORT, etc.).

3. **API Endpoints**:
   - `GET /api/comics`: Fetch all comics.
   - `POST /api/comics`: Add a new comic.
   - `PUT /api/comics/:id`: Update a comic by its ID.
   - `DELETE /api/comics/:id`: Delete a comic by its ID.

## How to Run the Project

1. Clone the project.
2. Set up MySQL and create the required database and table.
3. Install dependencies using `npm install`.
4. Start the server with `npm start`.
5. Use Postman to interact with the API via `http://localhost:3000/api/comics`.

## Testing with Postman

Use the provided `postman_collection.json` to test the API endpoints for adding, updating, and fetching comic data.

## Conclusion

This project demonstrates how to build a backend API for an eCommerce platform, handling basic operations with a relational database and providing robust error handling.
