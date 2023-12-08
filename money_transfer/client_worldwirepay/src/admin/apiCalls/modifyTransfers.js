import axios from "axios";
import Swal from "sweetalert2";
import { setCallApi } from '../../redux/callApi';
import { server_baseurl } from "../../baseUrl";

const updateTransferStatus = (row, success, status, dispatch, error = "Sorry, An error occurred") => {

    Swal.fire({
        icon: 'warning',
        title: 'Are you want to take this action?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            const token = JSON.parse(sessionStorage.getItem("adminToken"))

            let config = {
                method: 'patch',
                maxBodyLength: Infinity,
                url: `${server_baseurl}/admin/dashboard/transfers/update-status`,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
                data: JSON.stringify({ ...row, status })
            };
            axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data.msg)); 
                // alert(success)           
                
                // setRen(!ren);
                // rerendar(ren)
                Swal.fire(success)
                dispatch(setCallApi());
            })
            .catch((error) => {
                console.log(error);
                if(error.response.data.reLogin){
                    Swal.fire("Could not parse your authentication token. Please try to Login again.")
                }else{
                    Swal.fire("Sorry, an error occurred")
                }
                dispatch(setCallApi());
            });
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
            dispatch(setCallApi());
        }
      })
}
const modifyTransfer = (data, success, setRen, ren, rerendar, dispatch, serror = "Sorry, An error occurred") => {
    console.log("token", JSON.parse(sessionStorage.getItem("adminToken")));

    Swal.fire({
        icon: 'warning',
        title: 'Are you want to take this action?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            const token = JSON.parse(sessionStorage.getItem("adminToken"))

            let config = {
                method: 'patch',
                maxBodyLength: Infinity,
                url: `${server_baseurl}/admin/dashboard/transfers/modify-transfers`,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
                data: JSON.stringify(data)
            };

            axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data.msg)); 
                // alert(success)           
                
                setRen(!ren);
                rerendar(ren)
                Swal.fire(success)
                dispatch(setCallApi())
            })
            .catch((error) => {
                console.log(error);
                if(error.response.data.reLogin){
                    Swal.fire("Could not parse your authentication token. Please try to Login again.")
                }else{
                    Swal.fire("Sorry, an error occurred")
                }
                dispatch(setCallApi())
            });
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
            dispatch(setCallApi())
        }
      })
}

export {
    updateTransferStatus,
    modifyTransfer,
}

