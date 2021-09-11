# Practice React CRUD

CRUD is Create, Read, Update and Delete. We will practice creating a list of employees of our company.

This project was created from the command `npx create-react-app my-app` and customized for this tutorial.

## Requirements

- Docker
- Understanding of React Router
- Understanding of class component React and states

\* This was tested using Linux running with the terminal

## Theory

### JS objects

Take a look on this [W3Schools](https://www.w3schools.com/js/js_objects.asp).

It explains how we could add and edit attributes to an objects. For example, adding and editing the first name of an employee.

### HTTP methods

Take a look on this: [W3Schools](https://www.w3schools.com/tags/ref_httpmethods.asp).

It explains the communication methods betweend the Frontend and the Backend. For example, when we create an new Employee, we make a POST request to the server. But when we list users, we make a GET request.

## Running the backend

Run these commands:

- `docker build -t practice-employees-backend backend` (only once)
- `docker run --rm -p 8000:8000 practice-employees-backend`

Now, you should be able to open the page: [http://localhost:8000/](http://localhost:8000/).

You also can access the admin (from Django) at [http://localhost:8000/admin/](http://localhost:8000/admin/) (username: `admin`, password: `password`).

## Practice

Overview: [video](https://www.loom.com/share/07fef74ab44749dd9fdd0f4e0159b376)

- Fix the New.js to be able to add new users
- Fix the Update.js to be able to edit existent users
- Fix the Delete.js to be able to delete the existent users

**Hard one** (but most important): after you fix everything, replicate everything, but now instead of handling employees, add the tasks.

## Extra

There are more fields in the tasks model. Try using:

- Radio for status
- Select for status
- Number Input for complexity
- Slider for complexity
- Switch for done
