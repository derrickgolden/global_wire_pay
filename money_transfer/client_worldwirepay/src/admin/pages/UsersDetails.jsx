

import { useState, useEffect, useRef } from 'react'
import DataTable_Component from '../components/DataTable'
import Update_data_modal from '../components/UpdateDataModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faEnvelope, faCopy, faCheck, faBan, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from '../components/BreadCrumb'
import Status_modal from '../components/StatusModal'
import Add_data_modal from '../components/UpdateDataModal'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function UsersDetails() {

    const callApi = useSelector(state =>state.callApi)

    const title = "All Users Details"
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

    // users
    const [users, setUsersDetails] = useState([]);

    const filter_apistate = apistate.filter((val) => {
        return val.status !== "trash"
    })
   

    const brad = [
        {
            name: "home",
        },
        {
            name: "All Registered Users",
        }
    ]
    
    const columns = [
        {
            name: "User_id",
            selector: row => row.user_id,
            sortable: true
        },
        {
            name: "Names",
            selector: row => `${row.first_name} ${row.last_name}`,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Phone",
            selector: row => row.phone,
            sortable: true
        },
        {
            name: "Country",
            selector: row => row.country,
            sortable: true
        },
        {
            name: "Signup",
            selector: row => new Date(row.signup_date).toDateString(),
            sortable: true
        },
        {
            name: "Deposit",
            selector: row => row.total_deposit,
            sortable: true
        },
        {
            name: "Withdraw",
            selector: row => row.total_withdraw,
            sortable: true
        },
        {
            name: "Balance",
            selector: row => row.balance,
            sortable: true
        },
        {
            name: "action",
            cell: (row) => <>{
                <button onClick={() => handleUserBalanceChange(row)} className=" btn btn-primary btn-sm ms-1"  >
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </button>
                }
                </>,
        }
    
    ]
    
    const handleUserBalanceChange = (row) => {
        //status model e pass data
        console.log(row) 
        setOpenModal(openModal => !openModal)
        setSelectval(row)
    }

    {/* data receve from store */ }
    useEffect(() => {
        // call api and response data set " setApiData(your res.data) " and column setApiCol( columns )
        setApiState(users) 
        setApiCol(columns)
        
        console.log('render from users data')
    }, [rerendarApi, users])

    const rerender_status = (e) => {
        setRerendarApi(!rerendarApi)   
    }

    useEffect(() =>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/admin/dashboard/allusers',
            headers: { 
                'Content-Type': 'application/json'
            }
        };
    
        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setUsersDetails(response.data.details)
        })
        .catch((error) => {
            console.log(error.response);
            alert("Sorry, An error occurred while fetching users data")
        });
    }, [callApi]);
    
    return (
        <>
            {/* status modal component */}
            <Status_modal rerendar={(e) => rerender_status(e)} row={selectVal} openModal={openModal} /> 
            {/* add data modal */}
            {/* <Add_data_modal rerendar={(e) => rerender(e)} openAddDataModal={open_add_modal} /> */}
            {/* add data modal */}
            <Update_data_modal rerendar={(e) => rerender_update(e)} 
                select_data={update_modal_data} open_update_data_modal={open_update_modal}
                data_type = "usersDetails" 
            />

            <div className="container-fluid" >
                <Breadcrumb title={title} brad={brad} />

                <div className="row my-3">
                    <div className="col-12">
                        <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                            <div className="card-header d-flex justify-content-between border-bottom pb-1">
                                <h4>{title}</h4>
                                {/* <div className="btn btn-info btn-sm " onClick={setStoreBtn}>Add store data</div> */}
                            </div>
                            <div className="card-body">
                                {/* <div className="card-title text-center bg-warning py-2 rounded">All Data stored from the APK</div> */}

                                <DataTable_Component search="name" title_btn="All Users Details" title={title} apidata={filter_apistate} columns={apicol} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}