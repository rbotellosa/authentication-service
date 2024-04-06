import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import  authRoutes  from './routes/authRoutes';
import  userRoutes  from './routes/userRoutes';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Start server
const PORT: string | number = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


