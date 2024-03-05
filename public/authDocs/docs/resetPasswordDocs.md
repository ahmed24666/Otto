# ResetPassword dendpoint

## Description

This is an api to reset the password of the user

## Base URL

The base URL for all API requests is:

`https://domain-name.com/api`

## Endpoints

### `POST /auth/resetPassword`

### Parameters

The parameters should be sent as form-data

- `email`: The email of the user, it is required.
- `resetPasswordCode`: The reset Password code that was sent to the user, it is required, it is a four digit code.
- `password`: The user password, it is required, it must have at least 8 characters.

### Response

Returns a JSON object with the following properties:

- `status`: The status of the request. This will be either "true" or "false".
- `message`: A message describing the status of the request. This will be either "success" or "error".
- `data`: Which is sent in case of success, An array with the following properties:
  - `message`: Password Changed Successfully.
- `errors`: Which is sent in case of error, An array with the following properties:
  - `message`: Something Went Wrong, Please Try Again.

### Example

Request:

```
POST /auth/resetPassword

Content-Type: application/json
Request Body:

    {
        "email": "john.doe@example.com",
        "resetPasswordCode": "7892",
        "password": "12345678"
    }

```

Response:

    json
        {
            "status": true,
            "message": "Success",
            "data": {
                "message": "Password Changed Successfully."
            }
        }


## Errors

This endpoint uses the following error codes:

- `400 Bad Request`: The request was sent with missing required parameters or invalid parameters.
- `404 Not Found`: The requested resource was not found.
- `405 Method Not Allowed`: The requested method is not allowed for the requested resource.
- `500 Internal Server Error`: An unexpected error occurred on the server.
