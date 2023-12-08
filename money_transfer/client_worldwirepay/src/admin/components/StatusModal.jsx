import axios from 'axios';
import { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { setCallApi } from '../../redux/callApi';
import { server_baseurl } from '../../baseUrl';
export default function Status_modal({ row, openModal,rerendar,status_id }) {

    const dispatch = useDispatch()

    // modal_status_data
    const [users_modal_data, setModal_users_data] = useState({})
    // open modal in status
    const [status_modal_show, set_status_modal_Show] = useState(false);
    // rendering
    const [ren, setRen] = useState("false")

    const [balance, setBalance] = useState(row.balance)

    // set default value in select component
    useEffect(() => {
        setModal_users_data(row)
        setBalance(row.balance);
    }, [row])
    
    // status model show and filter status value 
    useEffect(() => {
        row.user_id && set_status_modal_Show(true)
    }, [openModal])

    const handleBalanceInfo = (e) =>{
        const value = e.target.value
       setBalance(value);
    }
    // close modal
    const handleClose = () => {
        set_status_modal_Show(false);
    }

    // update status modal handler
    const handleUpdate =()=>{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure you want to change user balance',
            showCancelButton: true,
            confirmButtonText: 'Yes',
          }).then((result) => {
            
              setRen(!ren);
              rerendar(ren)
           
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const token = JSON.parse(sessionStorage.getItem("adminToken"))
                const amount = balance - users_modal_data?.balance
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${server_baseurl}/admin/dashboard/user/balance-update`,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`,
                    },
                    data: JSON.stringify({...users_modal_data, balance, amount})
                };

                axios.request(config)
                .then((response) => {
                    // console.log(JSON.stringify(response.data)); 
                    Swal.fire('Balance changed to: '+balance)
                    dispatch(setCallApi());
                })
                .catch((error) => {
                    console.log(error);
                    if(error.response.data.reLogin){
                        Swal.fire("Could not parse your authentication token. Please try to Login again.")
                    }else{
                        Swal.fire("Sorry, an error occurred while changing balance.")
                    }
                });  
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
          })
        
        typeof rerendar === 'function' && rerendar(ren)
    }

    return (
        <>
            {/* status update modal */}
            <Modal show={status_modal_show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="table-responsive my-3">
                    <table className="table align-middle border table-striped table-hover">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Object.entries(users_modal_data).map((data, i) => {
                        return (<tr key={i}>
                            <td>{data[0]}</td>
                            <td>{data[1]}</td>
                        </tr>)
                        })}

                    </tbody>
                    </table>
                    <div className=" mt-3">
                        <label ><b>New balance</ b></label>
                        <input onChange={handleBalanceInfo} type="number" id="number"
                                value={balance} placeholder="Balance" className="form-control" />
                        </div>
                </div>              
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className="btn btn-sm" onClick={handleUpdate}>
                        Update Status
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}