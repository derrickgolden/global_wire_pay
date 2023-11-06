const { pool } = require("./mysqlSetup");

const transactMoney = async(
        user_id, method, amount, currency, termsConditions, status, table
    ) => {
        
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
        INSERT INTO ${table} (user_id, method, amount, currency, termsConditions, status)
        VALUES (?, ?, ?, ?, ?, ?)
        `, [user_id, method, amount, currency, termsConditions, status]);

        console.log(res)
        return {success: true, msg: `Deposit ${status}`, 
            details: [{status, deposit_id: res.insertId}]
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
}