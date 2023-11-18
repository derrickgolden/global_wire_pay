const columns = [
    {
        name: "Amount",
        selector: row => row.amount,
        sortable: true
    },
    {
        name: "Sender Email",
        selector: row => row.sender_number,
        sortable: true
    },
    {
        name: "Receiver Email",
        selector: row => row.sender_number,
        sortable: true
    },
    {
        name: "Transaction_id",
        selector: row => row.transaction_id,
        sortable: true
    },
    {
        name: "Main Balence",
        selector: row => row.main_balence,
        sortable: true
    },
    {
        name: "Date",
        selector: row => row.date,
        sortable: true
    },

    {
        name: "Status",
        cell: (row) => <>
        <button onClick={() => handleShow(row)} 
            className={`btn py-0 px-1 ${row.status.toLowerCase() == "active" && "btn-success"}    
            ${row.status.toLowerCase() == "pending" ? "btn-primary" : ""}  btn-sm`}  >{row.status}
        </button></>,
    },
    {
        name: "action",
        cell: (row) => <>
        <button onClick={() => setUpdateStoreBtn(row)} 
            className=" btn btn-primary btn-sm"  >view</button>
        <button onClick={() => delete_row(row)} className=" btn btn-danger btn-sm ms-2"  >
            <FontAwesomeIcon icon={faTrash} />
        </button></>,
    }

]

export {
    columns
}