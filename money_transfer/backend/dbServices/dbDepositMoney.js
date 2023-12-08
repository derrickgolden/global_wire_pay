const { pool } = require("./mysqlSetup");

const transactMoney = async(
        user_id, method, amount, currency, termsConditions, status, type, ref_code
    ) => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
        INSERT INTO transactions(user_id, method, amount, currency, termsConditions, status, time_stamp, type, ref_code)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [user_id, method, amount, currency, termsConditions, status, currentDate, type, ref_code]);

        connection.release();
        
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
        const readableDate = currentDate.toLocaleString('en-US', options);

        return {success: true, msg: type === "deposit"? `Deposit ${status}`: `Withdraw ${status}`, readableDate,
            details: [{status, deposit_id: res.insertId, readableDate}]
        };
    } catch (error) {
        console.log(error)

        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
          } else {
            console.error('Error:', error.message);
            return { success: false, msg: error.message };
          }
    }
}
const getTransactions = async(
        user_id
    ) => {
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
        SELECT * FROM transactions
        WHERE user_id = ?
        ORDER BY time_stamp DESC
        `, [user_id]);

        connection.release();

        console.log(res)
        return {success: true, msg: "User transactions", 
            details: res
        };
    } catch (error) {
        console.log(error)

        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
          } else {
            console.error('Error:', error.message);
            return { success: false, msg: error.message };
          }
    }
}
const getTransactionTotals = async(
        user_id
    ) => {
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
        SELECT * FROM transaction_totals
        WHERE user_id = ?
        `, [user_id]);

        connection.release();

        console.log(res)
        return {success: true, msg: "User transactions totals", 
            details: res
        };
    } catch (error) {
        console.log(error)

        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
          } else {
            console.error('Error:', error.message);
            return { success: false, msg: error.message };
          }
    }
}

module.exports ={
    transactMoney,
    getTransactions,
    getTransactionTotals
}