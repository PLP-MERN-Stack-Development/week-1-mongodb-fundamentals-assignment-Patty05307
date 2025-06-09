MongoDB Fundamentals Assignment
This project covers the fundamentals of MongoDB, including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing. It was completed as part of the Week 1 assignment for the PLP MERN Stack Development course.

Assignment Overview
The assignment focuses on:

Setting up a MongoDB database locally or on MongoDB Atlas

Performing basic CRUD operations (Create, Read, Update, Delete)

Writing advanced queries with filtering, projection, and sorting

Creating aggregation pipelines for data analysis

Implementing indexing for performance optimization

Project Setup
Prerequisites
Node.js (version 18 or higher recommended)

MongoDB (locally installed or MongoDB Atlas account)

MongoDB Shell (mongosh) or MongoDB Compass (optional but recommended)

Installation & Running
Clone the repository:

bash
Copy
Edit
git clone https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-Patty05307.git
cd week-1-mongodb-fundamentals-assignment-Patty05307
Install Node.js dependencies:

bash
Copy
Edit
npm install
Run the data insertion script to populate the database:

bash
Copy
Edit
node insert_books.js
This script will connect to your local MongoDB instance and insert sample book data into the plp_bookstore database.

Run your queries script to perform CRUD and aggregation operations:

bash
Copy
Edit
node queries.js
This file contains example queries demonstrating basic CRUD operations, advanced filtering, aggregation pipelines, and indexing.

Files in This Repository
insert_books.js — Script to insert sample book data into MongoDB

queries.js — Sample MongoDB queries for CRUD operations, advanced queries, aggregations, and indexing

Week1-Assignment.md — Assignment instructions and tasks

README.md — Project overview, setup instructions, and notes

Sample MongoDB Queries Included
Find all books

Find books by specific authors

Filter books by genre, price, or stock status

Update and delete documents

Aggregation pipelines to group and count books by genre

Creating indexes to optimize queries

Notes
Ensure your MongoDB server is running before executing scripts.

Modify the MongoDB connection URI in insert_books.js and queries.js if using a remote Atlas cluster.

Use MongoDB Compass or mongosh to inspect and query your database interactively.

## MongoDB Screenshot

![MongoDB Screenshot](./mongodb_screenshot.png)


References
MongoDB Official Documentation

MongoDB University Courses

Node.js MongoDB Driver

