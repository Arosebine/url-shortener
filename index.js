require('dotenv').config();
const express = require('express');
const BodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const connectDB = require('./database/urlDatabase');
const IndexRoutes = require('./routes/urlShortener.routes');

const app = express();
connectDB();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(BodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', IndexRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

