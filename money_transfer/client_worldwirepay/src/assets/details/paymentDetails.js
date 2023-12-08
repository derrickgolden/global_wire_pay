import { advcash, banktransfer, payoneer, revoult, webmoney, wechat } from "../images";

const worldWirePaymentDetails = {
    payoneer:{
        send_to: "isambixx94@gmail.com",
        name: "World Wire Pay",
        method:"payoneer",
        id:"payoneer",
        value: "payoneer",
        img: payoneer
    },
    banktransfer:{
        send_to: "isambixx94@gmail.com",
        name: "World Wire Pay",
        method:"banktransfer",
        id:"banktransfer",
        value: "banktransfer",
        img: banktransfer,
    },
    revolut:{
        send_to: "isambixx94@gmail.com",
        name: "World Wire Pay",
        method:"revolut",
        id:"revolut",
        value: "revolut",
        img: revoult,
    },
    advcash:{
        send_to: "isambixx94@gmail.com",
        name: "World Wire Pay",
        method:"advcash",
        id:"advcash",
        value: "advcash",
        img: advcash
    },
    webmoney:{
        send_to: "isambixx94@gmail.com",
        name: "World Wire Pay",
        method:"webmoney",
        id:"webmoney",
        value: "webmoney",
        img: webmoney
    },
    wechat:{
        send_to: "+254703966922",
        name: "World Wire Pay",
        method:"wechat",
        id:"wechat",
        value: "wechat",
        img: wechat
    }
}

const collectUserDetails = {
            
    payoneer:[
        {label: "Email or Payoneer ID", type: "text", id:"email_or_id", placeholder: "example@gmail.com"}, 
        {label: "Full names", type: "text", id:"full_names", placeholder: "John Doe Yen"}
    ],
    banktransfer:[
        {label: "Account number", type: "text", id:"acc_no", placeholder: "012389736494"},
        { label: "Bank name", type: "text", id:"bank_name", placeholder: "Sample Bank" },
        { label: "Routing number", type: "text", id:"routing_no", placeholder: "23456" },
        { label: "Swift code/ BIC", type: "text", id:"swift_code", placeholder: "231" },
    ],
    revolut:[
        {label: "Revolut ID or Phone Number", type: "text", id:"email_or_id", placeholder: "23843749348"}, 
        {label: "Full names", type: "text", id:"full_names", placeholder: "John Doe Yen"}
    ],
    advcash:[
        {label: "Email or Wallet ID", type: "text", id:"email_or_id", placeholder: "example@gmail.com"}, 
        {label: "Full names", type: "text", id:"full_names", placeholder: "John Doe Yen"}
    ],
    webmoney:[
        {label: "Purse Number or WMID", type: "text", id:"email_or_id", placeholder: "2833273664"}, 
        {label: "Full names", type: "text", id:"full_names", placeholder: "John Doe Yen"}
    ],
    wechat:[
        {label: "Phone Number", type: "text", id:"email_or_id", placeholder: "+2833273664"}, 
        {label: "Full names", type: "text", id:"full_names", placeholder: "John Doe Yen"}
    ]
}

export {
    worldWirePaymentDetails, collectUserDetails
};

