// index.js
const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors'); // Adicione o CORS para evitar bloqueios do navegador
const path = require('path'); // Módulo nativo para trabalhar com caminhos de arquivo
const Produto = require('./models/produto.js'); // <--- IMPORTA O MODELO
const app = express();
const port = 3000;

// --- CONFIGURAÇÃO ---
const DB_URI = 'mongodb://localhost:27017/technova_db'; 

mongoose.connect(DB_URI)
    .then(() => console.log('✅ Conectado ao MongoDB!'))
    .catch(err => {
        console.error('❌ Erro de conexão com o MongoDB:', err);
        process.exit(1);
    });

// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json());

// SERVE ARQUIVOS ESTÁTICOS: Faz com que o navegador consiga acessar index.html, main.js, etc.
app.use(express.static(path.join(__dirname, 'public')));


// --- ROTA DE API: GET /api/produtos ---
app.get('/api/produtos', async (req, res) => {
    try {
        // Busca TODOS os produtos no MongoDB
        const produtos = await Produto.find(); 
        res.json(produtos); // Retorna como JSON
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
});

// --- Rota de Inserção (Criação de novos produtos - Boas Práticas) ---
app.post('/api/produtos', async (req, res) => {
    try {
        const produtoSalvo = await Produto.create(req.body);
        res.status(201).json(produtoSalvo);
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        res.status(500).json({ mensagem: 'Falha ao salvar o produto.', erro: error.message });
    }
});


// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});