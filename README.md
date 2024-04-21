# Blogify!

Blogify is a dynamic blog application built with Node.js, Express.js, MongoDB, and EJS.The user can publish,read, edit,delete posts, and search with keywords.

- Node.js serves as the runtime environment, handling server-side logic and routing,
- Express.js acts as a web application framework, simplifying route definition and request handling. 
- MongoDB as the DBMS.
- EJS (Embedded JavaScript) serves as the templating engine.
- Additionally, Bootstrap is utilized for frontend design, providing pre-designed CSS and JavaScript components for a visually appealing and user-friendly interface

## Tech Stack

**Client:** EJS,Bootstrap

**Server:** Node.js, Express.js,RESTful API

**Data Management:** MongoDB

**Dependency:** Axios: Promise-based HTTP client for the browser and Node.js
Mongoose:Object Data Modeling (ODM) library for MongoDB and Node.js,provides abstraction over MongoDB's native driver

## Database Configuration

1.**Ensure MongoDB is Running**: Before executing any MongoDB commands, ensure that MongoDB is running on your local machine or server. Start MongoDB:
   `mongod`
   
2.**Connect to MongoDB**: `mongo`

3.**Create a Database**: `use mydb`

4.**Create Collection**: `db.createCollection('blog')`

## Run Locally

1. Clone the project: 
```bash
  git clone https://github.com/vishwajeetk5/Blogify.git
```
2. Go to the project directory: `cd Blogify`
3. Install dependencies:        `npm install`
5. Start the custom API server: `node api.js`
6. Then start Backend server:   `node index.js`
7. Access the application at:   `http://localhost:3000`

## Screenshots
Home Page with recent posts
![image](https://github.com/vishwajeetk5/Blogify/assets/119106702/527af77f-5007-4e8e-bdad-7086959d1355)
New Post page
![image](https://github.com/vishwajeetk5/Blogify/assets/119106702/d63b2d5b-2653-4df7-9aa5-21f9eba8c6d4)
Edit Post page
![image](https://github.com/vishwajeetk5/Blogify/assets/119106702/3a108d5c-bca1-4180-b72e-fd0c5eaf4dcd)
Search and highlight through keyword
![image](https://github.com/vishwajeetk5/Blogify/assets/119106702/4041bc7a-b086-418f-8207-0f02b9837ba3)


## Concepts Learned

- Building a RESTful API
- CRUD operations for blog posts using API and MongoDB with mongoose abstraction
- MongoDB installation and commands
- Using Postman for API testing
- Server-side templating with EJS
- Frontend-backend integration
- [Background Blob animation using Illustrator,SVG](https://dev.to/uuuuuulala/making-background-blob-animation-in-just-15kb-step-by-step-guide-2482)

## Mistakes Made
- HTML Never HTML forms do not support methods other than 'GET' and 'POST'

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

