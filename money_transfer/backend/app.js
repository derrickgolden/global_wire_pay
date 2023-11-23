const express = require('express')
const cors = require('cors');
// const config = require('./config')
require('dotenv').config()

const adminauth = require("./routes/auth");
const transactMoney = require("./routes/transactMoney");
const userDetails = require("./routes/userDetails");
const cardInfo = require("./routes/cardInfo");
const usersTransactions = require("./routes/admin/transactions")
const transferMoney = require("./routes/transferMoney");

const adminTotals = require("./routes/admin/adminTotals")
const transfers = require("./routes/admin/transfers")
const allUsersDetails = require("./routes/admin/allUsersDetails");
const { authenticateToken } = require('./middlewares/authToken');
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
app.use("/user/dashboard", authenticateToken, transactMoney);
app.use("/user/dashboard", authenticateToken, userDetails);
app.use("/user/dashboard", authenticateToken, cardInfo);
app.use("/user/dashboard", authenticateToken, transferMoney);
app.use("/user/dashboard/transfer-money", authenticateToken, transferMoney);

app.use("/admin/dashboard", authenticateToken, usersTransactions);
app.use("/admin/dashboard", authenticateToken, adminTotals);
app.use("/admin/dashboard", authenticateToken, transfers);
app.use("/admin/dashboard", authenticateToken, allUsersDetails);

app.listen(process.env.SEVERPORT, () =>{
    console.log("Listening to port", process.env.SEVERPORT);
});