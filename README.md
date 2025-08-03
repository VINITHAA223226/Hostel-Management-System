# 🏨 Hostel Management System

A full-stack Hostel Management System that streamlines hostel operations such as room allocation, leave approvals, complaint handling, and fee management, designed for admins, wardens, and students.

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- [Next.js v14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [React Query](https://tanstack.com/query)
- [React Hook Form](https://react-hook-form.com/)
- [Leaflet](https://leafletjs.com/) – for hostel mapping (if applicable)

### 🌐 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

### 🛢️ Database
- [MongoDB](https://www.mongodb.com/)

---

## 🎯 Key Features

### 👩‍🎓 Student Portal
- View hostel and room details
- Apply for leave
- Submit room complaints
- View attendance and fee status

### 🧑‍🏫 Warden Portal
- Approve/reject leave requests
- View student attendance
- Check complaints and resolve issues
- Access data only for assigned hostel blocks

### 👨‍💼 Admin Portal
- Allocate rooms to first-year students
- Send Google Form links for room selection to seniors
- Manage hostels (Boys: Pearl, Ruby, Diamond, Emerald, Sapphire)
- Manage fees and student records
- Send announcements or emails

---

## 🧑‍💻 Getting Started

### 🔧 Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas or Local MongoDB

---

### 🚀 Installation

#### 1️⃣ Clone the repository

git clone https://github.com/VINITHAA223226/Hostel-Management-System.git
cd Hostel-Management-System
2️⃣ Setup backend

cd server
npm install
# Create .env file with MongoDB URI and PORT
npm start
3️⃣ Setup frontend

cd ../client
npm install
npm run dev
🔐 Environment Variables
For /server/.env:

MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key


🙋‍♀️ Author
Vinithaa S
📎 GitHub


---

