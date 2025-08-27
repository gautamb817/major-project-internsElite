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
- **GitHub Repository:** [https://github.com/gautamb817/major-project-internsElite]  
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
<img width="2849" height="1501" alt="image" src="https://github.com/user-attachments/assets/bbcaff06-4179-4f6d-acc5-27734e116ca0" />
<img width="2823" height="1505" alt="image" src="https://github.com/user-attachments/assets/c899c477-4363-4865-911f-4f36d516dad9" />
<img width="2872" height="895" alt="image" src="https://github.com/user-attachments/assets/47d95f18-80a1-4b7d-97a1-699a43fd4359" />
<img width="2744" height="1068" alt="image" src="https://github.com/user-attachments/assets/498b387e-0d22-4c32-8179-bb9e0b8b58c7" />
<img width="1944" height="603" alt="image" src="https://github.com/user-attachments/assets/810279ae-8bd6-4333-979b-2d3d7d1dbca3" />


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
**Gautam Bhattacharya**  
MERN Stack Developer

---

📌 **Submission Date:** 5th September 2025  
📌 **Assigned By:** Miss Shubhangi Sonker
