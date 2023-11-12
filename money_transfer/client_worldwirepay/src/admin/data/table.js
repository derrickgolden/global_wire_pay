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
        selector: row => row.name,
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
        name: "Amount",
        selector: row => row.amount,
        sortable: true
    },
    {
        name: "Date",
        cell: (row) => <ul>
            
            <li>
                {new Date(row.time_stamp).toLocaleString()}
            </li>
        </ul>,
        sortable: true
    },
    {
        name: "Status",
        cell: (row) => <><button onClick={() => handleShow(row)} className={`btn p-0 px-1 ${row.status?.toLowerCase() == "complete" && "btn-primary"} ${row.status?.toLowerCase() == "refunded" && "btn-danger"} ${row.status?.toLowerCase() == "created" && "btn-success"}    ${row.status?.toLowerCase() == "pending" ? "btn-warning" : ""}  btn-sm`}  >{row.status}</button></>,
    },
    {
        name: "action",
        cell: (row) => <>{
            row.status == "inprogress" && (
            <>
            <button onClick={() => emailSender(row)} className=" btn btn-primary btn-sm ms-1"  >
                <FontAwesomeIcon icon={faCheck} />
            </button>
            </>)
            }
            <button onClick={() => setUpdateStoreBtn(row)} className=" btn btn-info btn-sm ms-1"  >
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            {row.status == "inprogress" && (
            <button onClick={() => delete_row(row)} className=" btn btn-danger btn-sm ms-1"  >
                <FontAwesomeIcon icon={faBan} />
            </button>
            )}
            </>,
    }

]

export {
    columns,
}