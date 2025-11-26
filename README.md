# Prodexa – Modern Product & Inventory Management System

Prodexa is a high-performance, full-stack product & inventory management platform built for scalability. It provides powerful tools for product creation, categorization, searching, and secure user authentication—designed with clean architecture and modern UI/UX.

---

### 🔗 Live Links

- **Live Demo:** <MY_LIVE_URL>
- **Live Demo Server:** <MY_LIVE_URL>
- **Repository (Client):** <MY_REPO_URL>
- **Repository (Server):** <MY_REPO_URL>

---

## 🚀 Features

### 🛒 Product Management

- Full CRUD operations for products
- Real-time search functionality
- Category-based filters and sorting
- Clean, responsive product listing UI

### 🔐 Authentication

- Secure login & registration using Firebase Authentication
- Protected routes
- Session handling and state management

### ⚡ Performance & UX

- Built with Next.js + Tailwind CSS + DaisyUI
- Toast notifications for user actions
- Fully responsive and mobile-first

### 🗄️ Backend API

- REST API using Node.js + Express
- MongoDB database integration
- Modular and scalable folder structure

---

## 🛠️ Tech Stack

| Layer      | Technology               |
| ---------- | ------------------------ |
| Frontend   | Next.js (App Router)     |
| Styling    | Tailwind CSS + DaisyUI   |
| Auth       | Firebase Authentication  |
| Backend    | Node.js + Express.js     |
| Database   | MongoDB (Atlas or Local) |
| Deployment | Vercel / Render          |

---

## ⚙️ Setup & Installation

Follow these steps to set up the project locally.

---

# 1. Prerequisites

Ensure you have installed:

- Node.js (LTS)
- npm or Yarn
- MongoDB (local or cloud)
- Firebase project (for auth keys)

---

# 2. Backend Setup

```bash
git clone <YOUR_REPO_URL>
cd prodexa-backend
npm install
```

Create a .env file:

```bash
PORT=5000
MONGODB_URI=<YOUR_MONGODB_CONNECTION_STRING>
```

Start backend:

```bash
npm start
```

3. Frontend Setup

```bash
cd prodexa-client
npm install

```

Create .env.local:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000

NEXT_PUBLIC_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<YOUR_SENDER_ID>
NEXT_PUBLIC_FIREBASE_APP_ID=<YOUR_APP_ID>
```

Start frontend:

```bash
npm run dev
```

📂 Project Structure

prodexa/
│
└── src/
├── app/ # Next.js App Router (pages, layouts, routes)
├── components/ # Reusable UI components
├── contexts/ # AuthProvider and global contexts
├── hooks/ # Custom hooks (useAuth, useAxios, etc.)
├── styles/ # Tailwind configuration + global CSS
└── public/ # Static assets (images, icons, logo)

📬 Contact

Developer: Raiyan Sohel
