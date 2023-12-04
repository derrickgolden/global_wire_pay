import Swal from 'sweetalert2';

const swalFeedbackPopup=(transationDetails, navigate)=>{
    Swal.fire({
        icon: 'success',
        title: `${transationDetails.type} successful.`,
        html: `
            <p>You have successfully transacted: <br/>
                ${transationDetails.amount} ${transationDetails.currency} 
            </p>`,
        showCloseButton: true,
        confirmButtonText: 'Back to dashboard',
      }).then((result) => {
        
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            navigate("/user/dashboard")
            // window.location.reload();
        } 
      })
}

export {
    swalFeedbackPopup,
}