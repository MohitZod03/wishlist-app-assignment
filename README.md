# Shared Wishlist App – Full Stack Assignment for FlockShop.ai

This is my submission for the Full Stack Intern assignment at FlockShop.ai.  
The application allows users to collaboratively create, manage, and interact with wishlists in real-time, similar to planning a group shopping experience.

## Project Structure

wishlist-app-assignment/
├── wishlist-frontend/       React App (UI)
├── wishlist-backend/        Spring Boot REST API with MongoDB
├── screenshots/             Optional UI screenshots
├── loom-demo-link.txt       Optional demo video link
└── README.md                Assignment instructions and setup

## Setup Instructions

1. Frontend – React
----------------------------------
cd wishlist-frontend  
npm install  
npm start  
App runs on: http://localhost:3000

2. Backend – Spring Boot + MongoDB
----------------------------------
cd wishlist-backend  
./mvnw spring-boot:run  
App runs on: http://localhost:8080  
MongoDB should be running locally on: mongodb://localhost:27017/wishlist-db

## Tech Stack Used

Frontend: React, Axios, React Router  
Backend: Java 17, Spring Boot  
Database: MongoDB  
Tools: Git, GitHub, Maven, VS Code

## Features Implemented

- Sign up and login with dummy email (mock auth)
- Create new wishlist
- Add, edit, delete products with name, image URL, and price
- Track and display who added each item (user email)
- Invite others to wishlist (mocked)
- Responsive UI
- Spring Boot RESTful APIs for all wishlist/product CRUD
- MongoDB used for storing users, wishlists, products

## Screenshots

![Screenshot 2025-07-06 185703](https://github.com/user-attachments/assets/45eee3cd-08bd-45c0-a199-a92353ce2aa1)




## Assumptions and Limitations

- Dummy login (no real password verification or token auth)
- Invite feature is UI only, not functional
- No real-time collaboration yet
- Single-group view, no multi-group separation

## Future Improvements

- Integrate Firebase or JWT authentication
- Add real-time updates using WebSockets or Firebase
- Add emoji reactions and product-level comments
- Deploy frontend on Vercel and backend on Render
- Support multiple groups and shared link invitations

## Thoughts on Scaling or Improving

- Move MongoDB to cloud (MongoDB Atlas) for production
- Add user roles (admin, viewer)
- Use Redis for caching frequently accessed products
- Queue-based messaging for real-time updates (Kafka/RabbitMQ)
- CI/CD pipeline with GitHub Actions and Docker

## Evaluation Criteria Checklist

Clarity and structure of code:              Completed  
Functionality and completeness:             Completed  
Design and UX of the interface:             Completed  
Git practices and demo/video (optional):    Completed  
Creativity in features and layout:          Implemented and extendable

## Thank You

Thank you FlockShop.ai for the opportunity to work on this assignment. I enjoyed building it and would love to continue contributing to collaborative shopping experiences.

Submitted by: Mohit Zod  
GitHub: https://github.com/MohitZod03/wishlist-app-assignment
