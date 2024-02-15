import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import  authRoutes  from './routes/authRoutes';
import  userRoutes  from './routes/userRoutes';
import * as dotenv from 'dotenv';
dotenv.config();


/*
APP.TS: 
This is the starting point of the application

MIDDLEWARE: 
app.ts is where we set up the global middleware for the app and app.ts is the 
starting point of the application.

In Express we use the method express().use() to mount middleware functions

Middleware functions are functions that have access to the request object ('req'),
the response object ('res'), and the next middleware function in the application's 
request cycle. These functions can perform tasks such as executing code, making changes to the request
and response objects, ending request-response cycle, or calling the next middleware function. 

When a request to the server is made, Express will run through all middleware that has been defined using
express().use() in the order they were added until it sends a response or error. 

For example: 'cors()' is a middleware function that configures the server to set appropriate headers.
this middleware sets the necessary CORS headers in the response object ('res'). The cors() middleware
calls 'next()' to pass control to the next middleware function or route handler if no more middleware.

ROUTES: 
Routes are imported from your routes directory and are tied to the application. Each route should have
its own file (e.g., 'authRoutes.ts', 'userRoutes.ts') where specific endpoints are defined.

Inside the route files, you'll map the endpoints to specific controller functions.

CONTROLLERS: 
Inside the route files, you'll map the endpoints to specific controller functions.
 
PORT: 
You need to tell the app to listen on a specific port. 
*/

const app = express();// Creating the Express application
app.use(cors());// Middleware function the prevents cross side origin
app.use(helmet()); // Small middleware functions that set HTTP response headers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Start server
const PORT: string | number = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


