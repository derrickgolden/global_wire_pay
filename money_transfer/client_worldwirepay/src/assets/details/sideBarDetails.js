import { client_baseurl } from "../../baseUrl"
import { dashboard, deposit, exchange, pay, receive, recipients, transactions, withdraw } from "../images"

const sideBarDetails = [
    {to: `${client_baseurl}/user/dashboard`, alt: "Dashboard", img: dashboard, text: "Dashboard" },
    {to: `${client_baseurl}/user/dashboard/transfers`, alt: "Transactions", img: transactions, text: "Transactions" },
    {to: `${client_baseurl}/user/dashboard/transfer-money`, alt: "Pay", img: pay, text: "Transfer Money" },
    {to: `${client_baseurl}/user/dashboard`, alt: "Receive", img: receive, text: "Receive" },
    {to: `${client_baseurl}/user/dashboard`, alt: "Exchange", img: exchange, text: "Exchange" },
    {to: `${client_baseurl}/user/dashboard`, alt: "Recipients", img: recipients, text: "Recipients" },
    {to: `${client_baseurl}/user/dashboard/deposit-money`, alt: "Deposit", img: deposit, text: "Deposit" },
    {to: `${client_baseurl}/user/dashboard/withdraw-money`, alt: "Withdraw", img: withdraw, text: "Withdraw" },

]

export {
    sideBarDetails
}