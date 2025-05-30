# Argent Bank

Banking application created with React, Redux and MongoDB

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### Instructions

1. Fork this repo
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
. Run the following commands:

```bash
# Install all dependencies for frontend and backend
npm i

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db

# Launch the app (⚠️ launch the frontend in a second terminal)
npm start
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### Access the app

Once you have started the app, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Informations

### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

#### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

#### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### Acces the API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs
