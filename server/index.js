import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();
const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4vhhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen( PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch( (err) => console.log(err.message));

app.get('/', function (req, res) {
    res.send("Hii");
});


