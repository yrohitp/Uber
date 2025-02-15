# User Registration Endpoint

## POST /users/register

### Description

This endpoint is used to register a new user. It validates the input data, checks if the email is already registered, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### example Responses

-  `User`(object)
- `fullname`(object)
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)
- `token`(string) : JWT Token

#### Success

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Email Already Registered

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "error": "Email already registered. Please use another email."
  }
  ```

#### Internal Server Error

- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Login Endpoint

## POST /users/login

### Description

This endpoint is used to log in an existing user. It validates the input data, checks if the email and password match, and returns a JSON Web Token (JWT) and the user details upon successful authentication.

### Request Body

The request body should be a JSON object with the following fields:

- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Responses

-  `User`(object)
- `fullname`(object)
  - `firstname`: A string with at least 3 characters 
(required)
  - `lastname`: A string with at least 3 characters 
(optional)
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)
- `token`(string) : JWT Token


#### Success

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials

- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Invalid email or Password"
  }
  ```

#### Internal Server Error

- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Profile Endpoint

## GET /users/profile

### Description
Retrieves the profile information of the currently authenticated user.

### Headers
- `Authorization`: Bearer token (JWT) required

### Responses

-  `User`(object)
- `fullname`(object)
  - `firstname`: A string with at least 3 characters
(required)
  - `lastname`: A string with at least 3 characters 
(optional)
- `email`: A valid email address (required)


#### Success
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "error": "Access denied. No token provided."
  }
  ```

#### Invalid Token
- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "error": "Invalid token."
  }
  ```

# User Logout Endpoint

## POST /users/logout

### Description
Logs out the currently authenticated user by invalidating their token and clearing their socket ID.

### Headers
- `Authorization`: Bearer token (JWT) required

### Responses


#### Success
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "error": "Access denied. No token provided."
  }
  ```

#### Invalid Token
- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "error": "Invalid token."
  }
  ```