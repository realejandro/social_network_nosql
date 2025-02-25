# Social Network API

## Description

The **Social Network API** is a backend application that allows users to interact with a social network through a RESTful API. The API is built with **Node.js**, **Express**, and **MongoDB** using **Mongoose** for object data modeling (ODM). This API enables users to create, update, and delete users, thoughts, reactions, and friends. It also supports retrieving data for users and thoughts via **GET** requests.

## Features

- **Users and Thoughts Management**:
  - Create, Read Update, and Delete users.
  - Create, Read, update, and delete thoughts.
  - Add and remove reactions to thoughts.
  - Manage user friendships by adding and removing friends.
  
- **Database**: MongoDB, connected via Mongoose.
- **API Testing**: Use **Insomnia** to test all the routes for creating, updating, deleting, and retrieving data.

## Requirements

- **Node.js** (version 14.x or higher)
- **MongoDB** (a local or cloud instance)
- **Typescript**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social-network-api.git
   ```

2. Navigate into the project directory:
   ```bash
   cd social-network-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up your MongoDB database:
   - If using a local MongoDB instance, make sure it’s running.
   - Alternatively, set up a cloud-based MongoDB instance (e.g., via MongoDB Atlas) and update the connection URI in the `.env` file.

5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Users Routes

- **GET /api/users**  
  Retrieve all users.
  - Response: Formatted JSON containing an array of all users.

- **GET /api/users/:userId**  
  Retrieve a user by ID.
  - Response: Formatted JSON containing the user's data.

- **POST /api/users**  
  Create a new user.
  - Request Body:
    ```json
    {
      "username": "string",
      "email": "string"
    }
    ```

- **PUT /api/users/:userId**  
  Update a user's information by ID.
  - Request Body:
    ```json
    {
      "username": "string",
      "email": "string"
    }
    ```

- **DELETE /api/users/:userId**  
  Delete a user by ID.

### Thoughts Routes

- **GET /api/thoughts**  
  Retrieve all thoughts.
  - Response: Formatted JSON containing an array of all thoughts.

- **GET /api/thoughts/:thoughtId**  
  Retrieve a thought by ID.
  - Response: Formatted JSON containing the thought's data.

- **POST /api/thoughts**  
  Create a new thought.
  - Request Body:
    ```json
    {
      "text": "string",
      "userId": "userId"
    }
    ```

- **PUT /api/thoughts/:thoughtId**  
  Update a thought by ID.
  - Request Body:
    ```json
    {
      "text": "string"
    }
    ```

- **DELETE /api/thoughts/:thoughtId**  
  Delete a thought by ID.

### Reactions Routes

- **POST /api/thoughts/:thoughtId/reactions**  
  Add a reaction to a thought.
  - Request Body:
    ```json
    {
      "reactionBody": "string",
      "userId": "userId"
    }
    ```

- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**  
  Delete a reaction from a thought.

### Friends Routes

- **POST /api/users/:userId/friends/:friendId**  
  Add a friend to a user’s friend list.

- **DELETE /api/users/:userId/friends/:friendId**  
  Remove a friend from a user’s friend list.

## Usage

1. Start the server by running `npm start`.
2. Open **Insomnia** or another API client of your choice.
3. Use the provided API routes to test GET, POST, PUT, and DELETE requests for users, thoughts, reactions, and friends.

### Example Testing with Insomnia

- **Create a User**:  
  - Method: POST  
  - URL: `http://localhost:3000/api/users`  
  - Request Body:
    ```json
    {
      "username": "JohnDoe",
      "email": "johndoe@example.com"
    }
    ```

- **Get All Users**:  
  - Method: GET  
  - URL: `http://localhost:3000/api/users`

- **Create a Thought**:  
  - Method: POST  
  - URL: `http://localhost:3000/api/thoughts`  
  - Request Body:
    ```json
    {
      "text": "This is a test thought",
      "userId": "userId"
    }
    ```

- **Add a Reaction to a Thought**:  
  - Method: POST  
  - URL: `http://localhost:3000/api/thoughts/:thoughtId/reactions`  
  - Request Body:
    ```json
    {
      "reactionBody": "This is a reaction",
      "userId": "userId"
    }
    ```

- **Add a Friend**:  
  - Method: POST  
  - URL: `http://localhost:3000/api/users/:userId/friends/:friendId`

- **Delete a Friend**:  
  - Method: DELETE  
  - URL: `http://localhost:3000/api/users/:userId/friends/:friendId`

## License

This project is licensed under the MIT License.

## Contact

For any questions or contributions, please contact [your email] or open an issue on the repository.

---

This README provides a comprehensive guide to setting up and using the Social Network API, covering setup, available routes, and testing through Insomnia. Let me know if you need further adjustments!