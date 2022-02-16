# MyHappyGlucose

MyHappyGlucose is a web application designed to be an all-one-one health tracker for users with type 1, type 2 or gestational diabetes. This application was created as a capstone project for Ada Developers Academy. Unlike other diabetes management applications, this application is designed with a more holistic approach to provide support for users with diabetes. In addition to providing essential tracking features, such as glucose level tracking and meal tracking, the application offers additional features like fitness tracking and mood tracking. With the goal of helping users manage their diabetes in the most comprehensive way, this application allows users to observe trends in their physical well-being as well as their emotional well-being.

## Description of Tech Stack
This application was created using:
- Django (back-end)
- SQLite
- React (front-end)

## Features
- Meal tracker (carbohydrate count)
- Glucose tracker
- Fitness tracker
- Mood tracker
- Reports for the following displayed as tables and line charts:
  - Meals
  - Glucose
  - Fitness
  - Mood
- Dashboard to easily access logs for different activities
- Daily summary of which activites you tracked
- Login page

## Dependencies
Front-end:
- Material UI 
  - Icons
  - Typography
  - Tables
  - Text Fields
  - Paper style
  - Cards
  - Alert
  - Grid
  - Avatar
  - Box
- Axios
- Hooks: useState, useNavigate, useEffect
- Recharts
  - Line chart

Back-End:
- Django Rest Framework
- Django CORS headers

API:
- Spoonacular Food API

## Instructions for Set Up
1. Clone this repository
2. Install required dependencies (front-end)
3. Run yarn start and visit localhost:3000/login
4. Clone back-end repository: https://github.com/stephanie-chenn1/backend-my-happy-glucose
5. Create and activate virtual environment
6. Install required dependencies (back-end)
7. Run the following:
  - python manage.py makemigrations
  - python manage.py migrate
  - python manage.py runserver
