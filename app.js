import express from 'express';
import dotenv from 'dotenv'
import path from 'path';
import router from './routes/userRoute.js';
import { connection } from './config/dbConnection.js';
const app = express();
const __dirname = path.resolve();

dotenv.config()
const port = process.env.PORT || 3000

//setting the ejs files/path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//All routes
app.use('/' , router)


app.listen(port, async()=>{
    try {
        await connection
        console.log(`Database connection established`);
    } catch (err) {
        console.log(err +'While connecting to db');
    }
    console.log(`listening on ${port}`);
})

