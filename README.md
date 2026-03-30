# Express Routing Project

This is a basic Node.js and Express.js project that demonstrates how routing works in Express.

The project also shows how to serve HTML pages, redirect routes, and create a custom 404 error page.

---

## Project Description

This project includes multiple routes such as Home, About, and Contact pages.  
It also demonstrates route redirection and handling invalid routes using a custom 404 page.

---

## Features

- Basic routing using Express.js
- Multiple pages (Home, About, Contact)
- Redirect route example
- Custom 404 error page
- Status code handling
- Beginner-friendly project

---

## Routes

- `/` → Home Page
- `/about` → About Page
- `/contact` → Contact Page
- `/index` → Redirect to Home Page
- Invalid route → Custom 404 Page

---

## Technologies Used

- Node.js
- Express.js
- JavaScript
- HTML

---

## Project Structure


project
│
├── server.js
├── home.html
├── about.html
├── contact.html
├── 404.html
├── package.json
└── package-lock.json


---

## How It Works

1. The server is created using Express.js
2. Each route sends an HTML file to the browser
3. The `/index` route redirects to the Home page
4. If the user enters an invalid route, a custom 404 page is shown

---

## How to Run This Project

### 1. Install dependencies


npm install


### 2. Start the server


node server.js


### 3. Open in browser


http://localhost:3000


---

## Why This Project is Useful

This project is useful for:

- Beginners learning Express.js
- Understanding routing in backend development
- Learning how to serve HTML using Node.js
- Practicing basic backend concepts

---

## Author
Ashokkumar T

This project is created while learning Node.js and Express.js.
