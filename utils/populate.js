// utils/populate.js
const mongoose = require('mongoose');
const Produto = require('../models/produto.js'); // Importa o modelo do novo local
const DB_URI = 'mongodb://localhost:27017/technova_db'; 

// --- DADOS EMBUTIDOS: Não depende mais do arquivo produtos.json ---
const produtosData = [
  {
    "id": "tn001",
    "nome": "Notebook Gamer Nitro 5",
    "categoria": "notebooks",
    "marca": "Acer",
    "preco": 4899.90,
    "estoque": 15,
    "imagem": "img/notebook_nitro5.jpg",
    "avaliacao": 4.5
  },
  {
    "id": "tn002",
    "nome": "Placa de Vídeo RTX 4060",
    "categoria": "hardware",
    "marca": "NVIDIA",
    "preco": 2100.00,
    "estoque": 30,
    "imagem": "img/4060.jpg",
    "avaliacao": 4.8
  },
  {
    "id": "tn003",
    "nome": "Monitor UltraWide 29''",
    "categoria": "perifericos",
    "marca": "LG",
    "preco": 1150.00,
    "estoque": 22,
    "imagem": "img/monitor_lg.jpg",
    "avaliacao": 4.7
  },
  {
    "id": "tn004",
    "nome": "SSD Kingston 1TB NVMe",
    "categoria": "hardware",
    "marca": "Kingston",
    "preco": 450.00,
    "estoque": 50,
    "imagem": "img/ssd_kingston.jpg",
    "avaliacao": 4.9
  },
  {
    "id": "tn005",
    "nome": "NADAVE",
    "categoria": "simismire",
    "marca": "ijoijston",
    "preco": 550.00,
    "estoque": 60,
    "imagem": "img/ssd_kingston.jpg",
    "avaliacao": 4.0
  }
];
// ---------------------------------------------------------------------

async function populateDB() {
    try {
        await mongoose.connect(DB_URI);
        console.log('--- Iniciando script de população ---');
        console.log('✅ Conectado ao MongoDB para população.');

        await Produto.deleteMany({}); 
        console.log('🗑️ Coleção Produtos limpa.');

        await Produto.insertMany(produtosData);
        console.log(`✨ ${produtosData.length} produtos inseridos com sucesso!`);

    } catch (error) {
        console.error('❌ Erro durante a população do banco de dados:', error);
    } finally {
        await mongoose.connection.close();
        console.log('🔌 Conexão com o MongoDB fechada.');
    }
}

populateDB();