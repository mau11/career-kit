# Career Kit

![Static Badge](https://img.shields.io/badge/WORK%20IN%20PROGRESS-darkgreen)

> Build the perfect resume and export it from a choice of beautifully designed PDFs.

<img src="./public/images/screenshot.png" alt="Screenshot of completed Career Kit app" height="300">

## Table of Contents

1. [Tech Stack](#tech-stack)
1. [Requirements](#requirements)
1. [Development](#development)
   1. [Installing Dependencies](#installing-dependencies)
   1. [Running the Server](#running-the-server)
1. [View Application](#view-application)
1. [Deployment](#Deployment)

## Tech Stack

- **JavaScript**
- **CSS**
- **EJS**
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Render**

## Requirements

- Node v24.2.0
- pnpm v10.6.2

## Development

#### Setting up Database

Setup up a [MongoDB Atlas account](https://www.mongodb.com/). Create a new database called `career-kit` with the collections: `users`, and `resumes`.

#### Environment Variables

Run the command below to copy environment variables from the example, then add your values and save.

```sh
$ cp .env.example .env
```

| Environment Variable | Notes                                                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| PORT                 | port number (default: 8000)                                                                                                                           |
| DB_NAME              | MongoDB database name                                                                                                                                 |
| DB_CONNECTION_STRING | MongoDB connection string in the format: `mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@cluster0.example.mongodb.net/?retryWrites=true&w=majority` |
| SESSION_SECRET       | complex session secret for password encryption (default: 'topsecret')                                                                                 |

#### Installing Dependencies

```sh
$ nvm use
$ pnpm install
```

#### Running the Server

Once dependencies have been installed, run the following command to start the development server:

```sh
$ pnpm dev
```

## View Application

You can view the app in your browser at http://localhost:8000.

## Deployment

View the latest deploy on Render at: https://career-kit.onrender.com. Sign up for a new account or use credentials below.

**username**: test

**password**: password
