
function generateCompleteTransactionMsg(first_name, amount, type, transaction_id){

    const message = `
   
   <div class="container">
           <p>Dear ${first_name},</p>
   
           <p>We hope this message finds you well.</p>
   
           <p>We writing to inform you that the ${type} of amount ${amount} USD, transaction id ${transaction_id} has been successfully completed. Your transaction has been processed and confirmed, reflecting the successful transfer of funds.</p>
   
           <p>We take great pride in ensuring a seamless and secure payment experience for our valued clients, and your satisfaction is our top priority.</p>
   
           <p>If you have any further queries or need additional assistance, please feel free to reach out to our dedicated support team at support@worldwirepay.com</p>
   
           <p>Thank you for choosing our services. We appreciate your trust and look forward to continuing to serve your financial needs in the future.</p>
   
           <p>Best regards,<br>
           Customer Support<br>
           World Wire Pay<br>
           <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
       </div>`

    return wrapHtmlCss(message);
}

function generateCancelledTransactionMsg(first_name, amount, type, transaction_id){
    const message=`
    
    <div class="container">
        <p>Dear ${first_name},</p>
   
        <p>We hope this message finds you well.</p>
        
        <p>I regret to inform you that the recent ${type} transaction initiated for ${amount} USD, transaction id ${transaction_id} has been canceled. Our team has cancelled the request, and the funds will not be deducted from your account.<p/>
    
        <p>If you have any questions or concerns regarding the cancellation or if you require further assistance, please do not hesitate to contact our support team at support@worldwirepay.com. We are here to assist you and address any inquiries you may have.</p>
    
        <p>We apologize for any inconvenience this cancellation may have caused and appreciate your understanding.</p>
    
        <p>Thank you for choosing our services.</p>
    
        <p>Best regards,<br>
        Customer Support<br>
        World Wire Pay<br>
        <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
    </div>`

    return wrapHtmlCss(message)
} 

function generateWithdrawalProgressMsg(firstName, lastName, amount) {
    var clientName = `${firstName} ${lastName}`;

    var message = `
        <div class="container">
            <h3>Withdrawal Processing: Pending Confirmation</h3>
    
            <p>Dear ${clientName},</p>
    
            <p>I trust this message finds you well.</p>
    
            <p>We wish to inform you that the withdrawal request from your account for amount ${amount} USD is currently in progress and awaiting confirmation. Our team is actively engaged in facilitating this transaction and ensuring its prompt and accurate processing.</p>
    
            <p>Rest assured, we are closely monitoring the withdrawal process and will promptly notify you of any updates or confirmations as they become available. Your trust and satisfaction with our services are our top priorities, and we're dedicated to ensuring a smooth and secure experience for you.</p>
    
            <p>Should you have any inquiries or require further assistance, our support team is available to address your concerns at support@worldwirepay.com.</p>
    
            <p>We appreciate your understanding and cooperation throughout this process. Thank you for choosing our services.</p>
    
            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div>
    `;

    return wrapHtmlCss(message);
}

function generateNonuserMsg(recipientNames, senderNames, claimUrl, amount) {
    return wrapHtmlCss( `


<div class="container">
<p>Hello ${recipientNames}</p>

<p>We hope this message finds you well.</p>

<p>Great news! ${senderNames} has sent you ${amount} USD through our platform. To claim and receive the funds, all you need to do is complete a quick registration. It's fast, easy, and secure!</p>

<a class="button" href="${claimUrl}" style="text-decoration: none; color: #ffffff;">Claim Now</a>

<p>By registering, you not only ensure a smooth transfer process for this payment but also gain access to a range of features and benefits within our platform.</p>

<p><strong>Why Register?</strong></p>
    <ul>
        <li>Seamless money transfers</li>
        <li>Easy tracking of your transaction history</li>
        <li>Secure account management</li>
    </ul>

    <p><strong>How to Register:</strong></p>
    <ol>
        <li>Click on the <a href="${claimUrl}" style="text-decoration: none; color: #3498db;">Claim Now</a> button in this email.</li>
        <li>Follow the simple registration steps.</li>
        <li>Verify your account.</li>
    </ol>

    <p>And that's it! Once you've completed these steps, you can access your funds and explore everything our platform has to offer.</p>

    <p>If you have any questions or need assistance during the registration process, our support team is here to help.</p>

    <p>Thank you for choosing World Wire Pay for your money transfers. We look forward to welcoming you as a valued member of our community!</p>

    <p>Best regards,<br>
    Customer Support<br>
    World Wire Pay<br>
    <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>

</div>

    `);
}

function generateDepositProgressMsg(firstName, lastName, amount, depositTime) {
    var clientName = `${firstName} ${lastName}`;

    var message = `
        <div class="container">
            <h6>Dear ${clientName},</h6>
    
            <p>We hope this message finds you well.</p>
    
            <p>We wish to inform you that the deposit process for your account, in the amount of $${amount}, made on ${depositTime}, is currently in progress, and we're awaiting confirmation. Our team is diligently working on ensuring that this transaction is processed efficiently and accurately.</p>
    
            <p>Rest assured, we are actively monitoring the deposit and will keep you informed of any updates or confirmations as soon as they become available. Your satisfaction and trust in our services are of utmost importance to us, and we're committed to ensuring a seamless and secure process for you.</p>
    
            <p>Should you have any questions or require further assistance, please feel free to reach out to our support team at support@worldwirepay.com.</p>
    
            <p>Thank you for your patience and cooperation throughout this process. We truly appreciate your business.</p>
    
            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div>
`;

    return wrapHtmlCss(message);
}

function generateSuccessTransferSenderMsg(senderName, amount, transactionId, receiverName, receiverEmail) {
    const successMessage = `
        <div class="container">
            <p>Dear ${senderName},</p>

            <p>We are pleased to inform you that the money transfer was successful.</p>

            <p>The amount of ${amount} USD has been sent to ${receiverName} (${receiverEmail}) with transaction ID ${transactionId}.</p>

            <p>Thank you for using our money world wire pay service. If you have any questions or concerns, please contact our support team at support@worldwirepay.com</a>.</p>

            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div>`;

    return wrapHtmlCss(successMessage);
}

function generateSuccessTransferReceiverMsg(receiverName, amount, transactionId, senderName, senderEmail) {
    const successMessage = `
        <div class="container">
            <p>Dear ${receiverName},</p>

            <p>We are delighted to inform you that the money transfer is now complete.</p>

            <p>You have successfully received ${amount} USD from ${senderName} (${senderEmail}) with transaction ID ${transactionId}.</p>

            <p>If you have any questions or concerns, please feel free to contact our support team at support@worldwirepay.com</p>

            <p>Thank you for choosing our money transfer service.</p>

            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div>`;

    return wrapHtmlCss(successMessage);
}

function generateCancelReceiverMsg(receiverName, amount, transactionId, senderName, senderEmail) {
    const cancelMessage = `
        <div class="container">
            <p>Dear ${receiverName},</p>

            <p>We regret to inform you that the money transfer for ${amount} USD initiated by ${senderName} (${senderEmail}) with transaction ID ${transactionId} has been cancelled.</p>

            <p>If you have any questions or concerns regarding this cancellation, please contact our support team at support@worldwirepay.com</p>

            <p>We apologize for any inconvenience this may have caused.</p>

            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div>`;

    return wrapHtmlCss(cancelMessage);
}

function generateCancelSenderMsg(senderName, amount, transactionId, receiverName, receiverEmail) {
    const cancelMessage = `
        <div class="container">
            <p>Dear ${senderName},</p>

            <p>We regret to inform you that the money transfer Amount ${amount} USD initiated to ${receiverName} (${receiverEmail}) with transaction ID ${transactionId} has been cancelled.</p>

            <p>If you have any questions or concerns regarding this cancellation, please contact our support team at support@worldwirepay.com</p>

            <p>We apologize for any inconvenience this may have caused.</p>

            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div>`;

    return wrapHtmlCss(cancelMessage);
}

function generateWelcomeMessage(first_name, last_name) {
    const welcomeMessage = `
        <div class="container">
            <p>Dear ${first_name} ${last_name},</p>

            <p>Welcome to Your Money App!</p>

            <p>We are excited to have you on board. Thank you for choosing our service.</p>

            <p><strong>You will be able to enjoy:</strong></p>
            <ul>
                <li>Seamless money transfers</li>
                <li>Easy tracking of your transaction history</li>
                <li>Secure account management</li>
            </ul>

            <p>If you have any questions or need assistance, feel free to contact our support team at support@worldwirepay.com. We're here to help!</p>

            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div>`;

    return wrapHtmlCss(welcomeMessage);
}

function generateRewardMessage(first_name, last_name, rewardAmount, currentBalance) {
    const rewardMessage = `
        <div class="container">
            <p>Dear ${first_name} ${last_name},</p>

            <p>You have received a reward from World Wire Pay!</p>

            <p>Reward amount: ${rewardAmount} USD</p>

            <p>Your current account balance: ${currentBalance} USD</p>

            <p>This reward is our way of expressing appreciation for using our services. We value your loyalty and trust in World Wire Pay.</p>

            <p>If you have any questions or if there's anything else we can assist you with, please feel free to contact our support team at support@worldwirepay.com.</p>

            <p>Thank you for being a valued member of our community!</p>

            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div>`;

    return wrapHtmlCss(rewardMessage);
}

function generatePassResetMsg(first_name, resetLink){
    const message =`
        <div class="container">
            <h2>Password Reset Request</h2>
    
            <p>Hello ${first_name},</p>
    
            <p>We received a request to reset your password. To proceed with the password reset, please click on the following link:</p>
    
            <p><a class="button" href="${resetLink}" style="text-decoration: none; color: #ffffff;">Reset My Password</a></p>
    
            <p>If you did not initiate this request or if you have any concerns, please ignore this email. Your account security is important to us.</p>
    
            <p>Thank you for using our services!</p>
    
            <p>Best regards,<br>
            Customer Support<br>
            World Wire Pay<br>
            <a href="mailto:support@worldwirepay.com">support@worldwirepay.com</a></p>
        </div> `

        return wrapHtmlCss(message)
}

function wrapHtmlCss (bodyText){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                .button {
                    display: inline-block;
                    font-size: 16px;
                    font-weight: bold;
                    padding: 10px 20px;
                    text-align: center;
                    text-decoration: none;
                    background-color: #3498db;
                    color: #ffffff;
                    border-radius: 5px;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #333333;
                }
        
                p {
                    color: #555555;
                }
            </style>
        </head>
        <body>
            ${bodyText}
        </body>
        </html>
    `;
}

module.exports = {
    generateDepositProgressMsg,
    generateWithdrawalProgressMsg,
    generateCompleteTransactionMsg,
    generateCancelledTransactionMsg,
    generateSuccessTransferSenderMsg,
    generateSuccessTransferReceiverMsg,
    generateCancelReceiverMsg,
    generateCancelSenderMsg,
    generateWelcomeMessage,
    generateRewardMessage,
    generateNonuserMsg,
    generatePassResetMsg,
}