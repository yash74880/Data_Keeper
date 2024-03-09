# Data_Keeper

Data_keeper is a MERN (MongoDB, Express.js, React, Node.js) application facilitating CRUD operations. Users can seamlessly create, edit, and read data, ensuring a robust and user-friendly experience. The application empowers efficient data management with its comprehensive functionality and the power of the MERN stack.

## Features


![Screenshot 2024-02-05 at 12 40 45 AM (1)](https://github.com/yash7488/Data_Keeper/assets/80100162/f0f47d52-d4e4-4ac1-916c-9a47c0002f70)




Data_Keeper is built using the following technologies:

-   **Frontend**: React.js
-   **Backend**: Node.js with Express.js
-   **Database**: MongoDB
   


## Prerequisites

Before running Data_Keeper, ensure that you have the following software installed:

-   Node.js: Make sure you have Node.js installed on your system. You can download it from the official Node.js website and follow the installation instructions for your operating system.
    
-   MongoDB: Install MongoDB and make sure it is running on your local machine or provide the connection details for a remote MongoDB database.

## Installation

To install and run Data_Keeper locally, follow these steps:

1.  Clone the repository:
    ```sh    
       git clone https://github.com/yash74880/Data_Keeper.git
    ```
    
2.  Navigate to the cloned repository:
     
    `cd Data_Keeper` 
    
3.  Install the dependencies for the frontend:
    
    ```sh    
    cd frontend
    npm install
    ``` 
    
4.  Install the dependencies for the backend:
        
    ```sh    
    cd ../backend
    npm install
    ```
    
## Configuration

Data_Keeper requires configuration for various services. Here are the steps to set up the required configuration:

### Backend Configuration

1.  Open the `server` directory.
    
2.  Create a `.env` file in this directory.
    
3.  Set the following environment variables in the `.env` file:
    
    -   `MONGO_URL`: The MongoDB connection string.
    
    -   `PORT` : 3000.
                
  
        
4.  Save the `.env` file.

## Running Data_Keeper

After completing the configuration steps, you can now run Snapture locally.

1.  Start the backend server:
	```sh
	cd server 
	node server.js
	```
2. Start the frontend development server:
	```sh
	cd ../client
	npm start
	```
3. Access Data_Keeperin your browser at `http://localhost:3001`.


