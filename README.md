# MERN CRUD Application

This is a CRUD (Create, Read, Update, Delete) application built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js.

## Features

- Create, read, update, and delete operations
- User-friendly interface
- Responsive design

## Technologies Used

- MongoDB: A document-oriented NoSQL database used for high volume data storage.
- Express.js: A web application framework for Node.js.
- React.js: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Setting Up MongoDB

1. Install MongoDB:
   - For Windows, visit [MongoDB Download Center](https://www.mongodb.com/try/download/community) and download the installer.
   - For Mac, you can use Homebrew: `brew install mongodb`
   - For Linux, you can use the package manager for your specific distro.

2. Start MongoDB:
   - For Windows, you may need to start the MongoDB service by navigating to the bin folder of the MongoDB instance and running `mongod.exe`.
   - For Mac and Linux, you can usually start the service with `sudo service mongodb start`.

3. Create a new MongoDB database for your application:
   - Open a new terminal window and start the MongoDB shell with the `mongo` command.
   - Create a new database with `use your-db-name`.

4. Update the `.env` file in your project root to include your MongoDB URI, which should look something like this: `MONGODB_URI=mongodb://localhost/your-db-name`.

5. Your application should now be able to connect to your MongoDB database. If you run into any issues, refer to the [MongoDB documentation](https://docs.mongodb.com/manual/).

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/your-repo-name.git`
2. Navigate into the directory: `cd your-repo-name`
3. Install the dependencies: `npm install`
4. Start the server: `npm run dev`
5. Visit `http://localhost:5173` in your browser


