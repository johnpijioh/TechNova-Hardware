// models/Produto.js
const mongoose = require('mongoose');

// DEFINIÇÃO DO SCHEMA (Ficha Técnica do Produto)
const produtoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    categoria: String,
    marca: String,
    preco: { type: Number, required: true },
    estoque: { type: Number, default: 0 },
    imagem: String,
    avaliacao: Number
});

// O Mongoose cria a coleção 'produtos' no MongoDB
const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto; // Exporta o modelo para ser usado em index.js e populate.js