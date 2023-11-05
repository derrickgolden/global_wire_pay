import { Link } from "react-router-dom"

const EnterAmount = ({onChangeOption}) =>{
    return(
        <div class="col-xl-8 col-lg-8 col-md-7">
                            <div class="table-area">
                                <form action="#">
                                    <div class="send-banance">
                                        <span class="mdr">How much you want to add?</span>
                                        <div class="input-area">
                                            <input class="xxlr" placeholder="400.00" type="number"/>
                                            <select>
                                                <option value="1">USD</option>
                                                <option value="2">USD</option>
                                                <option value="3">USD</option>
                                            </select>
                                        </div>
                                        <p>Available Balance<b>$30,700.00</b></p>
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