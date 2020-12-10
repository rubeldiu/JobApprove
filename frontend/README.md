### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
``` 
### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```


## Features
User login with JWT Token 
User name : john
Password: 123456

 - User can see all the Pending Jobs, Approved Jobs and Rejected Jobs.
 - User has ability to reject and approve a job.


