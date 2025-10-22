# Vercel Deployed Link: 
https://dashboard-building.vercel.app/ (Please copy this link from here and paste it in any browser to check my design and work).

# Dashboard Widget Management Application

A React application for managing widgets dynamically using Redux Toolkit.

## Prerequisites

Need to have **Node.js** installed on computer. This is required because my project uses Create React App.

## Steps to Run the Application Locally

### Step 1: Clone the Repository
```bash
git clone https://github.com/Nanditha77/Dashboard-Building.git
```

### Step 2: Navigate to Project Folder
```bash
cd Dashboard-Building
```

### Step 3: Install Dependencies
```bash
npm install
```
This will install all the packages listed in `package.json` file:
- React and React-DOM
- Redux Toolkit
- React-Redux  
- React Icons
- React Scripts  

### Step 4: Start the Application
```bash
npm start
```

### Step 5: View in Browser
The application will automatically open in browser at:
```
http://localhost:3000
```

## How to Use

**Add Widget:**
1. Click "+" card in any category or "Add Widget" at the top.
2. Fill in widget name and content
3. Select category
4. Click "Add Widget"

**Remove Widget:**
1. Click the "X" button on any widget
2. Users can go to add category section and in there click Manage Widget to uncheck
from category list

**Search:**
1. Type in the search bar to filter widgets in real-time

## Available Commands

- `npm run build` - Create production build
- `npm test` - Run tests

## Technology Used

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **Create React App** - Development environment
