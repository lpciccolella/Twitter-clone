const express = require("express");
const app = express();
const connectToDatabase = require('./config/connectToDatabase');
const cors = require("cors");

// Funcion que conecta express a la BD
connectToDatabase();

app.use(cors());

// Json body para crear post
app.use(express.json({ extended: false}));

// Routes
app.use('/api/posts', require('./routes/posts.js'));
app.use("/api/users", require("./routes/users.js"));

// especificar en que puerto corre
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
 