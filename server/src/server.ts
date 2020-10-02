import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();

const { PORT = 3333, HOST = 'localhost', DB_NAME, DB_PASSWORD, DB_DATABASE } =  process.env;

// import mongoose from 'mongoose';

const app = express();

// mongoose.connect(`mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0-8bgdi.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`,
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


app.use(cors());
app.use(express.json());
app.use('/api/v1',routes);

app.listen(PORT, () => {
  console.log(`SERVER ${HOST}:${PORT}`);
});