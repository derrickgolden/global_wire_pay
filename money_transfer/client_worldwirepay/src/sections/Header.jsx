import { logo, avator, bell, search} from "../assets/images";

const Header = (props) =>{
    // const [menu, setMenu] = useState(false)
    
    // const handlePrevDateClick = () =>{
    //     const date = store.getState().dates.mealsDate
    //     const prevDate = getDateDetails().prevDay(new Date(date))
    //     props.mealsDate( {mealsDate: prevDate, dateChange: true })
    // }

    return(
        <header class="header-section body-collapse">
        <div class="overlay w-full">
            <div class="container-fruid">
                <div class="row d-flex header-area">
                    <div class="navbar-area d-flex align-items-center justify-content-between">
                        <div class="sidebar-icon">
                            <a href="dashboard.html"><img src={logo} alt="logo"/></a>
                        </div>
                        <form action="#" class="flex-fill">
                            <div class="form-group d-flex align-items-center">
                                <img src={search} alt="icon"/>
                                <input type="text" placeholder="Type to search..."/>
                            </div>
                        </form>
                        <div class="dashboard-nav">
                            {/* <div class="single-item language-area">
                                <div class="language-btn">
                                    <img src="../assets/images/icon/lang.png" alt="icon"/>
                                </div>
                                <ul class="main-area language-content">
                                    <li>English</li>
                                    <li>Hindi</li>
                                    <li class="active">English (US)</li>
                                    <li>Japanese</li>
                                    <li>Kannada</li>
                                    <li>Lithuanian</li>
                                </ul>
                            </div> */}
                            <div class="single-item notifications-area">
                                <div class="notifications-btn">
                                    <img src={bell} class="bell-icon" alt="icon"/>
                                </div>
                                <div class="main-area notifications-content">
                                    <div class="head-area d-flex justify-content-between">
                                        <h5>Notifications</h5>
                                        <span class="mdr">4</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" class="d-flex">
                                                <div class="img-area">
                                                    <img src="../assets/images/user-1.png" class="max-un" alt="image"/>
                                                </div>
                                                <div class="text-area">
                                                    <p class="mdr">You received a payment of <b>$134.00</b> from <b>Anna
                                                            Green</b></p>
                                                    <p class="mdr time-area">09.39AM</p>
                                                </div>
                                            </a>
                                            <i class="fa-solid fa-caret-right"></i>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="d-flex">
                                                <div class="img-area">
                                                    <img src="../assets/images/user-2.png" class="max-un" alt="image"/>
                                                </div>
                                                <div class="text-area">
                                                    <p class="mdr"><b>James Deed</b> requested a payment of
                                                        <b>£890.00</b>
                                                    </p>
                                                    <p class="mdr time-area">08.09AM</p>
                                                </div>
                                            </a>
                                            <i class="fa-solid fa-caret-right"></i>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="d-flex">
                                                <div class="img-area">
                                                    <img src="../assets/images/master-card.png" class="max-un" alt="image"/>
                                                </div>
                                                <div class="text-area">
                                                    <p class="mdr">Your new payment method has beed added successfully
                                                    </p>
                                                    <p class="mdr time-area">09.39AM</p>
                                                </div>
                                            </a>
                                            <i class="fa-solid fa-caret-right"></i>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" class="d-flex">
                                                <div class="img-area">
                                                    <img src="../assets/images/user-3.png" class="max-un" alt="image"/>
                                                </div>
                                                <div class="text-area">
                                                    <p class="mdr">You received a payment of <b>$250.00</b> from Goerge
                                                        Michael</p>
                                                    <p class="mdr time-area">Yesterday</p>
                                                </div>
                                            </a>
                                            <i class="fa-solid fa-caret-right"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="single-item user-area">
                                <div class="profile-area d-flex align-items-center">
                                    <span class="user-profile">
                                        <img src={avator} alt="User"/>
                                    </span>
                                    <i class="fa-solid fa-sort-down"></i>
                                </div>
                                <div class="main-area user-content">
                                    <div class="head-area d-flex align-items-center">
                                        <div class="profile-img">
                                            <img src="../assets/images/avatar-2.png" alt="User"/>
                                        </div>
                                        <div class="profile-head">
                                            <a href="javascript:void(0)">
                                                <h5>Kevin Martin</h5>
                                            </a>
                                            <p class="wallet-id">Wallet ID: 6264849965</p>
                                        </div>
                                    </div>
                                    <ul>
                                        <li class="border-area">
                                            <a href="account.html"><i class="fas fa-cog"></i>Settings</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)"><i class="fas fa-sign-out"></i>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="sidebar-wrapper">
                        <div class="close-btn">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div class="sidebar-logo">
                            <a href="dashboard.html"><img src={logo} alt="logo"/></a>
                        </div>
                        <ul>
                            <li class="active">
                                <a href="dashboard.html">
                                    <img src="assets/images/icon/dashboard.png" alt="Dashboard"/> <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="transactions.html">
                                    <img src="assets/images/icon/transactions.png" alt="Transactions"/> <span>Transactions</span>
                                </a>
                            </li>
                            <li>
                                <a href="pay.html">
                                    <img src="assets/images/icon/pay.png" alt="Pay"/> <span>Pay</span>
                                </a>
                            </li>
                            <li>
                                <a href="receive-step-1.html">
                                    <img src="assets/images/icon/receive.png" alt="Receive"/> <span>Receive</span>
                                </a>
                            </li>
                            <li>
                                <a href="money-exchange.html">
                                    <img src="assets/images/icon/exchange.png" alt="Exchange"/> <span>Exchange</span>
                                </a>
                            </li>
                            <li>
                                <a href="recipients.html">
                                    <img src="assets/images/icon/recipients.png" alt="Recipients"/> <span>Recipients</span>
                                </a>
                            </li>
                            <li>
                                <a href="crypto.html">
                                    <img src="assets/images/icon/crypto.png" alt="Crypto"/> <span>Crypto</span>
                                </a>
                            </li>
                            <li>
                                <a href="deposit-money.html">
                                    <img src="assets/images/icon/deposit.png" alt="Deposit"/> <span>Deposit Money</span>
                                </a>
                            </li>
                            <li>
                                <a href="withdraw-money-step-1.html">
                                    <img src="assets/images/icon/withdraw.png" alt="Withdraw"/> <span>Withdraw Money</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="bottom-item">
                            <li>
                                <a href="account.html">
                                    <img src="assets/images/icon/account.png" alt="Account"/> <span>Account</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="assets/images/icon/support.png" alt="Support"/> <span>Support</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="assets/images/icon/quit.png" alt="Quit"/> <span>Quit</span>
                                </a>
                            </li>
                        </ul>
                        <div class="pt-120">
                            <div class="invite-now">
                                <div class="img-area">
                                    <img src="assets/images/invite-now-illus.png" alt="Image"/>
                                </div>
                                <p>Invite your friend and get $25</p>
                                <a href="javascript:void(0)" class="cmn-btn">Invite Now</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;