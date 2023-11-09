
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
import { faPenToSquare, faTrash, faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons'

const apidata = [];

export default function PaymentsAll() {

    const title = "Invoice List"
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
            name: "Brand",
            selector: row => row.brand,
            sortable: true
        },
        {
            name: "Invoice Id",
            selector: row => row.invoice_id,
            sortable: true
        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Amount",
            selector: row => row.amount,
            sortable: true
        },
        {
            name: "Date",
            selector: row => row.date,
            sortable: true
        },
        {
            name: "Status",
            cell: (row) => <><button onClick={() => handleShow(row)} className={`btn p-0 px-1 ${row.status.toLowerCase() == "complete" && "btn-primary"} ${row.status.toLowerCase() == "refunded" && "btn-danger"} ${row.status.toLowerCase() == "created" && "btn-success"}    ${row.status.toLowerCase() == "pending" ? "btn-warning" : ""}  btn-sm`}  >{row.status}</button></>,
        },
        {
            name: "action",
            cell: (row) => <>{row.status == "created" && (<><button onClick={() => copyLink()} className=" btn btn-success btn-sm"  ><FontAwesomeIcon icon={faCopy} /></button><button onClick={() => emailSender(row)} className=" btn btn-primary btn-sm ms-1"  ><FontAwesomeIcon icon={faEnvelope} /></button></>)}<button onClick={() => setUpdateStoreBtn(row)} className=" btn btn-info btn-sm ms-1"  ><FontAwesomeIcon icon={faPenToSquare} /></button><button onClick={() => delete_row(row)} className=" btn btn-danger btn-sm ms-1"  ><FontAwesomeIcon icon={faTrash} /></button></>,
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
        console.log("render from invoice")
    }, [rerendarApi])

    const setStoreBtn = () => {
        setOpen_add_modal({ render: !open_add_modal.render, modal_open: true })
    }
    const emailSender = (row) => {
        setOpen_email_sender_modal({ render: !open_email_sender_modal.render, modal_open: true })
        setEmail_sender_modal_data(row)
    }

    const setUpdateStoreBtn = (row) => {
        setOpen_update_modal({ render: !open_update_modal.render, modal_open: true })
        setUpdate_modal_data(row)
    }

    const copyLink = () => {
        alert(46)
    }
    const delete_row = (row) => {
        
        Swal.fire({
            icon: 'warning',
            title: 'You wont be able to revert this!',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            setRerendarApi(!rerendarApi)
            if (result.isConfirmed) {
                Swal.fire('Saved!. id:' + row.id, '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    const rerender = (e) => {
        setRerendarApi(e)
    }

    return (
        <>
            {/* status modal component */}
            <Status_modal rerendar={(e) => rerender(e)} row={selectVal} openModal={openModal} />
            {/* update data modal */}
            <Update_data_modal rerendar={(e) => rerender(e)} select_data={update_modal_data} open_update_data_modal={open_update_modal} />
            {/* email sender modal */}
            <Email_sender_data_modal select_data={email_sender_modal_data} open_update_data_modal={open_email_sender_modal} />

            <div className="container-fluid" >
                <Breadcrumb title={title} brad={brad} />
                <Link to="/stored-data" ><button type="button" className="btn btn-outline-success active btn-sm ">All</button></Link>
                <Link to="/invoice-link" ><button type="button" className="btn btn-outline-primary btn-sm ms-1">Invoice Link</button></Link>
                <div className="row my-3">
                    <div className="col-12">
                        <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                            <div className="card-header d-flex justify-content-between border-bottom pb-1">
                                <h4>{title}</h4>
                                <Link to="/add-invoice"><div className="btn btn-info btn-sm text-white">Add Invoice</div></Link>
                            </div>
                            <div className="card-body">
                                <DataTable_Component search="name" title_btn={true} title="payments" apidata={apistate} columns={apicol} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}