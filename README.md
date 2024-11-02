# Expense Splitter

## Introduction
The Expense Splitter is a web application designed to help users manage shared expenses within groups. Users can create groups, add members, and track expenses easily. The application features a clean, responsive UI built with modern technologies, allowing seamless interaction and real-time updates.

## Tech Stack Used
- **Frontend**: 
  - **Framework**: React
  - **Language**: JavaScript
  - **UI Libraries**: Material UI, Tailwind CSS
  - **Routing**: React Router DOM
  - **HTTP Client**: Axios
- **Backend**: 
  - **Runtime**: Node.js
  - **Framework**: Express
  - **Database**: Mongoose
  - **Authentication**: JSON Web Token

## Features
- Home page displaying all application features.
- Login/signup page with a full authentication system using JWT.
- Main page showing different groups joined by the user, with a search bar for easy navigation.
- Ability to create new groups and manage group members.
- Dynamic routing for group-specific pages.
- View and manage debts owed by group members.
- Historical tracking of expense splits with the ability to create new expenses.
- Splits visibility: user splits on the right, others' splits on the left.

## Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd expense-splitter
