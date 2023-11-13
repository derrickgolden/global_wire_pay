
import { useState, useEffect, useRef } from 'react'

import DataTable_Component from '../components/DataTable'
import Breadcrumb from '../components/BreadCrumb'
import Btn_grp from '../components/Btn_grp'
import Status_modal from '../components/StatusModal'
// import Details_modal from '../../components/payment/details_modal/index'
// import Add_data_modal from '../../components/storedData/add_data_modal/index'
import Update_data_modal from '../components/UpdateDataModal'
import Email_sender_data_modal from '../components/SendEmail'
import Swal from 'sweetalert2'
// import { btn_link } from "./btn_link/btn_link";
// import { apidata } from './store/store'
import { Link } from 'react-router-dom'
// import {Modal} from 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCheck, faBan, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'  
// import { columns } from '../data/table'
import axios from 'axios'
import {  updateTransactionStatus } from '../apiCalls/modifyTransactions'
import { setCallApi } from '../../redux/callApi'

export default function AllTransactions() {
    const apidata = useSelector(state => state.allUsersTransactions)
    const title = "Transaction List"
    const [apistate, setApiState] = useState([])
    {/* data table column name */ }
    const [apicol, setApiCol] = useState([])
    const [selectVal, setSelectval] = useState([])
    // pass status model render
    const [openModal, setOpenModal] = useState(true)
    {/* all data for view */ }
    const [selectVal_details, setSelectVal_details] = useState([])
    {/* see all details modal(view) */ }
    const [details_modal_show, set_details_modal_Show] = useState(false);
    const [rerendarApi, setRerendarApi] = useState(false)
    // open add data modal
    const [open_add_modal, setOpen_add_modal] = useState({ render: true, modal_open: false })
    // open email sender modal
    const [open_email_sender_modal, setOpen_email_sender_modal] = useState({ render: true, modal_open: false })
    const [email_sender_modal_data, setEmail_sender_modal_data] = useState('')
    // open update data modal
    const [open_update_modal, setOpen_update_modal] = useState({ render: true, modal_open: false })
    const [update_modal_data, setUpdate_modal_data] = useState('')

    const [search, setSearch] = useState('name');
    const [searchType, setSearchType] = useState('name');

    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setSearchType(e.target.value); // Prop to set the search type in the parent component
      };

    const brad = [
        {
            name: "home",
        },
        {
            name: title,
        }
    ]
    const columns = [
        {
            name: "User Id",
            selector: row => row.user_id,
            sortable: true
        },
        {
            name: "Type",
            selector: row => row.type,
            sortable: true
        },
        {
            name: "Name",
            selector: row => `${row.first_name} ${row.last_name}`,
            sortable: true
        },
        {
            name: "Updates",
            selector: row => row.manual_update,
            sortable: true
        },
        {
            name: "Phone",
            selector: row => row.phone,
            sortable: true
        },
        {
            name: "Amount",
            selector: row => row.amount,
            sortable: true
        },
        {
            name: "Date",
            cell: (row) => new Date(row.time_stamp).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })
        },
        {
            name: "Status",
            cell: (row) => <>
            <button onClick={() => handleShow(row)} 
                className={`btn p-0 px-1 ${row.status?.toLowerCase() == "completed" && "btn-primary"} 
                ${row.status?.toLowerCase() == "cancelled" && "btn-danger"} 
                ${row.status?.toLowerCase() == "inprogress" ? "btn-warning" : ""}  btn-sm`}  >
                    {row.status}
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
                <button onClick={() => setUpdateStoreBtn(row)} className=" btn btn-secondary btn-sm ms-1"  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                {/* <button onClick={() => delete_row(row)} className=" btn btn-info btn-sm ms-1"  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                </button> */}
                {row.status == "inprogress" && (
                <button onClick={() => cancelTransaction(row)} className=" btn btn-danger btn-sm ms-1"  >
                    <FontAwesomeIcon icon={faBan} />
                </button>
                )}
                </>,
        }

    ]

    const handleShow = (row) => {
        //status model e pass data 
        setOpenModal(openModal => !openModal)
        setSelectval(row)
    }


    {/* data receve from store */ }
    useEffect(() => {
        setApiState(apidata)
        setApiCol(columns)
        console.log("render from transactions")
    }, [rerendarApi])

    const setStoreBtn = () => {
        setOpen_add_modal({ render: !open_add_modal.render, modal_open: true })
    }
    const completeTransaction = (row) => {
        console.log(row)
        const success = "Transaction status changed to updated"
        const status = "completed"
        updateTransactionStatus(row, success, status, dispatch)
        
        // setOpen_email_sender_modal({ render: !open_email_sender_modal.render, modal_open: true })
        // setEmail_sender_modal_data(row)
    }

    const setUpdateStoreBtn = (row) => {
        setOpen_update_modal({ render: !open_update_modal.render, modal_open: true })
        setUpdate_modal_data(row)
    }

    const copyLink = () => {
        alert(46)
    }
    const cancelTransaction = (row) => {
        const success = "Transaction status changed to cancelled";
        const status = "cancelled"
        updateTransactionStatus(row, success, status, dispatch)
    }
    const rerender = (e) => {
        setRerendarApi(e)
    }

    return (
        <>
            {/* status modal component */}
            <Status_modal rerendar={(e) => rerender(e)} 
                row={selectVal} 
                openModal={openModal} 
            />
            {/* update data modal */}
            <Update_data_modal rerendar={(e) => rerender(e)} 
                select_data={update_modal_data} 
                open_update_data_modal={open_update_modal} 
            />
            {/* email sender modal */}
            <Email_sender_data_modal select_data={email_sender_modal_data} 
            open_update_data_modal={open_email_sender_modal} 
            />

            <div className="container-fluid" >
                <Breadcrumb title={title} brad={brad} />
                <Link to="#" ><button type="button" className="btn btn-outline-success active btn-sm ">All</button></Link>
                {/* <Link to="#" ><button type="button" className="btn btn-outline-primary btn-sm ms-1">Deposits</button></Link>
                <Link to="#" ><button type="button" className="btn btn-outline-warning btn-sm ms-1">Withdraws</button></Link>
                <Link to="#" ><button type="button" className="btn btn-outline-secondary btn-sm ms-1">Inprogress</button></Link>
                <Link to="#" ><button type="button" className="btn btn-outline-danger btn-sm ms-1">Cancelled</button></Link> */}
                <div className="row my-3">
                    <div className="col-12">
                        <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                            <div className="card-header d-flex justify-content-between border-bottom pb-1">
                                <h4>{title}</h4>
                                <select value={search} onChange={handleSearchChange}>
                                    <option value="name">Name</option>
                                    <option value="type">Type</option>
                                    <option value="transaction_id">Transaction_ID</option>
                                    <option value="amount">Amount</option>
                                    <option value="status">Status</option>
                                </select>
                                {/* <Link to="/add-invoice"><div className="btn btn-info btn-sm text-white">Add Invoice</div></Link> */}
                            </div>
                            <div className="card-body">
                                <DataTable_Component search={ searchType } title_btn={true} 
                                    title="payments" apidata={apidata} columns={apicol} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}