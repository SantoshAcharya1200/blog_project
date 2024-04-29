#Blog Project

## Table of contents

1. [Description](#description)
2. [Screenshots](#screenshots)
3. [Installation and Usage](#installation-usage)

## Description <a name="description"></a>

It is a full-stack blog web application built with React on the frontend and Django/DRF on the backend.

<ins>Features:</ins>

- JWT authentication and authorization
- Responsive layout
- Users:
  - Users can:
    - Signup
    - Login
    - Logout
- Blog posts:
  - Users can:
    - Create a post
    - Edit their post
    - Delete their post
    - Comment on the post
    - Delete their comment
  - Category-wise, tag-wise blogs filtering on the home page
  - Pagination of blogs




## Screenshots <a name="screenshots"></a>

![homepage](https://github.com/SantoshAcharya1200/blog_project/assets/41406942/a9647304-2cfc-48b6-abd4-9b19ed629d32)

![comment section](https://github.com/SantoshAcharya1200/blog_project/assets/41406942/0a205f79-a60a-4c33-b07b-8a8d25dee8cd)

![register](https://github.com/SantoshAcharya1200/blog_project/assets/41406942/f06004e9-845e-4b15-88fc-a3031adad1cd)

![login](https://github.com/SantoshAcharya1200/blog_project/assets/41406942/007f6002-0376-46b0-b5ed-cf0517731db3)


## API Documentation <a name="api-documentation"></a>

All the endpoints are listed below.

- <ins>Users</ins>:

  - `api/user/register/` - POST
  - `api/token/` - POST
  - `api/token/refresh/` - POST
  - `api/users/all/` - GET

- <ins>Blogs</ins>:

  - `api/posts/` - POST
  - `posts/<int:pk>/` - GET, PUT, DELETE
  - `admin/create/` - POST



## Installation and Usage <a name="installation-usage"></a>

#### <ins>**General**</ins>

- Requirements:
  - `node >= 16.14.0`
  - `npm >= 8.3.1`
  - `python >= 3.8`
  - `pip >= 21.3.1` 
- `git clone https://github.com/SantoshAcharya1200/blog_project.git` - clones the repository
- `cd blog_project`

#### <ins>**For frontend folder**</ins>

- Setup the project as per _General_ sub-section
- `cd frontend`
- `npm install` or `npm i` - installs all packages
- `npm install --save-dev` - installs devDependencies
- `npm run dev` - starts the app

#### <ins>**For backend folder**</ins>

- Setup the project as per _General_ sub-section
- `cd backend`
- `py -m venv yourVenvName` - creates a virtual environment
- `yourVenvName\Scripts\activate.bat` - activates the virtual environment
- `pip install -r requirements.txt` - installs all modules
- `python manage.py makemigrations` & `python manage.py migrate` - migrates all the tables to db
- `python manage.py createsuperuser` - creates a superuser
- `python manage.py runserver` - runs the server

> NOTE: First run backend server (it will run on `http://127.0.0.1:8000`), then run frontend app (it will run on `http://localhost:5173/`)
