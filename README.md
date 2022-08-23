# Installation

## Git Repository

### Backend
- [Assumes functioning PostgreSQL](https://www.postgresql.org/docs/current/tutorial-install.html) 
- CD into /backend directory and install dependencies
- `npm install`
- To start the server
- `npm run dev` for development version with nodemon
- `npm start` for production version with node
- runs on localhost:3001

### Frontend
- CD into /frontend directory and install dependencies
- `npm install`
- To start the react server
- `npm start`
- runs on localhost:3000

## Docker

- [Assumes functioning Docker with Docker Compose](https://docs.docker.com/get-docker/)
- First time: `docker compose up --build`
- When finished: `docker compose down`
- Subsequent times: `docker compose up`
- runs on localhost:3000

# Deployed

[See it deployed at](https://thrillhouse3000-jobly.surge.sh)

# What Is Jobly

- Jobly is a full-stack web application implementing a React//Express//PostgreSQL stack.
- Jobly allows you to browse Companies, view their details and apply for jobs.
- Jobly uses JSON web tokens for authorization and authentication. These are stored in localStorage.

# Navigating the Site

- Login with `username: testuser // password: password`
- Or, signup and create your own credentials
- `Companies` is a list of all available companies
    - Has search functionality, allowing inputs for three parameters
    - Clicking on a name will redirect to the details page for that company
    - Company details will list the jobs available at that company
- `Jobs` is a list of all available jobs
    - Has search functionality, allowing inputs for three parameters
    - Application feature allows users to "apply" to jobs
    - Once applied for, these can be found on the Profile page
- `Profile` shows the User's info
    - There is a link that allows the user to edit their information
    - Displays a list of jobs the user has applied to