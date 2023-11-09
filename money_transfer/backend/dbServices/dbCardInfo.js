const { pool } = require("./mysqlSetup");

const insertCardInfo = async(cardInfo) => {

    try {
          const connection = await pool.getConnection();
          const columns = Object.keys(cardInfo).join(', ');
          const placeholders = Object.keys(cardInfo).map(() => '?').join(', ');
          const values = Object.values(cardInfo);
          
          const query = `
            INSERT INTO cards_info (${columns})
            VALUES (${placeholders})
          `;
          
          const [res] = await connection.query(query, values);
          connection.release();
          

        console.log(res)
        return {success: true, 
            details: [{card_info_id:res.insertId, ...cardInfo}]
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
    insertCardInfo
}