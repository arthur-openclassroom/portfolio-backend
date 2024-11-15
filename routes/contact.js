const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Nom: ${name}, Email: ${email}, Message: ${message}`);

    axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: '7491475542',
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    })
        .then(() => {
            res.send('Formulaire de contact reçu avec succès et message envoyé à Telegram!');
        })
        .catch(err => {
            console.error('Erreur lors de l\'envoi du message à Telegram :', err);
            res.status(500).send('Erreur lors de l\'envoi du message à Telegram.');
        });
});

module.exports = router;