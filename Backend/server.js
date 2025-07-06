import dotenv from 'dotenv'
dotenv.config();

import http from 'http'
import app from './app.js';
import connectDB from './db/db.js'

const server = http.createServer(app);
const port = process.env.PORT || 3000

connectDB()
.then(()=>{
    server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
  })
}).catch((error)=>{
  console.log("Error: ", error)
})




