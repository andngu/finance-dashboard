# Finance Dashboard

An interactive finance dashboard application incorporating ML predictions. The UI is built on React with Typescript, Redux Toolkit for state management, Material UI, and Recharts. Server-side, the runtime environment is powered by Node.js, Express.js as the backend framework, and MongoDB as the database.

## Features

- Interactive finance dashboard with real-time data visualization.
- Machine learning predictions for financial analysis and forecasting.
- User-friendly UI built with React and Typescript.
- State management using Redux Toolkit.
- Material UI for a modern and responsive design.
- Data visualization using Recharts.
- Server-side implementation with Node.js and Express.js.
- Data storage and retrieval using MongoDB.

## Installation

To set up the Finance Dashboard locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/finance-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd finance-dashboard
   ```

3. Install the dependencies for the server:

   ```bash
   cd server
   npm install
   ```

4. Install the dependencies for the client:

   ```bash
   cd ../client
   npm install
   ```

5. Configure the backend:

   - Rename the `.env.example` file to `.env`.
   - Update the `.env` file with your MongoDB connection details.

6. Start the server:

   ```bash
   cd ../server
   npm start
   ```

7. Start the client:

   ```bash
   cd ../client
   npm start
   ```

8. Open your browser and visit `http://localhost:3000` to access the Finance Dashboard.

## Usage

Once the Finance Dashboard is running, you can perform the following actions:

- View real-time financial data on the interactive dashboard.
- Analyze historical trends and patterns.
- Access ML predictions for financial analysis and forecasting.
- Interact with various visualizations and charts.
