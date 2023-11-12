import { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import Swal from 'sweetalert2'
import { modifyTransaction } from '../apiCalls/modifyTransactions';
export default function Add_data_modal({ rerendar,select_data, open_update_data_modal }) {

    const [ren, setRen] = useState("false")
    const [update_modal_data, setUpdate_modal_data] = useState(select_data)
    // open modal in status
    const [add_data_modal_Show, set_update_data_modal_Show] = useState(false);

    const [update_details, set_update_details] = useState({
        amount: select_data?.amount, 
        fees: select_data?.fees || 0.00,
        balance: select_data?.balance,
        description: select_data?.description
    })

    useEffect(() => {
        setUpdate_modal_data(select_data)
        set_update_details({
            amount: select_data?.amount, 
            fees: select_data?.fees || 0.00,
            balance: select_data?.balance || 0.00,
            description: select_data?.description
        })
    }, [select_data])
    // console.log(update_modal_data.payment_method)

    // status model show and filter select value 
    useEffect(() => {
        set_update_data_modal_Show(open_update_data_modal.modal_open)
        // setModal_status_data(row.status.toLowerCase());
    }, [open_update_data_modal])

    // console.log(add_data_modal_Show)
    const handleClose = () => {
        set_update_data_modal_Show(false);
    }

    const handleUpdateInfo = (e) =>{
        const name = e.target.id
        const value = e.target.value
        console.log(update_details.description?.length )
        if(name === "description" && value?.length <= 250){
            set_update_details(data =>({...data, [name]: value}))
        }else if(name !== "description"){
            set_update_details(data =>({...data, [name]: value}))
        }
    }

    const handleUpdate = () => {
        const success = "Transaction details updated"
        console.log(update_details)
        modifyTransaction({transaction_id: update_modal_data.transaction_id, ...update_details}, 
            success, setRen, ren, rerendar);
        // set_update_details({amount: "", fees:"", balance: "", description: ""})
        // setRen(!ren);
        // typeof rerendar === 'function' && rerendar(ren)
        // set_update_data_modal_Show(false);
    }

    return (
        <>
            {/* status update modal */}
            <Modal  show={add_data_modal_Show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Transaction</Modal.Title>

                </Modal.Header>
                <Modal.Body >
                <div className="table-responsive my-3">
                    <table className="table align-middle border table-striped table-hover">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Object.entries(update_modal_data).map((data, i) => {
                        return (<tr key={i}>
                            <td>{data[0]}</td>
                            <td>{data[1]}</td>
                        </tr>)
                        })}

                    </tbody>
                    </table>
                </div>
                    <div  className=" mt-3">
                        <label ><b>Amount</ b></label>
                        <input onChange={handleUpdateInfo} type="text" id="amount"
                            value={update_details?.amount} placeholder="Amount" className="form-control" />
                    </div>
                    <div  className=" mt-3">
                        <label ><b>Fees</ b></label>
                        <input onChange={handleUpdateInfo} type="number" id="fees"
                            value={update_details?.fees} placeholder="Fees" className="form-control" />
                    </div>
                    <div  className=" mt-3">
                        <label ><b>Balance</ b></label>
                        <input onChange={handleUpdateInfo} type="number" id="balance"
                            value={update_details.balance} placeholder="Balance" className="form-control" />
                    </div>
                    <div  className=" mt-3">
                        <label ><b>description</ b></label>
                        <textarea onChange={handleUpdateInfo} type="text" id="description"
                            value={update_details.description} placeholder="description" rows="5" 
                            className="form-control" >
                        </textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className="btn btn-sm" onClick={handleUpdate}>
                        Update Transaction
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}