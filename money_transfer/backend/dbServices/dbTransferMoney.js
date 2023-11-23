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
        
        console.log("insert Transfers Details successful")

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
        
        console.log("nsert Nonuser Transfer Details successful")
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
        SELECT
        transfer_id,
        sender_id,
        receiver_id,
        CASE
            WHEN transfers.sender_id = ? THEN user_receiver.first_name
            ELSE NULL
        END AS receiver_first_name,
        CASE
            WHEN transfers.sender_id = ? THEN user_receiver.last_name
            ELSE NULL
        END AS receiver_last_name,
        CASE
            WHEN transfers.sender_id = ? THEN user_receiver.email
            ELSE NULL
        END AS receiver_email,
        CASE
            WHEN transfers.receiver_id = ? THEN user_sender.first_name
            ELSE NULL
        END AS sender_first_name,
        CASE
            WHEN transfers.receiver_id = ? THEN user_sender.last_name
            ELSE NULL
        END AS sender_last_name,
        CASE
            WHEN transfers.receiver_id = ? THEN user_sender.email
            ELSE NULL
        END AS sender_email,
        recipient_email,
        amount,
        status,
        timestamp,
        sender_fees,
        receiver_fees,
        description
    FROM
        transfers
    LEFT JOIN
        user_details AS user_sender ON transfers.sender_id = user_sender.user_id
    LEFT JOIN
        user_details AS user_receiver ON transfers.receiver_id = user_receiver.user_id
    WHERE
        transfers.sender_id = ? OR transfers.receiver_id = ?
    
    UNION
    
    SELECT
        transfer_id,
        sender_id,
        NULL AS receiver_id,
        first_name AS receiver_first_name,
        last_name AS receiver_last_name,
        recipient_email AS receiver_email,
        NULL AS sender_first_name,
        NULL AS sender_last_name,
        NULL AS sender_email,
        recipient_email,
        amount,
        status,
        timestamp,
        NULL AS sender_fees,
        NULL AS receiver_fees,
        NULL AS description
    FROM
        nonuser_transfers
    WHERE
        sender_id = ? AND (status = ? OR status = ? )
    ORDER BY timestamp DESC;
    
        `, [user_id, user_id, user_id, user_id, user_id, user_id, user_id, user_id, user_id, "pending", "cancelled"]);
        
        connection.release();
        
        console.log("get Transfers Details successfull")
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
        connection.release();
    }
}

module.exports ={
    insertTransfersDetails,
    insertNonuserTransferDetails,
    getTransfersDetails
}