
const transactions = [
    {text:"Amount", type:"text", id:"amount", placeholder:"Amount",},
    {text:"Fees", type:"number", id:"fees", placeholder:"Fees",},
    {text:"Balance", type:"number", id:"balance", placeholder:"Balance",},
]
const transfers = [
    {text:"Amount", type:"text", id:"amount", placeholder:"Amount",},
    {text:"Sender Fees", type:"number", id:"sender_fees", placeholder:"Fees",},
    {text:"Receiver Fees", type:"number", id:"receiver_fees", placeholder:"Fees",},
    {text:"Sender Balance", type:"number", id:"sender_balance", placeholder:"",},
    {text:"Receiver Balance", type:"number", id:"receiver_balance", placeholder:"",},
]

export {
    transactions,
    transfers,
}
{/* <div  className=" mt-3">
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
</div> */}