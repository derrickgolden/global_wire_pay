const worldWirePaymentDetails = {
    mpesa:{
        send_to: "+254771445702",
        name: "World Wire Pay"
    },
    paypal:{
        send_to: "goldenderrick95@gmail.com",
        name: "World Wire Pay"
    },
    visa:{
        send_to: "289137847748",
        name: "World Wire Pay"
    },
    paylio:{
        send_to: "sjdhk268389",
        name: "World Wire Pay"
    },
    blockchain:{
        send_to: "cypto253767",
        name: "World Wire Pay"
    }
}

const userCardDetails = {
    visa:{
        user_id: "",
        payment_method: "Visa",
        card_account_no: "",
        card_bank_name: "",
        card_routing_number: "",
        card_swift_code: "",
        details: [
            {label: "Account number", type: "text", id:"card_account_no", placeholder: "012389736494"},
            { label: "Bank name", type: "text", id:"card_bank_name", placeholder: "Sample Bank" },
            { label: "Routing number", type: "text", id:"card_routing_number", placeholder: "23456" },
            { label: "Swift code", type: "text", id:"card_swift_code", placeholder: "231" },
        ] 
      },
     
                                                
    mpesa:{
        user_id: "",
        payment_method: "Mpesa",
        mpesa_phone_number: "",
        mpesa_name: "",
        details: [
            {label: "Phone number", type: "text", id:"mpesa_phone_number", placeholder: "+2547285633"},
            { label: "Mpesa names", type: "text", id:"mpesa_name", placeholder: "Jonh Don" },
        ] 
      },
    paylio:{
        user_id: "",
        payment_method: "Paylio",
        paylio_account: "",  
        details: [
            {label: "Phone number", type: "text", id:"paylio_account", placeholder: "YourPaylioAccount12345"},
        ] 
      },
    paypal:{
        user_id: "",
        payment_method: "Paypal",
        paypal_email: "",
        details: [
            {label: "Enail", type: "text", id:"paypal_email", placeholder: "yourpaypalemail@gmail.com"},
        ] 
      },
    blockchain:{
        user_id: "",
        payment_method: "Blockchain",
        blockchain_address: "",
        details: [
            {label: "Address", type: "text", id:"blockchain_address", placeholder: "YourBlockchainAddress12345"},
        ] 
    }
}

export {
    worldWirePaymentDetails, userCardDetails
};

