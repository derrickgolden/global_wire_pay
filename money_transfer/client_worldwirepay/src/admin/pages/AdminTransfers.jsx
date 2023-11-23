import { useState, useEffect, useRef } from 'react'
import DataTable_Component from '../components/DataTable'
// import Btn_grp from '../components/payment/payment_btn_grp'
// import Details_modal from '../components/payment/details_modal'
// import Add_data_modal from '../components/storedData/add_data_modal'
// import Update_data_modal from '../components/update_data_modal'
import Update_data_modal from '../components/UpdateDataModal'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faEnvelope, faCopy, faCheck, faBan } from '@fortawesome/free-solid-svg-icons'
// import { apidata } from './store/store'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/BreadCrumb'
import Status_modal from '../components/StatusModal'
import Add_data_modal from '../components/UpdateDataModal'
import axios from 'axios'
import { updateTransferStatus } from '../apiCalls/modifyTransfers'
import { useDispatch, useSelector } from 'react-redux'
// import { columns } from './data/transfersColumns'
// import {Modal} from 'bootstrap'
// import { useState, useEffect } from 'react'

// export const apidata = [

//     {
//         id:1,
//         transaction_id: 1256,
//         status: "active",
//         payment_method:"bkash",
//         sender_number: 13243,
//         amount: 32432,
//         date:"1-10-23",
//         main_balence:687,

//     },
//     {
//         id:2,
        
//         transaction_id: 563456,
//         status: "pending",
//         payment_method:"Nagad",
//         sender_number: 133676,
//         amount: 32432,
//         date:"1-10-23",
//         main_balence:687,

//     },
//     {
//         id:3,
//         transaction_id: 7956,
//         status: "trash",
//         payment_method:"nagad",
//         sender_number: 13543,
//         amount: 32432,
//         date:"1-10-23",
//         main_balence:687,
//     },

  

// ]

export default function AdminTransfers() {

    const dispatch = useDispatch()
    const callApi = useSelector(state =>state.callApi)

    const title = "Transfers data"
    const [apistate, setApiState] = useState([])
    const [selectVal, setSelectval] = useState([])
    // pass status model render
    const [openModal, setOpenModal] = useState(true)
    // open update data modal
    const [open_update_modal, setOpen_update_modal] = useState({ render: true, modal_open: false })
    const [update_modal_data, setUpdate_modal_data] = useState('')
    const [rerendarApi, setRerendarApi] = useState(false)
    {/* all data for view */ }
    const [selectVal_details, setSelectVal_details] = useState([])
    {/* see all details modal(view) */ }
    const [details_modal_show, set_details_modal_Show] = useState(false);
    // open add data modal
    const [open_add_modal, setOpen_add_modal] = useState({ render: true, modal_open: false })
    const [apicol, setApiCol] = useState([])

    // transfers
    const [transfers, setTransfers] = useState([]);
    const [transfersType, setTransfersType] =useState ("users");
    const [nonuserTransfers, setNonuserTransfers] = useState([])


    const filter_apistate = apistate.filter((val) => {
        return val.status !== "trash"
    })
   

    const brad = [
        {
            name: "home",
        },
        {
            name: "Transfers Data",
        }
    ]
    
    const columns = [
        {
            name: "Amount",
            selector: row => row.amount,
            sortable: true
        },
        {
            name: "Sender Email",
            selector: row => row.sender_email,
            sortable: true
        },
        {
            name: "Receiver Email",
            selector: row => row.recipient_email,
            sortable: true
        },
        {
            name: "Transfer_id",
            selector: row => row.transfer_id,
            sortable: true
        },
        {
            name: "Sender Balance",
            selector: row => row.sender_balance,
            sortable: true
        },
        {
            name: "Date",
            selector: row => new Date(row.timestamp).toDateString(),
            sortable: true
        },
    
        {
            name: "Status",
            cell: (row) => <>
            <button onClick={() => handleShow(row)} 
                className={`btn py-0 px-1 ${row.status.toLowerCase() == "completed" && "btn-success"}    
                ${row.status.toLowerCase() == "inprogress" ? "btn-primary" : ""}  
                ${row.status.toLowerCase() == "cancelled" ? "btn-danger" : ""} btn-sm`}  
                >{row.status}
            </button></>,
        },
        {
            name: "action",
            cell: (row) => <>{
                row.status == "inprogress" && (
                <>
                <button onClick={() => completeTransaction(row)} className=" btn btn-primary btn-sm ms-1"  >
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                </>)
                }
                <button onClick={() => updateTransfersDetails(row)} className=" btn btn-secondary btn-sm ms-1"  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                {/* <button onClick={() => delete_row(row)} className=" btn btn-info btn-sm ms-1"  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                </button> */}
                {row.status == "inprogress" && (
                <button onClick={() => cancelTransfers(row)} className=" btn btn-danger btn-sm ms-1"  >
                    <FontAwesomeIcon icon={faBan} />
                </button>
                )}
                </>,
        }
    
    ]
    const nonuserColumns = [
        {
            name: "Transfer_id",
            selector: row => row.transfer_id,
            sortable: true
        },
        {
            name: "Sender_id",
            selector: row => row.sender_id,
            sortable: true
        },
        {
            name: "Amount",
            selector: row => row.amount,
            sortable: true
        },
        {
            name: "Receiver Email",
            selector: row => row.recipient_email,
            sortable: true
        },
        {
            name: "Name",
            selector: row => row.company_name || `${row.first_name} ${row.last_name}`,
            sortable: true
        },
        {
            name: "Date",
            selector: row => new Date(row.timestamp).toDateString(),
            sortable: true
        },
        {
            name: "Country",
            selector: row => row.country,
            sortable: true
        },
    
        {
            name: "Status",
            cell: (row) => <>
            <button 
            // onClick={() => handleShow(row)} 
                className={`btn py-0 px-1 ${row.status.toLowerCase() == "registered" && "btn-success"}    
                ${row.status.toLowerCase() == "pending" ? "btn-primary" : ""}  
                ${row.status.toLowerCase() == "cancelled" ? "btn-danger" : ""} btn-sm`}  
                >{row.status}
            </button></>,
        },
        {
            name: "New T_id",
            selector: row => row.new_transfer_id,
            sortable: true
        },
    ]

    const handleShow = (row) => {
        //status model e pass data 
        setOpenModal(openModal => !openModal)
        setSelectval(row)
    }

    const setStoreBtn = () => { 
        //    return alert(qw)
        setOpen_add_modal({ render: !open_add_modal.render, modal_open: true })
    }

    const updateTransfersDetails = (row) => {
        setOpen_update_modal({ render: !open_update_modal.render, modal_open: true })
        setUpdate_modal_data(row)
    }

    const completeTransaction = (row) => {
        const success = "Transaction status changed to updated"
        const status = "completed"
        updateTransferStatus(row, success, status, dispatch)
    }

    const cancelTransfers = (row) => {
        const success = "Transaction status changed to cancelled";
        const status = "cancelled"
        updateTransferStatus(row, success, status, dispatch)
    }

    {/* data receve from store */ }
    useEffect(() => {
        // call api and response data set " setApiData(your res.data) " and column setApiCol( columns )
        transfersType === "users"? setApiState(transfers) : setApiState(nonuserTransfers)
        transfersType === "users"? setApiCol(columns) : setApiCol(nonuserColumns);
        
        console.log('render from transfers data')
    }, [rerendarApi, transfers, transfersType])

    const rerender_status = (e) => {
        setRerendarApi(!rerendarApi)   
    }
    const rerender = (e) => {
        setRerendarApi(!rerendarApi)
        Swal.fire({
            icon: 'warning',
            title: 'You wont be able to revert add!',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setRerendarApi(!rerendarApi)
                Swal.fire('Saved!. id:', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    const rerender_update = (e) => {
        setRerendarApi(e)
        Swal.fire({
            icon: 'warning',
            title: 'You wont be able to revert update!',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setRerendarApi(!rerendarApi)
                Swal.fire('Saved!. id:', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    const delete_row = (row) => {

        Swal.fire({
            icon: 'warning',
            title: 'You wont be able to revert this!',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setRerendarApi(!rerendarApi)
                Swal.fire('Saved!. id:' + row.id, '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    useEffect(() =>{
        const token = JSON.parse(sessionStorage.getItem("adminToken"))
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/admin/dashboard/transfers',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            }
        };
    
        axios.request(config)
        .then((response) => {
            // console.log(JSON.stringify(response.data));
            setTransfers(response.data.details)
        })
        .catch((error) => {
            console.log(error.response);
            if(error.response.data.reLogin){
                Swal.fire("Could not parse your authentication token. Please try to Login again.")
            }else{
                Swal.fire("Sorry, An error occurred while fetching transfers data")
            }
        });
    }, [callApi]);
    
    useEffect(() =>{
        const token = JSON.parse(sessionStorage.getItem("adminToken"))
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/admin/dashboard/transfers/non-users',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            }
        };
    
        axios.request(config)
        .then((response) => {
            setNonuserTransfers(response.data.details);
        })
        .catch((error) => {
            console.log(error.response);
            if(error.response.data.reLogin){
                Swal.fire("Could not parse your authentication token. Please try to Login again.")
            }else{
                Swal.fire("Sorry, An error occurred while fetching non-users transfers data")
            }
        });
    }, []);
    
    return (
        <>
            {/* status modal component */}
            {/* <Status_modal rerendar={(e) => rerender_status(e)} row={selectVal} openModal={openModal} /> */}
            {/* add data modal */}
            {/* <Add_data_modal rerendar={(e) => rerender(e)} openAddDataModal={open_add_modal} /> */}
            {/* add data modal */}
            <Update_data_modal rerendar={(e) => rerender_update(e)} 
                select_data={update_modal_data} open_update_data_modal={open_update_modal}
                data_type = "transfers" 
            />

            <div className="container-fluid" >
                <Breadcrumb title={title} brad={brad} />
                <Link to="#" onClick={() => setTransfersType("users")} >
                    <button type="button" 
                    className={`${transfersType === "users"? "active ": ""} btn btn-outline-success btn-sm `}>Users</button>
                </Link>
                <Link to="#" onClick={() => setTransfersType("non_users")} >
                    <button type="button" 
                    className={`${transfersType === "users"? "": "active "}btn btn-outline-danger btn-sm ms-1`}>Non-Users</button>
                </Link>

                <div className="row my-3">
                    <div className="col-12">
                        <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                            <div className="card-header d-flex justify-content-between border-bottom pb-1">
                                <h4>{title}</h4>
                                {/* <div className="btn btn-info btn-sm " onClick={setStoreBtn}>Add store data</div> */}
                            </div>
                            <div className="card-body">
                                {/* <div className="card-title text-center bg-warning py-2 rounded">All Data stored from the APK</div> */}

                                <DataTable_Component search="transfer_id" title_btn="Transfers Data" title={title} apidata={filter_apistate} columns={apicol} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}