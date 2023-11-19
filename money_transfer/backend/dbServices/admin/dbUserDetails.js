const { pool } = require("../mysqlSetup");

const getAllUsersDetails = async(
    date
) => {
try {
    const connection = await pool.getConnection();

    const [res] = await connection.query(`
        SELECT
        user_details.user_id,
        user_details.first_name,
        user_details.last_name,
        user_details.email,
        user_details.phone,
        user_details.country,
        user_details.signup_date,
        transaction_totals.total_deposit,
        transaction_totals.total_withdraw,
        transaction_totals.balance
    FROM
        user_details
    LEFT JOIN
        transaction_totals ON user_details.user_id = transaction_totals.user_id

        ORDER BY signup_date DESC
    `, []);

    connection.release();

    console.log("All Users Details")
    return {success: true, msg: "All Users Details", 
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

const updateUserBalance = async(
    balance, user_id
) => {
try {
    const connection = await pool.getConnection();

    const [res] = await connection.query(`
        UPDATE transaction_totals
        SET balance = ?
        WHERE user_id = ?
    `, [balance, user_id]);

    connection.release();

    console.log("Balance update")
    return {success: true, msg: "Balance Updated", 
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
    getAllUsersDetails,
    updateUserBalance,
}