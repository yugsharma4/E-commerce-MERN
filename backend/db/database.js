const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("Connected to the DB.."))
    .catch((err) => console.log(err))
}


// const connectDB = () => {
//     mongoose.connect(process.env.DB_URL, {
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     }).then((data) => {
//         console.log(`Mongodb connected with server: ${data.connection.host}`);
//     }).catch(error => {
//         console.log(error);
//     })
// }

module.exports = connectDB;