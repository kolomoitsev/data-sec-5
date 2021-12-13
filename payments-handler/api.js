const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    return res.send('<h1>ok get</h1>');
});

router.post('/', async (req, res) => {
    const { data, signature } = req.body;

    const {
        payment_id,
        status,
        order_id,
        description,
        sender_phone,
        create_date,
        transaction_id,
        amount_debit,
    } = JSON.parse(Buffer.from(data, 'base64').toString()); // Ta-da

    return res.send(` <div>
        <p>payment_id: ${payment_id}</p>
        <p>status: ${status}</p>
        <p>order_id: ${order_id}</p>
        <p>description: ${description}</p>
        <p>sender_phone: ${sender_phone}</p>
        <p>create_date: ${new Date(create_date).toLocaleDateString()}</p>
        <p>transaction_id: ${transaction_id}</p>
        <p>amount_debit: ${amount_debit}</p>        
    </div>`);
});

module.exports = router;
