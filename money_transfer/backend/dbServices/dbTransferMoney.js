const { pool } = require("./mysqlSetup");

const insertTransfersDetails = async(
        {sender_id, receiver_id, recipient_email, amount}
    ) => {
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
            INSERT INTO transfers(sender_id, receiver_id, recipient_email, amount)
            VALUES (?, ?, ?, ?)
        `, [sender_id, receiver_id, recipient_email, amount]);

        connection.release();
        
        console.log(res)
        return {success: true, msg: "Money send was successful awaiting confirmation", 
            details: [{transfer_id: res.insertId}]
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
const insertNonuserTransferDetails = async(
        {sender_id, recipient_email, amount, company_name, user_type, first_name, last_name, country}
    ) => {
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
            INSERT INTO nonuser_transfers(
                sender_id, recipient_email, amount, company_name, user_type, first_name, last_name, country)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [sender_id, recipient_email, amount, company_name, user_type, first_name, last_name, country]);

        connection.release();
        
        console.log(res)
        return {success: true, msg: "Money send was successful awaiting confirmation", 
            details: [{transfer_id: res.insertId}]
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
const getTransfersDetails = async(user_id) => {
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
            SELECT * FROM transfers
            WHERE sender_id = ? OR receiver_id = ?
        `, [user_id, user_id]);

        connection.release();
        
        console.log(res)
        return {success: true, msg: "Transfer Details", 
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
    insertTransfersDetails,
    insertNonuserTransferDetails,
    getTransfersDetails
}