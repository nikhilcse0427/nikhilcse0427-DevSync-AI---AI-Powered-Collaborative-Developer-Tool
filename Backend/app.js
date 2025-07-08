import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors'; // ✅

import userRoutes from './routes/user.route.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Server is running</h1>');
});

export default app;
