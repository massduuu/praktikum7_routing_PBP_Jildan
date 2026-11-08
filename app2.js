
const express = require('express');
const app = express();
const PORT = 3000;


const tim = 2 ;

const anggota = [
    {nama: 'Almira'},
    {nama: 'Irfan'},
    {nama: 'Jildan'},
    {nama: 'Muhammad'}
];

app.get('/', (req, res) => {
    res.send(`Selamat datang di server kelompok ${tim}!`);
});

app.get('/team/:nama', (req, res) => {
    const nama = req.params.nama;

    res.send(`Hai, saya ${nama} dari kelompok ${tim}.`);
});

app.get('/info', (req, res) => {
    res.json({
        namaKelompok: tim,
        daftarAnggota: anggota
    });
});

app.get('/data', (req, res) => {
    res.redirect('/info');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});