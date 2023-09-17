# Full Stack JS - Code Challenge - V3

## Quick Start Guide

### Using Docker (NodeJS + NGINX):

- Run the following commands:

  ```
  docker build . -t frontend-challange
  docker run -d -p 4000:80/tcp frontend-challange:latest
  ```

- Open the following link: http://localhost:4000/

### Executing project:

- Run the following commands

  ```
  npm install
  npm run serve
  ```

- Open the following link: http://localhost:4000/

## About

- Author: Juan Pablo Bizantino
- Date: September 2023

## Frameworks & Libraries

- webpack
- react / react-dom
- react-bootstarp
- jest
- axios
- standard
- formik
- yup

## Backend API URL

By default, app will send request to 'http://localhost:3000/api/v1/files'

If you need to change the path, go to **src/common/config/config/js** and edit **API_URL**

## Initial Setup

1- Install modules:

```
npm install
```

2- Excecute the project:

- **Start project on dev mode:**

```
npm serve
```

- **Run JEST test:**

```
npm test
```

- **Run standardJS and fix code:**

```
npm run std
```

## Docker Image

Open console on your project directory and run the following command

```
docker build . -t frontend-challange
```

Execute the image

```
docker run -d -p 4000:80/tcp frontend-challange:latest
```