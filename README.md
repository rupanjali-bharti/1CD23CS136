Backend Project
This repository contains the backend solution for the assessment.

1. Project Structure
logging-middleware/: A reusable logging package used across the project to track service activity.

vehicle-scheduler-be/: A microservice that fetches vehicle/depot data and calculates an optimal maintenance schedule using a Knapsack algorithm.

notification-app-be/: Contains the logic for the priority-based notification system.

notification-system-design.md: Architectural design documentation covering API contracts, database choices, and scaling strategies.

2. How to Run

npm install express dotenv
Create a .env file with the required API URLs and tokens.
Start the service:
node server.js


3. Key Technologies

Node.js & Express: Used for building the microservices.
Knapsack Algorithm: Used to maximize task impact within mechanic hour constraints.
Middleware Pattern: Implemented for standardized logging.