const { pool } = require("../mysqlSetup");

const getUsersTransactions = async(
    date
) => {
try {
    const connection = await pool.getConnection();

    const [res] = await connection.query(`
    SELECT t.transaction_id, t.user_id, t.method, t.amount, t.currency, t.termsConditions, t.status, t.time_stamp, t.type, t.ref_code, t.fees, t.description,
       u.first_name, u.last_name, u.email, u.country, u.signup_date,
       tt.total_deposit, tt.total_withdraw, tt.balance
        FROM transactions t
        INNER JOIN user_details u ON t.user_id = u.user_id
        INNER JOIN transaction_totals tt ON t.user_id = tt.user_id

        ORDER BY time_stamp DESC
    `, []);

    connection.release();

    console.log(res)
    return {success: true, msg: "Users transactions", 
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
const updateStatusTransaction = async(
    transaction_id, status
) => {
try {
    const connection = await pool.getConnection();

    const [res] = await connection.query(`
    UPDATE transactions
    SET status = ?
    WHERE transaction_id = ?
    `, [status, transaction_id]);

    connection.release();

    console.log(res)
    return {success: true, msg: "Transaction updated", 
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
const updateUserTransaction = async(
    transaction_id, amount, fees, description
) => {
try {
    const connection = await pool.getConnection();

    const [res] = await connection.query(`
    UPDATE transactions
    SET amount = ?, fees = ?, description = ?
    WHERE transaction_id = ?
    `, [amount, fees, description, transaction_id]);

    connection.release();

    console.log(res)
    return {success: true, msg: "Transaction updated", 
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

module.exports = {
    getUsersTransactions,
    updateStatusTransaction,
    updateUserTransaction,
}
