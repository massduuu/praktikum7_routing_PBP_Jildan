const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'John Wick' },
    { id: 2, name: 'Alexander Arnold' },
    { id: 3, name: 'Anton Hermawan' },
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    } else {
        res.json(user);
    }
});

app.get('/', (req, res) => {
    res.send('Halaman Utama');
});

app.get('/about', (req, res) => {
    res.send('Halaman Tentang Kami');
});

app.get('/contact', (req, res) => {
    res.send('Hubungi Kami di routing-app');
});

app.get('/produk/:kode', (req, res) => {
    res.send('Produk dengan kode: ' + req.params.kode);
});

app.post('/users', (req, res) => {
    res.send('Tambah data user baru');
});

app.put('/users/:id', (req, res) => {
    res.send('Update data user dengan ID: ' + req.params.id);
});

app.delete('/users/:id', (req, res) => {
    res.send('Hapus user dengan ID: ' + req.params.id);
});

app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));