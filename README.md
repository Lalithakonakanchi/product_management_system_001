# 🛒 Product Management System

![Python](https://img.shields.io/badge/Python-3.9+-blue?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.95+-green?logo=fastapi)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-red?logo=python)
![License](https://img.shields.io/badge/License-MIT-yellow)

A simple **Full-Stack Product Management System** built with **FastAPI (Backend)**, **PostgreSQL (Database)**, and **React (Frontend)**.  
You can **add, edit, delete, and manage products easily 🚀**.

---

## 📌 Features
- Add new products with details (ID, Name, Description, Price, Quantity)
- Edit and update product information
- Delete products
- Display product list in a table
- Error/success messages for actions
- API documentation available via Swagger UI (`/docs`)

---

## 🛠️ Tech Stack
- **Backend:** FastAPI, SQLAlchemy, Pydantic  
- **Database:** PostgreSQL  
- **Frontend:** React.js  
- **Others:** Uvicorn, Alembic (for migrations), CORS handling  

---

## 🎯 Learning Goals from this Project

### Backend (FastAPI)
- Designing REST APIs (`GET`, `POST`, `PUT`, `DELETE`)
- Database models with SQLAlchemy (tables, relationships)
- CRUD operations (Create, Read, Update, Delete)
- Error handling (e.g., when product not found)
- API documentation with Swagger (`/docs`)

### Database (PostgreSQL)
- Designing a schema (`products` table with id, name, description, price, quantity)
- Running migrations (Alembic, optional later)
- Writing queries for filtering, sorting

### Frontend (React)
- Fetching data from FastAPI API
- Displaying product lists in a table
- Handling forms (Add Product)
- Showing error/success messages
- Managing state (e.g., products list after add/edit/delete)

### Full-Stack Skills
- Connecting React frontend with FastAPI backend
- Understanding CORS issues and how to fix them
- Deploying both backend + frontend (Heroku, Render, Vercel, etc.)
- Using `.env` files for secrets (DB password, API URL)

### Extra Learning if you extend
- Authentication (login system for admin)
- File uploads (e.g., product images)
- Search, filter, pagination for products
- Dockerizing your project

---

## 🚀 Setup & Run

### 1. Backend (FastAPI + PostgreSQL)
```bash
# Clone the repo
git clone <your-repo-url>
cd FASTAPI

# Create virtual environment
python -m venv myenv
.\myenv\Scripts\activate    # On Windows
source myenv/bin/activate   # On Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn main:app --reload
````

Backend will be running at:
👉 [http://127.0.0.1:8000](http://127.0.0.1:8000)
👉 Swagger Docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
```

Frontend will run at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
FASTAPI/
│── main.py                # FastAPI entry point
│── database.py            # Database connection
│── models.py              # SQLAlchemy models
│── database_models.py     # Product schema
│── requirements.txt       # Python dependencies
│── frontend/              # React app (UI)
│── myenv/                 # Virtual environment (ignored in git)
│── .gitignore
```

---

## 📝 Future Improvements

* ✅ Add user authentication (login system for admin)
* ✅ Add product image upload
* ✅ Add search & filter functionality
* ✅ Add pagination for product list
* ✅ Deploy using Docker & CI/CD

