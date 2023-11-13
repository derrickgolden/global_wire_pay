const { pool } = require("../mysqlSetup");

const getAdminDetails = async() => {
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
        SELECT * FROM admin_details
        `, []);

        connection.release();
        
        console.log(res)
        return {success: true, msg: "Admin details", 
            details: res
        };
    } catch (error) {
        connection.release();
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
    getAdminDetails,
}