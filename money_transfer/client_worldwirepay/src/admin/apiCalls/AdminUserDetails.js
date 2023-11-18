
import axios from "axios";
import Swal from "sweetalert2";
import { setCallApi } from '../../redux/callApi';

const updateTransferStatus = (row, success, status, dispatch, error = "Sorry, An error occurred") => {
    console.log(row)
    let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/admin/dashboard/transfers/update-status',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            transfer_id: row.transfer_id, status, recipient_email: row.recipient_email, sender_email: row.sender_email
         })
    };

    Swal.fire({
        icon: 'warning',
        title: 'Are you want to take this action?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
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
                Swal.fire("Sorry, An error occurred")
                dispatch(setCallApi());
            });
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
            dispatch(setCallApi());
        }
      })
}