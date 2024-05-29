Welcome to Heartpace Assignment
=============== 

This app was created using React and Redux for the front end and Node.js and Express for the back end.

I've added backend API to the project, so if the original API (http://54.73.73.228:4369/api/images) won't work, you can
fetch data from the local server. Also, the parts of the app can be running separately, so you can run the backend and
frontend separately. Or by using the recommended way with Docker.

Also I added caching to the app, so the images will be cached and app will be working even when backend will crash. To
check it out, you can run the app, then stop the backend and refresh the page. You will see that the images are still
there. 👌

## Running with Docker

This app can be run using Docker for easier environment setup.

## Prerequisites

- Docker
- Docker Compose

## Build Images

Build the Docker images:

```bash
docker compose build
```

This will build the necessary images for the front-end, back-end, and database.

## Start Containers

Once images are built, start the containers:

```bash
docker compose up
```

This will start the front-end, back-end, and database containers.

The app will be available on http://localhost:3000.

The back-end API will be at http://localhost:3001.

## Stop Containers

To stop the containers, run:

```bash
docker compose down
```

This will stop and remove the containers.

Let me know if you need any clarification or have additional questions!

## Running without Docker

Navigate to each directory (front-end & server) of the project and run the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This will start the front-end, back-end.



# Thank you for your time and consideration!
