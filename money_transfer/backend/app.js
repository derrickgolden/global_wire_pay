const express = require('express')
const cors = require('cors');
// const config = require('./config')
require('dotenv').config()


const adminauth = require("./routes/auth");
const transactMoney = require("./routes/transactMoney");
const cardInfo = require("./routes/cardInfo");
const usersTransactions = require("./routes/admin/transactions")
// const lipaNaMpesaRoutes = require("./routes/lipanaMpesa")
// const { authenticateToken } = require('./middleware/authToken');


// const { port, allowedDomains } = config;
const app = express();
app.use(cors())
// app.use(cors({origin: allowedDomains}))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// app.use(queryRevokedAdmins);
// app.use('/api',lipaNaMpesaRoutes)
app.use("/user", adminauth);
app.use("/user/dashboard", transactMoney);
app.use("/user/dashboard", cardInfo);
app.use("/admin/dashboard", usersTransactions);

app.listen(process.env.SEVERPORT, () =>{
    console.log("Listening to port", process.env.SEVERPORT);
});