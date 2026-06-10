const express = require("express");
const cors = require("cors");

const produtosRoutes = require("./routes/produtosRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", produtosRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Mee Visuals funcionando!"
    });
});

module.exports = app;