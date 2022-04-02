const app = require('./app');
const connectDB = require('./db/database');
require('dotenv').config({path:'backend/config/config.env'});

const port = process.env.PORT || 3000;

const start = async() => {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
    })
}

//connectDB();


// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}...`);
// })

start();