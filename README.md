# Comic Store Backend

# Project Overview
This project is a backend service for an eCommerce comic book store, built using Node.js, Express, and MySQL. It allows the management of comic book data through a RESTful API. The main features include adding, updating, retrieving, and deleting comic records in a MySQL database.

## Key Features
- **CRUD Operations:** The API supports full CRUD operations (Create, Read, Update, Delete) for managing comic book entries.
- **MySQL Database:** A `comic_store` database is used to store the comic details like name, author, publication year, price, discount, and condition.
- **Error Handling:** Proper error messages are returned for missing or incorrect data, as well as database errors.

## Technologies Used
- **Node.js and Express.js:** For creating the server and handling API requests.
- **MySQL:** To store and manage comic data.
- **Postman:** For testing the API endpoints.
- **MySQL Workbench:** For database management and executing SQL queries.

## Project Setup
### Database:
1. Create the `comic_store` database using MySQL Workbench:
    ```sql
    CREATE DATABASE comic_store;
    USE comic_store;
    ```

2. Create a `comics` table within the `comic_store` database:
    ```sql
    CREATE TABLE comics (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        author VARCHAR(255),
        year_of_publication INT,
        price DECIMAL(10, 2),
        discount DECIMAL(5, 2),
        pages INT,
        book_condition ENUM('new', 'used'),
        description TEXT
    );
    ```

### Backend Setup:
- Install dependencies: `express`, `mysql2`, `dotenv`.
- Set up environment variables in a `.env` file (DB credentials, PORT, etc.).

### API Endpoints:
- **GET /api/comics:** Fetch all comics.
- **POST /api/comics:** Add a new comic.
- **PUT /api/comics/:id:** Update a comic by its ID.
- **DELETE /api/comics/:id:** Delete a comic by its ID.

## How to Run the Project
1. Clone the project.
2. Set up MySQL and create the required database and table using MySQL Workbench.
3. Install dependencies using:
    ```bash
    npm install
    ```
4. Start the server with:
    ```bash
    npm start
    ```
5. Use Postman to interact with the API via `http://localhost:3000/api/comics`.

## Testing with Postman
Use the provided `postman_collection.json` to test the API endpoints for adding, updating, and fetching comic data.

## Conclusion
This project demonstrates how to build a backend API for an eCommerce platform, handling basic operations with a relational database and providing robust error handling.

