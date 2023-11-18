import { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import Swal from 'sweetalert2'
import { modifyTransaction } from '../apiCalls/modifyTransactions';
import { useDispatch } from 'react-redux';
import callApi from '../../redux/callApi';
import { transactions, transfers } from './data/updateDataModalData';
import { modifyTransfer } from '../apiCalls/modifyTransfers';
export default function Add_data_modal({ rerendar,select_data, open_update_data_modal, data_type }) {
    const dispatch = useDispatch();

    const [ren, setRen] = useState("false")
    const [update_modal_data, setUpdate_modal_data] = useState(select_data)
    // open modal in status
    const [add_data_modal_Show, set_update_data_modal_Show] = useState(false);

    const [update_transactions, set_update_transactions] = useState({
        amount: select_data?.amount, 
        fees: select_data?.fees || 0.00,
        balance: select_data?.balance,
        description: select_data?.description || ""
    })
    const [update_transfers, set_update_transfers] = useState({
        amount: select_data?.amount, 
        sender_fees: select_data?.sender_fees || 0.00,
        receiver_fees: select_data?.receiver_fees || 0.00,
        sender_balance: select_data?.sender_balance,
        receiver_balance: select_data?.receiver_balance,
        description: select_data?.description || ""
    })

    useEffect(() => {
        setUpdate_modal_data(select_data)
        set_update_transactions({
            amount: select_data?.amount, 
            fees: select_data?.fees || 0,
            balance: select_data?.balance,
            description: select_data?.description
        })
        set_update_transfers({
            amount: select_data?.amount, 
            sender_fees: select_data?.sender_fees || 0.00,
            receiver_fees: select_data?.receiver_fees || 0.00,
            sender_balance: select_data?.sender_balance,
            receiver_balance: select_data?.receiver_balance,
            description: select_data?.description || ""
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
    const handleTransactionsInfo = (e) =>{
        const name = e.target.id
        const value = e.target.value
        console.log(update_transactions.description?.length )
        if(name === "description" && value?.length <= 250){
            set_update_transactions(data =>({...data, [name]: value}))
        }else if(name !== "description"){
            set_update_transactions(data =>({...data, [name]: value}))
        }
    }
    const handleTransferInfo = (e) =>{
        const name = e.target.id
        const value = e.target.value
        console.log(name, value)
        console.log(e);
        console.log(update_transfers.description?.length )
        if(name === "description" && value?.length <= 250){
            set_update_transfers(data =>({...data, [name]: value}))
        }else if(name !== "description"){
            set_update_transfers(data =>({...data, [name]: value}))
        }
    }

    const handleUpdate = () => {
        const success = "Transaction details updated"
        // console.log(update_transactions)
        const {transaction_id, transfer_id, receiver_id, sender_id, user_id} = update_modal_data;
        console.log("user_id", user_id)
        data_type === "transfers"? (
            modifyTransfer({transfer_id, receiver_id, sender_id, ...update_transfers}, 
                success, setRen, ren, rerendar, dispatch,)
                ):(
            modifyTransaction({transaction_id, user_id, ...update_transactions}, 
                success, setRen, ren, rerendar, dispatch,)
        )
        // set_update_transactions({amount: "", fees:"", balance: "", description: ""})
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
                {data_type === "transfers"? (
                    transfers.map((trans, i) =>(
                        <div  key={i}
                        className=" mt-3">
                            <label ><b>{trans.text}</ b></label>
                            <input onChange={handleTransferInfo} type={trans.type} id={trans.id}
                                value={update_transfers?.[trans.id]} placeholder={trans.placeholder} className="form-control" />
                        </div>
                    ))
                ) : (
                    transactions.map((trans, i) =>(
                        <div  key={i}
                        className=" mt-3">
                            <label ><b>{trans.text}</ b></label>
                            <input onChange={handleTransactionsInfo} type={trans.type} id={trans.id}
                                value={update_transactions?.[trans.id]} placeholder={trans.placeholder} className="form-control" />
                        </div>
                    ))
                )}
                    
                    <div  className=" mt-3">
                        <label ><b>description</ b></label>
                        <textarea onChange={data_type === "transfers"? handleTransferInfo : handleTransactionsInfo} 
                        type="text" id="description"
                            value={data_type === "transfers"? update_transfers.description : update_transactions.description} 
                            placeholder="description" rows="5" 
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