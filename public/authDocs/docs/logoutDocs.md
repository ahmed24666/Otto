# Logout ENDPOINT

## Description

This is an endpoint to verify the email of the user

## Base URL

The base URL for all API requests is:

`https://domain-name.com/api/`

## Endpoints

### `POST /auth/logout`

### Parameters
    no parameters are required only the user token as a bearer token in the request headers.
### Response

Returns a JSON object with the following properties:

- `status`: The status of the request. This will be either "true" or "false".
- `message`: A message describing the status of the request. This will be either "success" or "error".
- `data`: Which is sent in case of success, An array with the following properties:
    - `message`: user logged out successfully.
- `errors`: Which is sent in case of error, An array with the following properties: 
    - `message`: invalid token.
   
### Example

Request:

```
POST /auth/logout

Content-Type: application/json
Request headers:

    {
        "Authorization": "Bearer 18|7646a76f0d0d0d19a6e085fbe99bac20",
    }
    
```

Response:

    json
        {
            "status": true,
            "message": "Success",
            "data": {
                "message": "user logged out successfully."
            }
        }
        

## Errors

This endpoint uses the following error codes:

- `400 Bad Request`: The  request was sent with invalid token.
- `401 Unauthorized`: The request was sent without the authentication token or the user is not authorized to access the requested resource.
- `404 Not Found`: The requested resource was not found.
- `405 Method Not Allowed`: The requested method is not allowed for the requested resource.
- `500 Internal Server Error`: An unexpected error occurred on the server.
