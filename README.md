<h1 align="center">
  <img src=".github/logo.svg" alt="Logo" height="70">
</h1>

<h3 align="center">
  Proffy - Get in touch with any teacher and learn what you want.
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/elvinciqueira/proffy?color=%239871F5">

 

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/elvinciqueira/proffy?color=%239871F5">

  <a href="https://github.com/elvinciqueira/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/elvinciqueira/proffy?color=%239871F5">
  </a>

  <a href="https://github.com/elvinciqueira/proffy/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/elvinciqueira/proffy?color=%239871F5">
  </a>

 
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<!-- <p id="insomniaButton" align="center">
  <a
    href="https://insomnia.rest/run/?label=Ecoleta%20API%20-%20EliasGcf&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Fecoleta%2Fmaster%2FInsomnia.json"
    target="_blank"
  >
    <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p> -->

<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1596552194/proffy/proffy-mockup_a2owui.png">

## 📚 About the project

This project was developed on the Next Level Week #02 event by [Rocketseat](https://rocketseat.com.br/) 🚀&nbsp;💜

This application is designed to connect teachers and students. For teachers, it is possible to define the start and end time of classes, the hourly price and describe themselves. Studens can get in touch and choose favorites teachers.

## 🚀 Technologies

Technologies that I used to develop this application

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
<!-- - [React Navigation](https://reactnavigation.org/) -->
<!-- - [React Icons](https://react-icons.netlify.com/#/) -->

## 💻 Getting started


### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/elvinciqueira/proffy.git && cd proffy
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to server folder
$ cd backend

# Install the dependencies
$ yarn

# Use the script to run the migrations
$ yarn knex:migrate

# To finish, run the api service
$ yarn start

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to frontend web folder
$ cd web

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```


---

Made with 💜&nbsp; by Elvin Ciqueira 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/elvinciqueira/)