# picture-print-prep

## Backend

To run the backend, you will need to have Docker and Docker Compose installed.

1.  Create a `.env` file in the `backend` directory with the following content:

    ```
    DB_USER=user
    DB_HOST=db
    DB_NAME=db
    DB_PASSWORD=password
    DB_PORT=5432
    ```

2.  Run the following command to start the backend and the database:

    ```
    docker-compose up
    ```
