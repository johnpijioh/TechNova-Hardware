# TechNova Hardware
## A Plataforma Definitiva de E-commerce para Hardware

[![Status do Projeto](https://img.shields.io/badge/Status-EM%20DESENVOLVIMENTO-yellow)]
[![Stack Principal](https://img.shields.io/badge/Stack-Node%2FExpress%20%7C%20MongoDB-green)]
[![Versão Atual](https://img.shields.io/badge/Commit-Base%20API%20%26%20UI-informational)]
[![Licença](https://img.shields.io/badge/Licença-ISC-blue)](LICENSE)

---

## Objetivo do Projeto

O **TechNova Hardware** é um projeto ambicioso com o objetivo final de construir um **E-commerce de hardware avançado, escalável e moderno**.

Nosso foco é desenvolver uma plataforma, utilizando o ecossistema JavaScript (Node.js, Express, MongoDB) para garantir alta performance e um gerenciamento eficiente do catálogo de produtos e dados de usuários.

---

## Status Atual (Base)

A estrutura base do projeto já foi estabelecida e consolidada nos commits iniciais:

* **Backend Funcional:** Servidor Node.js/Express rodando na porta 3000.
* **Conexão com DB:** Configuração inicial com MongoDB (Mongoose) para persistência de dados.
* **API de Produtos:** Rotas RESTful básicas (`GET` e `POST /api/produtos`) estão prontas para buscar e adicionar itens.
* **Interface Base:** Estrutura HTML/CSS de catálogo (vitrine e cards de produto) implementada (ver `index.html` e `style.css`).

---

## Próximos Passos (Planejamento de Commits)

Os próximos commits serão focados em transformar a base em um sistema funcional e interativo:

1.  **Modelagem de Dados:** Criação do Schema de Produto (via `models/produto.js`) para estruturar o catálogo no MongoDB.
2.  **Integração do Frontend:** Desenvolvimento do script principal (`public/main.js`) para fazer a requisição à API e renderizar os produtos dinamicamente na página.
3.  **Funcionalidades CRUD:** Implementação das rotas de `PUT` (Atualizar) e `DELETE` (Excluir) na API.
4.  **UX Aprimorada:** Refinamento dos estilos CSS, adição de filtros de busca e integração de um sistema de carrinho de compras.

---

## Em Desenvolvimento

Feito por João Alves
* **Contribua:** Novas ideias e Pull Requests são bem-vindos!

<p align="center">Construindo o futuro do e-commerce de hardware.</p>
