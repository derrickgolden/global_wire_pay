import { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { getUserCardDetails } from '../apiCalls/getUserCards';
export default function Card_Details_modal({ select_row_data, open_card_details_modal,rerendar,status_id }) {

    // modal_status_data
    const [status_modal_data, setModal_status_data] = useState([])
    // open modal in status
    const [status_modal_show, set_status_modal_Show] = useState(false);
    // rendering
    const [ren, setRen] = useState("false")

    useEffect(() =>{
        set_status_modal_Show(open_card_details_modal.modal_open)
    }, [open_card_details_modal]);
    useEffect(() =>{
        const fetchData = async () => {
            try {
                const res = await getUserCardDetails(select_row_data, setModal_status_data);
                console.log("res", status_modal_data)
            } catch (error) {
                // Handle error, e.g., log or display an error message
            }
        };
    
        fetchData();
    },[select_row_data])

    // close modal
    const handleClose = () => {
        set_status_modal_Show(false);
    }


    return (
        <>
            <Modal show={status_modal_show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{select_row_data.method} Card Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {status_modal_data.map((card, i) =>{
                        if(card.card_name === select_row_data.method){
                            return(
                                <div key ={i} className="table-responsive my-3">
            <table className="table align-middle border table-striped table-hover">
              <thead>
                <tr>
                  <th>Card entry</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>

                {Object.entries(card).map((data, i) => {
                  return (<tr key={i}>
                    <td>{data[0]}</td>
                    <td>{data[1]}</td>
                  </tr>)
                })}

              </tbody>
            </table>
          </div>
                            )
                        }
                    })}
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}