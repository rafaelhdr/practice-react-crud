# Practice React CRUD

CRUD is Create, Read, Update and Delete. We will practice creating a list of employees of our company.

This project was created from the command `npx create-react-app my-app` and customized for this tutorial.

## Requirements

- Python with virtualenv (to run the backend)
- Understanding of React Router

\* This was tested using Linux running with the terminal

## Theory

### JS objects

Take a look on this [W3Schools](https://www.w3schools.com/js/js_objects.asp).

It explains how we could add and edit attributes to an objects. For example, adding and editing the first name of an employee.

### HTTP methods

Take a look on this: [W3Schools](https://www.w3schools.com/tags/ref_httpmethods.asp).

It explains the communication methods betweend the Frontend and the Backend. For example, when we create an new Employee, we make a POST request to the server. But when we list users, we make a GET request.

## Running the backend

Change in a new terminal to the backend `cd backend`.

And run:

- `docker build -t practice-employees-backend .` (only once)
- `docker run --rm -p 8000:8000 practice-employees-backend`

## Practice

Video:
