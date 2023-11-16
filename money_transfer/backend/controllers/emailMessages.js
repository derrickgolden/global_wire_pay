const depositInprogress = `
Dear [Client's Name],

I hope this message finds you well.

We wanted to inform you that the deposit process for your account is currently in progress and we're awaiting confirmation. Our team is diligently working on ensuring that this transaction is processed efficiently and accurately.

Rest assured, we are actively monitoring the deposit and will keep you informed of any updates or confirmations as soon as they become available. Your satisfaction and trust in our services are of utmost importance to us, and we're committed to ensuring a seamless and secure process for you.

Should you have any questions or require further assistance, please feel free to reach out to our support team at [Contact Details].

Thank you for your patience and cooperation throughout this process. We truly appreciate your business.

Best regards,

[Your Name]
[Your Position]
[Company Name]
[Contact Information]
`
const withdrawInprogress = `
Subject: Withdrawal Processing: Underway, Pending Confirmation

Dear [Client's Name],

I trust this message finds you well.

We wish to inform you that the withdrawal request from your account is currently in progress and awaiting confirmation. Our team is actively engaged in facilitating this transaction and ensuring its prompt and accurate processing.

Rest assured, we are closely monitoring the withdrawal process and will promptly notify you of any updates or confirmations as they become available. Your trust and satisfaction with our services are our top priorities, and we're dedicated to ensuring a smooth and secure experience for you.

Should you have any inquiries or require further assistance, our support team is available to address your concerns at [Contact Details].

We appreciate your understanding and cooperation throughout this process. Thank you for choosing our services.

Warm regards,

[Your Name]
[Your Position]
[Company Name]
[Contact Information]`

const completeTransaction = `

Dear [Client's Name],

I hope this message finds you well.

I'm writing to inform you that the transaction process has been successfully completed. Your transaction has been processed and confirmed, reflecting the successful transfer of funds.

We take great pride in ensuring a seamless and secure payment experience for our valued clients, and your satisfaction is our top priority. Rest assured, the funds have been successfully delivered to the intended recipient or account.

If you have any further queries or need additional assistance, please feel free to reach out to our dedicated support team at [Contact Details].

Thank you for choosing our services. We appreciate your trust and look forward to continuing to serve your financial needs in the future.

Best regards,

[Your Name]
[Your Position]
[Company Name]
[Contact Information]`

const cancelledTransaction =`

Dear [Client's Name],

I trust this message finds you well.

I regret to inform you that the recent payment transaction initiated has been canceled successfully. Our team has processed the cancellation request, and the funds will not be deducted from your account.

If you have any questions or concerns regarding the cancellation or if you require further assistance, please do not hesitate to contact our support team at [Contact Details]. We are here to assist you and address any inquiries you may have.

We apologize for any inconvenience this cancellation may have caused and appreciate your understanding. If there's anything else we can assist you with, please feel free to reach out.

Thank you for choosing our services.

Best regards,

[Your Name]
[Your Position]
[Company Name]
[Contact Information]`

function generateNonuserEmail(recipientNames, senderNames, claimUrl) {
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
    </style>
</head>
<body>

<div class="container">
<p>Hello ${recipientNames}</p>

<p>We hope this message finds you well.</p>

<p>Great news! ${senderNames} has sent you money through our platform. To claim and receive the funds, all you need to do is complete a quick registration. It's fast, easy, and secure!</p>

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

    <p>Thank you for choosing [Your Platform Name] for your money transfers. We look forward to welcoming you as a valued member of our community!</p>

    <p>Best regards,<br/>
    [Your Company Name]<br/>
    [Your Contact Information]<br/>

</div>

</body>
</html>
    `;
}

module.exports = {
    depositInprogress,
    withdrawInprogress,
    completeTransaction,
    cancelledTransaction,
    generateNonuserEmail,
}

