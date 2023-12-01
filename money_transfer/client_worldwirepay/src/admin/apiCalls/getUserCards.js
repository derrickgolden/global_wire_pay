import axios from "axios";
import Swal from "sweetalert2";
import { server_baseurl } from "../../baseUrl";

const getUserCardDetails = (row, setModal_status_data) => {
    const token = JSON.parse(sessionStorage.getItem("adminToken"))

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${server_baseurl}/user/dashboard/get-card/${row.user_id}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    };

    axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data)); 
        setModal_status_data(response.data.details);
    })
    .catch((error) => {
        console.log(error);
        if(error.response.data.reLogin){
            Swal.fire("Could not parse your authentication token. Please try to Login again.")
        }else{
            Swal.fire("Sorry, an error occurred")
        }
    });
} 

export {
    getUserCardDetails,
}

