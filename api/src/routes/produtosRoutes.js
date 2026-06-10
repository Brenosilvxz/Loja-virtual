const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            nome: "Nike VaporMax",
            preco: 899.90,
            categoria: "Lançamentos",
            estoque: 15
        },
        {
            id: 2,
            nome: "Nike Air Max 90",
            preco: 749.90,
            categoria: "Lançamentos",
            estoque: 20
        }
    ]);
});

module.exports = router;