# Register ENDPOINT

## Description

This is an endpoint to register a user.

## Base URL

The base URL for all API requests is:

`https://domain-name.com/api/`

## Endpoints

### `POST /auth/register`

### Parameters
The parameters should be sent as form-data

- `email`: The user email, it is required, and must be a valid email address and unique (not used by another user).
- `username`: The user username, it is required, and must be unique (not used by another user), it must have at least 4 characters and no more than 20 characters. 
- `name`: The user name, it is required. 
- `phone`: The user phone, it is required. 
- `password`: The user password, it is required, it must have at least 8 characters.

### Response

Returns a JSON object with the following properties:

- `status`: The status of the request. This will be either "true" or "false".
- `message`: A message describing the status of the request. This will be either "success" or "error".
- `data`: Which is sent in case of success, An array with the following properties:
    - `message`: user registered successfully, check your email to verify your account.
- `errors`: Which is sent in case of error, array of errors.     
   
### Example

Request:

```
POST /auth/register`

Content-Type: application/json
Request Body:

    {
        "email": "john.doe@example.com",
        "username": "johndoe",
        "name": "John Doe",
        "phone": "010245787789",
        "password": "password"
    }

```

Response:

    json
        {
            "status": true,
            "message": "Success",
            "data": {
                "message": "user registered successfully, check your email to verify your account."
            }
        }
    

## Errors

This endpoint uses the following error codes:

- `400 Bad Request`: The request was sent with missing required parameters or invalid parameters.
- `404 Not Found`: The requested resource was not found.
- `405 Method Not Allowed`: The requested method is not allowed for the requested resource.
- `500 Internal Server Error`: An unexpected error occurred on the server.
