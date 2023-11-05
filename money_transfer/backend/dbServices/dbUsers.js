const { pool } = require("./mysqlSetup");

const getUserDetails = async( email) =>{
    try {
        const connection = await pool.getConnection();

        const [res] = await connection.query(`
        SELECT * from user_details 
        WHERE email = ?;
        `, [email])

        console.log("response", res)

        if(res.length){
            return {success: true, details: res}
        }else{
            return {success: false, msg: "email unavaible"}
        }
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
    getUserDetails,
}