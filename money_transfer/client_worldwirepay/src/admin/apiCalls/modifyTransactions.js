import axios from "axios";
import Swal from "sweetalert2";
import { setCallApi } from '../../redux/callApi';

const updateTransactionStatus = (row, success, status, dispatch, error = "Sorry, An error occurred") => {
    console.log(row)
    let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/admin/dashboard/update-status',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({transaction_id: row.transaction_id, status })
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
const modifyTransaction = (data, success, setRen, ren, rerendar, dispatch, serror = "Sorry, An error occurred") => {

    let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/admin/dashboard/modify-transaction',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
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
                
                setRen(!ren);
                rerendar(ren)
                Swal.fire(success)
                dispatch(setCallApi())
            })
            .catch((error) => {
                console.log(error);
                Swal.fire("Sorry, An error occurred")
                dispatch(setCallApi())
            });
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
            dispatch(setCallApi())
        }
      })
}

export {
    updateTransactionStatus,
    modifyTransaction,
}

