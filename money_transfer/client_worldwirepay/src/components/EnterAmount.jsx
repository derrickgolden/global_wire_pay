import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const EnterAmount = ({onChangeOption, onHandleTransationDetails, transationDetails, deposit}) =>{
    const { balance} = useSelector(state => state.userDetails)
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return(
        <div class="col-xl-8 col-lg-8 col-md-7">
                            <div class="table-area">
                                <form action="#">
                                    <div class="send-banance">
                                        <span class="mdr">How much you want to {
                                            deposit? "deposit" : "withdraw"
                                        }?</span>
                                        <div class="input-area">
                                            <input onChange={onHandleTransationDetails} required 
                                            class="xxlr" placeholder="400.00" type="number" name="amount"/>
                                            <select name="currency" value={transationDetails?.currency} 
                                                onChange={onHandleTransationDetails}
                                            >
                                                <option value="USD">USD</option>
                                            </select>
                                        </div>
                                        <p>Available Balance:<b>$ {balance}</b></p>
                                    </div>  
                                </form>
                            </div>
                            <div class="footer-area mt-40">
                                <Link onClick={onChangeOption} id="method" to="javascript:void(0)"  class="active">Previous Step</Link>
                                <Link onClick={onChangeOption} id="confirm" to="javascript:void(0)"  class="active">Next</Link>
                            </div>
        </div>
    )
}

export default EnterAmount