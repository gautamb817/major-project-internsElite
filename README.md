# 🌐 Personal Portfolio Website (MERN Stack)

## 📌 Project Objective
The goal of this project is to design and develop a **Personal Portfolio Website** using the **MERN Stack** (MongoDB, Express.js, React, Node.js).  

The website showcases skills, projects, and achievements, includes a contact form with backend integration and MongoDB storage, and is fully deployed on cloud platforms.

---

## 📄 Project Description
This portfolio website is a full-stack web application that allows users to:
- View the developer’s profile, skills, and achievements.
- Browse through a list of projects with GitHub/demo links.
- Download the resume.
- Contact the developer using a form (data saved in MongoDB Atlas via backend API).

---

## 🔗 Links
- **GitHub Repository:** [Add your repo link here]  
- **Live Frontend (Netlify/Vercel):** [Add frontend URL]  
- **Live Backend (Render/Heroku):** [Add backend URL]  

---

## 🛠️ Technologies Used
- **Frontend:** React, Tailwind CSS / Bootstrap, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas, Mongoose  
- **Deployment:** Netlify/Vercel (Frontend), Render/Heroku (Backend)  
- **Version Control:** Git & GitHub  

---

## ⚙️ Running the Project Locally

### 1️⃣ Clone the repository
```bash
git clone <your-repo-link>
cd major-project
```

### 2️⃣ Setup Backend
```bash
cd server
npm install
```
Create a `.env` file inside `/server`:
```
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
```
Run backend:
```bash
npm start
```

### 3️⃣ Setup Frontend
```bash
cd ../client
npm install
npm start
```

The app will run locally on:
- Frontend → `http://localhost:3000`
- Backend → `http://localhost:5000`

---

## 🧪 Sample Input/Output
- Submitting the **Contact Form**:
  - Input: Name, Email, Message  
  - Output: Data stored in MongoDB (`contacts` collection) with timestamp.  

---

## 📸 Screenshots
(Add screenshots of Home, About, Projects, Resume, Contact pages here)

---

## 🎥 Demo Video
(Optional: Upload to Google Drive/YouTube and link here)

---

## 🔧 Features
- Responsive multi-section portfolio (Home, About, Projects, Resume, Contact)  
- Contact form with backend + database integration  
- Resume download option  
- Live deployment of both frontend and backend  

### ⭐ Bonus Features (if implemented)
- Dark/Light mode toggle  
- Framer Motion animations  
- Admin dashboard for messages  
- JWT authentication  

---

## 🚀 Challenges Faced & Solutions
- **Challenge:** Managing frontend-backend integration during deployment.  
  **Solution:** Used environment variables and separate deployment platforms (Netlify + Render).  
- **Challenge:** Storing form data securely.  
  **Solution:** Implemented validation and schema design with Mongoose.  

---

## 👨‍💻 Author
**Your Name**  
MERN Stack Developer | [Your LinkedIn] | [Your GitHub]

---

📌 **Submission Date:** 5th September 2025  
📌 **Assigned By:** Miss Shubhangi Sonker
