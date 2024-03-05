# ForgotPassword ENDPOINT

## Description

This is an endpoint to send a reset password email to the user 

## Base URL

The base URL for all API requests is:

`https://domain-name.com/api`

## Endpoints

### `POST /auth/forgotPassword`

### Parameters
The parameters should be sent as form-data
- `email`: The email of the user, it must be a valid email, it is required.

### Response

Returns a JSON object with the following properties:

- `status`: The status of the request. This will be either "true" or "false".
- `message`: A message describing the status of the request. This will be either "success" or "error".
- `data`: Which is sent in case of success, An array with the following properties:
    - `message`: Check Your Email To Reset Your Password.
- `errors`: Which is sent in case of error, An array with the following properties: 
    - `message`: Something Went Wrong, Please Try Again.
   
### Example

Request:

```
POST /auth/forgotPassword

Content-Type: application/json
Request Body:

    {
        "email": "john.doe@example.com"
    }
    
```

Response:

    json
        {
            "status": true,
            "message": "Success",
            "data": {
                "message": "Check Your Email To Reset Your Password."
            }
        }
        

## Errors

This endpoint uses the following error codes:

- `400 Bad Request`: The request was sent with missing required parameters or invalid parameters.
- `404 Not Found`: The requested resource was not found.
- `405 Method Not Allowed`: The requested method is not allowed for the requested resource.
- `500 Internal Server Error`: An unexpected error occurred on the server.
