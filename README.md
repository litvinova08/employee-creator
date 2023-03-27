# Employee Creator

## Introduction
This is a web application to create, list, modify and delete employees. The application consists of a spring
RESTful API and a React Typescript frontend. The schema for
the employee was provided in specs for this project. 
the purpose of this project is to demonstrate my understanding of writing RESTful APIs in Java and frontend using React Typescript.

## The tech stack I used
This is a fullstack application. I used:
- **Java Spring Boot** is a powerful Java framework that makes it easy to develop high-performing, production-ready applications. 
Spring Boot provides a variety of features that make it easy to build, test, and deploy applications.
- **ReactJS** is a popular JavaScript library for building user interfaces. It uses a virtual DOM to improve performance and in-built hooks to speed development.
- **TypeScript** provides strong typing, making it easier to catch errors before they make it to production.
- **SCSS** allows to easily nest styles and write complex selectors.
- **MySQL** provides data storage and retrieval capabilities.
- **AWS** to deploy the backend part of the application (In progress)

## Compiling and running the app
Clone the repo to your own device
```
git init
git clone https://github.com/litvinova08/employee-creator.git
cd employee-creator
```

### For Front-end
open the frontend folder in Visual Studio Code or another code editor of your choice:
`cd employee-creator-frontend`

install dependencies:
`npm install`

run the app:
`npm run dev`

Open the app in your browser: http://localhost:5173/ 

### Set up a Database
Set up a database using MySQL Workbench. Please, make sure that YOUR_MYSQL_DB_NAME is the same as the DB name in your application.properties file:
`CREATE DATABASE <YOUR_MYSQL_DB_NAME>`

Use the database:
`USE <YOUR_MYSQL_DB_NAME>`

### For Back-end
Open the backend folder in Eclipse or another integrated development environment of your choice:
- File > Import > Maven > Existing Maven Projects > Browse for the "employee-creator-backend" folder

Run the app
- You can Run the app by pressing the green play button


## Features
- React axios to communicate with backend and make requests to an API. I used axios over fetch because it automatically converts a response to JSON
and has clean syntax
- I included proxy on frontend and @CrossOrigin on backend to ensure that frontend and backend can communicate
- React Hook Form to validate and submit forms and use Controlled components like `Controller` for dates
- React Router for navigation and routing
- React Date Picker to allow date input

## Data Validation
 - The firstName, lastName, email, mobileNumber and address cannot be blank.
 - Max length of a mobile phone is 10 characters. A mobile number mustbe an Australian number.
 - Email should be of the appropriate format. JPA Query is used to validate whether an employee already exists in the database. 

## Known issues
Since this is work in progress there are many growth zones and areas that need improvement. For example: 
- Once an employee is deleted, the page does not get updated to reflect changes.
- No testing was implemented at this stage.
- EmployeePage fetches an employee by id twice.
- AWS CodeBuild gets failed when building a pipeline.

## Future Goals
- Implement Schema Validation on frontend
- Fix an issue with AWS pipeline build. Need to ensure that pom & yml are in located correctly
- Refactor create and update employee functionality with axios 
- Update delete employee functionality with axios & ensure that the list of employees gets reloaded once an employee deleted
- Add testing for both front-end and back-end. I will use JUnit for unit testing of the backend part, Enzyme for unit testing of the front-end part and e2e testing to ensuse that all components work together as required  
- Implement responsive design to ensure that users can access the app on their desktop and mobile
- Use Google's Place Autocomplete API to autocomplete an address when the user starts typing
- Improve styling

## What I struggle with
26.02.2023 - I experienced a CORS error due to an incorrect HttpStatus when a Controller returned an employee by Id 

## Useful Resources

- JPA Queries https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
- React Hook Forms: https://react-hook-form.com/get-started/ 
- React Hook Form Controller: https://react-hook-form.com/api/usecontroller/controller
- React Router: https://reactrouter.com/en/main 
- React Date Picker: https://www.npmjs.com/package/react-datepicker 
- Schema Validation: https://react-hook-form.com/get-started/#SchemaValidation
- JUnit: https://spring.io/guides/gs/testing-web/
- Enzyme: https://enzymejs.github.io/enzyme/
- Google's Places Autocomplete API: https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete

application.properties
```
spring.datasource.url=jdbc:mysql://localhost:3306/YOUR_MYSQL_DB_NAME
spring.datasource.username=root
spring.datasource.password=MyPass
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.generate-ddl=true
```
