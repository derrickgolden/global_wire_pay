import axios from "axios";

const getUserCardDetails = (row, setModal_status_data) => {
    console.log(row)
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:5000/user/dashboard/get-card/${row.user_id}`,
        headers: { 
            'Content-Type': 'application/json'
        }
    };

            axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data)); 
                setModal_status_data(response.data.details)
            })
            .catch((error) => {
                console.log(error);
                // return response.data;
            });
        } 

export {
    getUserCardDetails,
}

