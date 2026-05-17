# 🚀 Express Routing Project

A beginner-friendly **Node.js + Express.js** application that demonstrates how routing works in a backend server.

This project showcases how to serve HTML pages, handle redirects, and display a custom **404 error page** using clean and structured routing logic.

---

## 📌 Project Overview

This application includes multiple routes such as:

- 🏠 Home Page
- 📄 About Page
- 📞 Contact Page

It also demonstrates:

- Route redirection
- Handling unknown routes
- Sending proper HTTP status codes

---

## ✨ Features

- 🔹 Basic routing using Express.js
- 🔹 Serving static HTML pages
- 🔹 Route redirection (`/index → /`)
- 🔹 Custom 404 error handling
- 🔹 Proper HTTP status codes (200, 302, 404)
- 🔹 Beginner-friendly project structure

---

## 🛣️ Routes

| Route        | Method | Description                |
|-------------|--------|----------------------------|
| `/`         | GET    | Home Page                  |
| `/about`    | GET    | About Page                 |
| `/contact`  | GET    | Contact Page               |
| `/index`    | GET    | Redirects to Home (`/`)    |
| `*`         | GET    | Custom 404 Page            |

---

## 🛠️ Technologies Used

- ⚙️ Node.js
- 🚀 Express.js
- 💻 JavaScript (ES6)
- 🌐 HTML5

---

## 📁 Project Structure

```
project/
│
├── server.js          # Main server file
├── home.html          # Home page
├── about.html         # About page
├── contact.html       # Contact page
├── 404.html           # Custom error page
├── package.json       # Project metadata & dependencies
└── package-lock.json  # Dependency lock file
```

---

## ⚙️ How It Works

1. Express server is initialized in `server.js`
2. Routes are defined using `app.get()`
3. Each route sends an HTML file using `res.sendFile()`
4. `/index` route uses `res.redirect()` to navigate to Home
5. Undefined routes are handled using a wildcard (`*`) and return a custom 404 page

---

## ▶️ How to Run the Project

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
node server.js
```

### 4. Open in browser
```
http://localhost:3000
```

---

## 🎯 Learning Outcomes

- Understand how routing works in Express.js
- Learn how servers deliver HTML content
- Handle redirects and invalid routes
- Build a strong backend foundation for MERN stack development

---

## 🚀 Future Improvements

- Add Express Router (modular routing)
- Use template engines (EJS / Handlebars)
- Add middleware (logging, authentication)
- Deploy the app (Render / Railway / Vercel)

---

## 👨‍💻 Author

**Ashokkumar T**

> Built while learning backend development with Node.js & Express.js 🚀
