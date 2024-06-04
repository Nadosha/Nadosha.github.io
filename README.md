Welcome to Heartpace Assignment
=============== 

This app was created using React and Redux for the front end and Node.js and Express for the back end.

## Running with Docker

This app can be run using Docker for easier environment setup.

## Prerequisites

- Docker
- Docker Compose

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

## Build Images

Build the Docker images:

```bash
docker compose build
```


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
