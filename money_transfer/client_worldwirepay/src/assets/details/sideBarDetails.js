import { dashboard, deposit, exchange, pay, receive, recipients, transactions, withdraw } from "../images"

const sideBarDetails = [
    {to: "http://localhost:5173/user/dashboard", alt: "Dashboard", img: dashboard, text: "Dashboard" },
    {to: "http://localhost:5173/user/dashboard/transfers", alt: "Transactions", img: transactions, text: "Transactions" },
    {to: "http://localhost:5173/user/dashboard/transfer-money", alt: "Pay", img: pay, text: "Transfer Money" },
    {to: "http://localhost:5173/user/dashboard", alt: "Receive", img: receive, text: "Receive" },
    {to: "http://localhost:5173/user/dashboard", alt: "Exchange", img: exchange, text: "Exchange" },
    {to: "http://localhost:5173/user/dashboard", alt: "Recipients", img: recipients, text: "Recipients" },
    {to: "http://localhost:5173/user/dashboard/deposit-money", alt: "Deposit", img: deposit, text: "Deposit" },
    {to: "http://localhost:5173/user/dashboard/withdraw-money", alt: "Withdraw", img: withdraw, text: "Withdraw" },

]

export {
    sideBarDetails
}