
# Blogify!

Blogify is a dynamic blog application built with Node.js, Express.js, MongoDB, and EJS.
--Node.js serves as the runtime environment, handling server-side logic and routing,
--while Express.js acts as a web application framework, simplifying route definition and request handling. 
--MongoDB functions as the database management system, storing and managing blog post data efficiently.
--EJS (Embedded JavaScript) serves as the templating engine, enabling dynamic rendering of HTML content on the server-side.
--Additionally, Bootstrap is utilized for frontend design, providing pre-designed CSS and JavaScript components for a visually appealing and user-friendly interface


## Tech Stack

**Client:** EJS,Bootstrap

**Server:** Node.js, Express.js,RESTful API

**Data Management:** MongoDB

**Dependency:** Axios: Promise-based HTTP client for the browser and Node.js

## Database Configuration
1.Connect to MongoDB: `mongo`
2.Create a Database: `use mydb`
3.Create Collection: `db.createCollection('blog')`

## Run Locally

1. Clone the project: 
```bash
  git clone https://github.com/vishwajeetk5/Blogify.git
```
2. Go to the project directory: `cd Blogify`
3. Install dependencies: `npm install`
5. Start the custom API server: `node api.js`
6. Then start Backend server: `node index.js`
7. Access the application at: `http://localhost:3000`

## Screenshots

![image](https://github.com/vishwajeetk5/Blogify/assets/119106702/90624a0b-e3e5-4dda-b56d-ee1a00075aab)
![image](https://github.com/vishwajeetk5/Blogify/assets/119106702/d63b2d5b-2653-4df7-9aa5-21f9eba8c6d4)
![image](https://github.com/vishwajeetk5/Blogify/assets/119106702/3a108d5c-bca1-4180-b72e-fd0c5eaf4dcd)

## Concepts Learned

- Building a RESTful API
- CRUD operations for blog posts using API and MongoDB
- MongoDB installation and commands
- Using Postman for API testing
- Server-side templating with EJS
- Frontend-backend integration
[![Node.js Version](https://img.shields.io/node/v/express)](https://nodejs.org/)
[![npm Version](https://img.shields.io/npm/v/npm)](https://www.npmjs.com/)
