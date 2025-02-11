
# Contact Management Backend

A simple **Contact Management API** built using **Node.js, Express, and MongoDB**. This backend allows users to **create, read, update, and delete contacts** with proper validation and error handling.

---

##  Features
✅ Create, Update, Delete, and Fetch Contacts 
✅ Data Validation using **express-validator**  
✅ Proper **Error Handling** and **HTTP Status Codes**  
✅ Modular Code Structure for **Scalability**  

---

## Tech Stack
- **Node.js** - JavaScript runtime  
- **Express.js** - Backend framework  
- **MongoDB & Mongoose** - NoSQL Database  
- **dotenv** - Environment variables  
- **express-validator** - Input validation  
- **Cors** - Cross-Origin Resource Sharing  
- **nodemon** - Development server monitoring  

---

 Folder Structure
contact-management-backend/ │── node_modules/
│── config/
│ ├── db.js # MongoDB connection setup │── controllers/
│ ├── contactController.js # Contact CRUD logic │── models/
│ ├── contactModel.js # Mongoose schema │── routes/
│ ├── contactRoutes.js # Express router │── validators/
│ ├── contactValidator.js # Input validation │── middleware/
│ ├── errorHandler.js # Centralized error handling middleware │── .env # Environment variables (MongoDB URI) │── .gitignore # Ignore node_modules and .env │── index.js # Main server entry point │── package.json # Dependencies │── README.md # Documentation



git clone <your-github-repo-url>
cd contact-management-backend

 Install Dependencies
npm install
 Set Up Environment Variables
Create a .env file in the root directory and add:

node index.js
 API Endpoints
 Get All Contacts

GET http://localhost:5000/contacts

  {
    "contactId": "65e6aabcd1234567890abcdef",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "createdAt": "2025-02-10T12:00:00.000Z"
  }
]

GET http://localhost:5000/contacts/{id}
 Create a Contact

POST http://localhost:5000/contacts
 Request Body

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210",
  "address": "456 Elm St"
}
 Update a Contact
PUT http://localhost:5000/contacts/{id}

DELETE http://localhost:5000/contacts/{id}
 Author
Developer: [janaki ramudu]