# 🚀 Express Routing Project

A beginner-friendly **Node.js + Express.js** project that demonstrates how routing works in Express.

This project covers serving HTML pages, handling redirects, and displaying a custom **404 error page**.

---

## 📌 Project Overview

This application includes multiple routes such as **Home**, **About**, and **Contact** pages.  
It also demonstrates:

- Route redirection
- Handling invalid routes
- Sending proper HTTP status codes

---

## ✨ Features

- 🔹 Basic routing with Express.js
- 🔹 Multiple pages (Home, About, Contact)
- 🔹 Route redirection (`/index → /`)
- 🔹 Custom 404 error page
- 🔹 Proper status code handling
- 🔹 Clean and beginner-friendly structure

---

## 🛣️ Routes

| Route        | Description                |
|-------------|--------------------------|
| `/`         | Home Page                |
| `/about`    | About Page               |
| `/contact`  | Contact Page             |
| `/index`    | Redirects to Home Page   |
| `*`         | Custom 404 Page          |

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- HTML

---

## 📁 Project Structure

```
project/
│
├── server.js
├── home.html
├── about.html
├── contact.html
├── 404.html
├── package.json
└── package-lock.json
```

---

## ⚙️ How It Works

1. The server is created using **Express.js**
2. Each route serves a specific HTML file
3. The `/index` route redirects to the Home page
4. Any invalid route triggers a custom **404 error page**

---

## ▶️ How to Run the Project

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
node server.js
```

### 3. Open in browser
```
http://localhost:3000
```

---

## 🎯 Why This Project Matters

This project helps you:

- Understand **Express routing fundamentals**
- Learn how backend servers serve HTML
- Practice **real-world routing logic**
- Build a strong base for **MERN stack development**

---

## 👨‍💻 Author

**Ashokkumar T**

> Built while learning Node.js and Express.js 🚀
