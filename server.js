const express = require('express');
const contactRoutes = require('./routes/contact');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100
});

app.use(limiter);

app.use(cors({
    origin: 'https://arthur-openclassroom-github-io.vercel.app'
}));

app.use('/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});