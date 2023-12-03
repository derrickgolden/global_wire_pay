import '../../assets/css/layouts/layouts.css';
import 'boxicons';
import Swal from 'sweetalert2'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft, faChevronDown, faListUl, faBuildingColumns, faIndent, faFileInvoice, faFileCode,faUsersGear,
    faStore, faGear, faMobileScreen, faGlobe, faWrench, faLifeRing, faGaugeHigh,faEye,faPenToSquare, faUsers,
    faEnvelope, faBell, faRing, faKey, faPuzzlePiece, faUniversalAccess, faTree,faMessage, faListCheck, faCircleInfo, faPeopleGroup, faVideo,faBars,faX
} from '@fortawesome/free-solid-svg-icons'
import { MdDashboard } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

import { admin } from '../../assets/images';

export default function AdminHeader() {

    const [plus, setPlus] = useState(true)
    const [plus2, setPlus2] = useState(true)
    const [plus3, setPlus3] = useState(true)
    const [plus4, setPlus4] = useState(true)
    const [plus5, setPlus5] = useState(true)
    const [plus6, setPlus6] = useState(true)
    const pathname = window.location.pathname
    // const [pathName, setPathName] = useState('/')
    const [render, setRender] = useState(true)
    const [headerToggle, setHeaderToggle] = useState(false)
    const [sidebar, setSidebar] = useState('')
    const [headerNavManu, setheaderNavManu] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        if (pathname == '/login' || pathname == '/forgot-password' || pathname == '/register') {
            setSidebar(false)
        } else {
            setSidebar(true)
        }
    }, [pathname])
    const headerTogglehandle = () => {
        setHeaderToggle(!headerToggle)
        setheaderNavManu(!headerNavManu)
    }
    var body_pd = document.getElementById('body-pd')
    useEffect(() => {
        // window.innerWidth >= 768 && (headerToggle ? body_pd.classList.add('body-pd') : body_pd.classList.remove('body-pd'))
        if (document.getElementById('header') !== null) {
            headerToggle && document.getElementById('header').classList.add('body-pd')
            headerToggle !== true && document.getElementById('header').classList.remove('body-pd')
        }
    }, [headerToggle])

    const updateActive = () => {
        setRender(!render)
    }
    const logoutHandle=()=>{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure you want to log out!',
            showCancelButton: true,
            confirmButtonText: 'Yes',
          }).then((result) => {
            
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                sessionStorage.clear("adminToken");
                navigate("/")
                window.location.reload();
      
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    return (
        <>
        <div className={sidebar == false && "d-none"}>

            <header className="header mb-4 dropdown body-pd" id="header">
                <div onClick={headerTogglehandle} className="header_toggle" id="header-toggle">
                    {headerNavManu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
                </div>
                <div className="d-flex align-items-center dropdown-toggle" data-bs-toggle="dropdown">
                <span className="header_img"> <img src={admin} alt="admin icon" /> </span> 
                <span className="ms-1">Mobashir</span> </div>

                <ul  className="dropdown-menu dropdown-menu-end" style={{width: 'auto',padding: '0, 2rem'}} aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="/profileSetting">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/general-setting">Setting</Link></li>
                    <li className="dropdown-item" onClick={logoutHandle}>Log Out</li>
                </ul>
            </header>

            <div className="manubar">
                <div className={`l-navbar ${headerToggle ? "show" : ""}`} id="nav-bar">
                    <nav className="nav">
                        <div> <a href="#" className="nav_logo"> <RiAdminFill /><span className="nav_logo-name">Admin Panel</span> </a>
                            <div className="nav_list">
                                <Link onClick={updateActive} to="/admin/dashboard" className={`nav_link ${pathname == "/" && 'active'}`}>
                                    <MdDashboard />
                                    <span className="nav_name">Dashboard</span>
                                </Link>
                                <Link to="/admin/dashboard/transfers" onClick={updateActive} className={`nav_link ${pathname == "/payment" && 'active'}`}>
                                    <FontAwesomeIcon icon={faListUl} />
                                    <span className="nav_name">Transfers</span>
                                </Link>
                                <Link onClick={updateActive} to="/admin/dashboard/users" className={`nav_link ${pathname == "/stored-data" && 'active'}`}>
                                    <FontAwesomeIcon icon={faUsers} />
                                    <span className="nav_name">Users</span>
                                </Link>
                                <Link onClick={updateActive} to="#" className={`nav_link ${pathname == "/bank-payment" && 'active'}`}>
                                    <FontAwesomeIcon icon={faBuildingColumns} />
                                    <span className="nav_name">Banks Payments</span>
                                </Link>
                                <Link onClick={updateActive} to="#" className={`nav_link ${pathname == "/manage-invoice" && 'active'}`}>
                                    <FontAwesomeIcon icon={faFileInvoice} />
                                    <span className="nav_name">Manage Invoice</span>
                                </Link>
                                <Link onClick={updateActive} to="#" className={`nav_link ${pathname == "/manage-brand" && 'active'}`}>
                                    <FontAwesomeIcon icon={faStore} />
                                    <span className="nav_name">Brand Setting</span>
                                </Link>
                                {/* <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <p className="accordion-header" id="headingOne">
                                            <Link onClick={updateActive} to="#" type="button" onClick={() => setPlus(!plus)} data-bs-toggle="collapse" data-bs-target="#paymentSystem" aria-expanded="true" aria-controls="paymentSystem" className={`nav_link `}>
                                                <FontAwesomeIcon icon={faGear} />
                                                <span className="nav_name ">payment Setting <b>{plus ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronDown} />}</b></span>
                                            </Link>
                                        </p>
                                        <div id="paymentSystem" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Link onClick={updateActive} to="/mobailBank/bKash" className={`nav_link ${pathname == "/mobailBank/bKash" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faMobileScreen} />
                                                    <span className="nav_name">Mobail Bank</span>
                                                </Link>
                                                <Link onClick={updateActive} to="/manage-bankTransfer" className={`nav_link ${pathname == "/manage-bankTransfer" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faBuildingColumns} />
                                                    <span className="nav_name">Bank Transfar</span>
                                                </Link>
                                                <Link onClick={updateActive} to="/international-payment/paypal" className={`nav_link ${pathname == "/international-payment/paypal" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faGlobe} />
                                                    <span className="nav_name">International</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <p className="accordion-header" id="headingOne">
                                            <Link onClick={updateActive} to="#" type="button" onClick={() => setPlus2(!plus2)} data-bs-toggle="collapse" data-bs-target="#systemSetting" aria-expanded="true" aria-controls="systemSetting" className={`nav_link `}>
                                                <FontAwesomeIcon icon={faWrench} />
                                                <span className="nav_name ">System Setting <b>{plus2 ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronDown} />}</b></span>
                                            </Link>
                                        </p>
                                        <div id="systemSetting" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Link onClick={updateActive} to="/system-setting/app-setting" className={`nav_link ${pathname == "/system-setting/app-setting" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faMobileScreen} />
                                                    <span className="nav_name">Android App</span>
                                                </Link>
                                              
                                                <Link onClick={updateActive} to="/system-setting/templete" className={`nav_link ${pathname == "/system-setting/templete" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faGaugeHigh} />
                                                    <span className="nav_name">Templete</span>
                                                </Link>
                                                <Link onClick={updateActive} to="/system-setting/custom-css" className={`nav_link ${pathname == "/system-setting/custom-css" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faFileCode} />
                                                    <span className="nav_name">Custim CSS</span>
                                                </Link>
                                                <Link onClick={updateActive} to="/system-setting/mail" className={`nav_link ${pathname == "/system-setting/mail" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                    <span className="nav_name">Mail</span>
                                                </Link>
                                                <div className="accordion" id="accordionExample">
                                                    <div className="accordion-item">
                                                        <p className="accordion-header" id="headingOne">
                                                            <Link onClick={updateActive} to="#" type="button" onClick={() => setPlus3(!plus3)} data-bs-toggle="collapse" data-bs-target="#notification" aria-expanded="true" aria-controls="notification" className={`nav_link `}>
                                                                <FontAwesomeIcon icon={faBell} />
                                                                <span className="nav_name ">Notifications <b>{plus3 ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronDown} />}</b></span>
                                                            </Link>
                                                        </p>
                                                        <div id="notification" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <Link onClick={updateActive} to="/notification/onSignal" className={`nav_link ${pathname == "/notification/onSignal" && 'active'}`}>
                                                                    <FontAwesomeIcon icon={faRing} />
                                                                    <span className="nav_name">One Signal</span>
                                                                </Link>
                                                                <Link onClick={updateActive} to="/notification/email" className={`nav_link ${pathname == "/notification/email" && 'active'}`}>
                                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                                    <span className="nav_name">Email</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <Link onClick={updateActive} to="/system-setting/active-license" className={`nav_link ${pathname == "/system-setting/active-license" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faKey} />
                                                    <span className="nav_name">Active license</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <p className="accordion-header" id="headingOne">
                                            <Link onClick={updateActive} to="#" type="button" onClick={() => setPlus4(!plus4)} data-bs-toggle="collapse" data-bs-target="#addons" aria-expanded="true" aria-controls="addons" className={`nav_link`}>
                                                <FontAwesomeIcon icon={faPuzzlePiece} />
                                                <span className="nav_name ">Addons <b>{plus4 ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronDown} />}</b></span>
                                            </Link>
                                        </p>
                                        <div id="addons" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Link onClick={updateActive} to="/sms-transaction" className={`nav_link ${pathname == "/sms-transaction" && 'active'}`}>
                                                <FontAwesomeIcon icon={faMessage} />
                                                    <span className="nav_name">Sms Transaction</span>
                                                </Link>
                                                <Link onClick={updateActive} to="/sms-setting/bulksmsbd" className={`nav_link ${pathname == "/sms-setting/bulksmsbd" && 'active'}`}>
                                                <FontAwesomeIcon icon={faMessage} />
                                                    <span className="nav_name">Sms List</span>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <p className="accordion-header" id="headingOne">
                                            <Link onClick={updateActive} to="#" type="button" onClick={() => setPlus6(!plus6)} data-bs-toggle="collapse" data-bs-target="#rollManagement" aria-expanded="true" aria-controls="paymentSystem" className={`nav_link `}>
                                            <FontAwesomeIcon icon={faUsersGear} />
                                                <span className="nav_name ">Role Management <b>{plus6 ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronDown} />}</b></span>
                                            </Link>
                                        </p>
                                        <div id="rollManagement" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Link onClick={updateActive} to="/role-user" className={`nav_link ${pathname == "/role-user" && 'active'}`}>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                    <span className="nav_name">Role Create</span>
                                                </Link>
                                                <Link onClick={updateActive} to="/role-access" className={`nav_link ${pathname == "/role-access" && 'active'}`}>
                                                <FontAwesomeIcon icon={faEye} />
                                                    <span className="nav_name">Role Access</span>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link onClick={updateActive} to="/theme-market" className={`nav_link ${pathname == "/theme-market" && 'active'}`}>
                                    <FontAwesomeIcon icon={faStore} />
                                    <span className="nav_name">Theme Market</span>
                                </Link> */}
                                <Link onClick={updateActive} to="#" className={`nav_link ${pathname == "/change-password" && 'active'}`}>
                                    <FontAwesomeIcon icon={faGear} />
                                    <span className="nav_name">Change Password</span>
                                </Link>
                                {/* <Link onClick={updateActive} to="/activities" className={`nav_link ${pathname == "/activities" && 'active'}`}>
                                    <FontAwesomeIcon icon={faListCheck} />
                                    <span className="nav_name">Activity Logs</span>
                                </Link> */}
                                {/* <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <p className="accordion-header" id="headingOne">
                                            <Link onClick={updateActive} to="#" type="button" onClick={() => setPlus5(!plus5)} data-bs-toggle="collapse" data-bs-target="#help" aria-expanded="true" aria-controls="help" className={`nav_link `}>
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                                <span className="nav_name ">Help <b>{plus5 ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronDown} />}</b></span>
                                            </Link>
                                        </p>
                                        <div id="help" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Link onClick={updateActive} to="/general-setting" className={`nav_link `}>
                                                    <FontAwesomeIcon icon={faGear} />
                                                    <span className="nav_name">General Setting</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <Link onClick={logoutHandle} to="#" className={`nav_link `}>
                                    <FontAwesomeIcon icon={faFileInvoice} />
                                    <span className="nav_name">Logout</span>
                                </Link>
                            </div>
                        </div> 
                    </nav>
                </div>
            </div>

        </div>
        <Outlet />
        </>
    )
}
