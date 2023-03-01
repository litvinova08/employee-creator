# Employee Creator

## Introduction
This is a web application to create, list, modify and delete employees. The application consists of a spring
RESTful API and a React Typescript frontend. The schema for
the employee was provided in specs for this project. 
the purpose of this project is to demonstrate my understanding of writing RESTful APIs in Java and frontend using React Typescript.

## The tech stack I used
This is a fullstack application. I used:
- Java Spring Boot: Java Spring Boot is a powerful Java framework that makes it easy to develop high-performing, production-ready applications. 
Spring Boot provides a variety of features that make it easy to build, test, and deploy applications.
- React: ReactJS is a popular JavaScript library for building user interfaces. 
It provides a virtual DOM that can update in real-time, making it an ideal choice for single-page applications.
- TypeScript: TypeScript provides strong typing, making it easier to catch errors before they make it to production.
- SCSS: With its ability to easily nest styles and write complex selectors, SCSS was the ideal choice for styling this application.
- MySQL: MySQL provides robust data storage and retrieval capabilities.

## Compiling and running the app
Clone the repo to your own device

`git init`

`git clone https://github.com/litvinova08/employee-creator.git`
`cd employee-creator`

### For Front-end
open the frontend folder in Visual Studio Code or another code editor of your choice:
`cd employee-creator-frontend`

install dependencies:
`npm install`

run the app:
`npm run dev`

Open the app in your browser: http://localhost:5173/ 

### Set up a Database
Set up a database using MySQL Workbench. Please, make sure that YOUR_MYSQL_DB_NAME is the same as the DB name in your application.properties file
`CREATE DATABASE <YOUR_MYSQL_DB_NAME>`

Use the database
`USE <YOUR_MYSQL_DB_NAME>`

### For Back-end
Open the backend folder in Eclipse or another integrated development environment of your choice:
- File > Import > Maven > Existing Maven Projects > Browse for the "employee-creator-backend" folder

Run the app
- You can Run the app by pressing the green play button or right clicking on gov.dcs.employeeslist and selecting > Run As > Java Application



application.properties
`spring.datasource.url=jdbc:mysql://localhost:3306/YOUR_MYSQL_DB_NAME`
`spring.datasource.username=root`
`spring.datasource.password=MyPass`
`spring.jpa.hibernate.ddl-auto=update`
`spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect`
`spring.jpa.generate-ddl=true`
