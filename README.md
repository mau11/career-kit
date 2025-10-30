# Idea Tracker

> My portfolio as a software engineer.

## Table of Contents

1. [Tech Stack](#tech-stack)
1. [Requirements](#requirements)
1. [Development](#development)
   1. [Installing Dependencies](#installing-dependencies)
   1. [Running the Server](#running-the-server)

## Tech Stack

- **MongoDB**
- **Mongoose**
- **JavaScript**
- **Node.js**
- **EJSs**

## Requirements

- Node v24.2.0
- pnpm v10.6.2

## Development

#### Installing Dependencies

From within the root directory:

```sh
$ nvm use
$ pnpm install
```

#### Running the Server

Once dependencies are installed, run the following command to start the development server:

```sh
$ pnpm dev
```

Your application will be available at http://localhost:3000. -->

# Simple NASA API

> View NASA's Photo/Video of the Day by selecting your desired date.

> <img src="./images/screenshot.png" alt="Screenshot of completed NASA API App" width="500">

## Table of Contents

1. [Tech Stack](#tech-stack)
1. [Development](#development)
   1. [NASA API](#nasa-api)
   1. [Notes](#notes)

## Tech Stack

- **HTML**
- **CSS**
- **JavaScript**

## Development

### NASA API

- Obtain a free API key from NASA at: https://api.nasa.gov/
- Update the `NASA_API_KEY` value with your key on line 1 of main.js.
- Open the app in your browser, and select a date to view the photo/video of the day!

### Notes

Visit the official documentation at https://api.nasa.gov/ for more information on API use, copyright, and rate limitations.

_Due to lack of Federal funding, NASA's photo/video of the day API is no longer being updated beyond October 1, 2025._
