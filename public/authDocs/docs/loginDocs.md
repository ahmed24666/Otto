# Login ENDPOINT

## Description

This is an endpoint to log user in

## Base URL

The base URL for all API requests is:

`https://domain-name.com/api`

## Endpoints

### `POST /auth/login`

### Parameters
The parameters should be sent as form-data
- `user_identifier`: The email or username of the user, it is required.
- `password`: The password of the user, it is required.

### Response

Returns a JSON object with the following properties:

- `status`: The status of the request. This will be either "true" or "false".
- `message`: A message describing the status of the request. This will be either "success" or "error".
- `data`: Which is sent in case of success, An array with the following properties:
    - `user`: all user info.
    - `token`: The access token for the user.
    - `message`: user logged in successfully.
- `errors`: Which is sent in case of error, An array with the following properties:
    - `error`: error message.
    - `message`: Invalid credentials.
   
### Example

Request:

```
POST /auth/login

Content-Type: application/json
Request Body:

    {
        "user_identifier": "john.doe@example.com",
        "password": "password"
    }
    
```

Response:

    json
        {
            "status": "true",
            "message": "success",
            "data": {
                "user": {
                    "id": "42",
                    "name": "john doe",
                    "username": "johndoe",
                    "email": "john.doe@example.com",
                    "phone": "010245787789",
                    "Last-Log-In": "2024-03-02 17:01:38",
                    "Adding-Date": "2024-02-24 23:42:02"
                },
                "token": "18|7646a76f0d0d0d19a6e085fbe99bac20531a7d38c633e523f0f3d9a9c7afb8ae",
                "message": "user logged in successfully."
            }
        }

    

## Errors

This endpoint uses the following error codes:

- `400 Bad Request`: The request was sent with missing required parameters or invalid parameters.
- `401 Unauthorized`: The provided credentials are invalid or the user is not authorized to access the requested resource.
- `404 Not Found`: The requested resource was not found.
- `405 Method Not Allowed`: The requested method is not allowed for the requested resource.
- `500 Internal Server Error`: An unexpected error occurred on the server.
