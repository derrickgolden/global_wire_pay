const { pool } = require("./mysqlSetup");

const insertCardInfo = async(cardInfo) => {
    const {card_name, user_id} = cardInfo
    try {
          const connection = await pool.getConnection();

          const [resp] = await connection.query(`
            SELECT * FROM card_info
            WHERE card_name = ? AND user_id = ?
          `,[card_name, user_id]);

          if(resp.length){
            connection.release();

            return {success: false, error: false, msg: `${card_name} card already registered`,
            details: [{card_name, user_id}]
            };
            
          }else{
            const columns = Object.keys(cardInfo).join(', ');
            const placeholders = Object.keys(cardInfo).map(() => '?').join(', ');
            const values = Object.values(cardInfo);
            
            const query = `
              INSERT INTO card_info (${columns})
              VALUES (${placeholders})
            `;
            
            const [res] = await connection.query(query, values);

            connection.release();
            
            console.log(res)
            return {success: true, error: false, msg: "Card Registered",
                details: [{card_info_id:res.insertId, ...cardInfo}]
            };
          }
          

    } catch (error) {
        console.log(error)

        if (error.sqlMessage) {
            return { success: false, error: true, msg: error.sqlMessage };
          } else {
            console.error('Error:', error.message);
            return { success: false, error: true, msg: error.message };
          }
    }
}
const getCardInfo = async(user_id) => {

    try {
          const connection = await pool.getConnection();
          
          const [res] = await connection.query( `
            SELECT * FROM card_info 
            WHERE user_id = ?
          `,[user_id]);
          
          connection.release();
          
        console.log("cards details", res)
        return {success: true, msg: "Card Details",
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
    insertCardInfo,
    getCardInfo
}