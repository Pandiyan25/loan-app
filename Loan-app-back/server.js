const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./Routes/userRoutes');
const loanRoutes = require('./Routes/loanRoutes');
const employmentRoutes = require('./Routes/employmentRoutes');
const connectToDatabase = require('./config/db');
//Using express
const app = express();
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json({ limit: '10mb' }));

//To connect database
connectToDatabase();

//Middleware
app.use(
  cors({
    origin: 'https://cybersapients.netlify.app/',
  })
);
//Routes
app.use('/api/user', userRoutes);
app.use('/api/loan', loanRoutes);
app.use('/api/employment', employmentRoutes);
//Server Running
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Successfully connected ${PORT}`);
});
