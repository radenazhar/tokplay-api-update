const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const videoRoute = require('./apps/routes/videoRoutes')
const productRoute = require('./apps/routes/productRoute')

const app = express();
const corsOptions = {
    origin : "*"
}

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ft-api-tokplay', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


app.use('/videos', videoRoute )
app.use('/products', productRoute)
const PORT = 3001;
app.listen(PORT, ()=> {
    console.log(`Server berjalan pada PORT ${PORT}`);
})