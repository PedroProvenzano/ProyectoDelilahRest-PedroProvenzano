require("./connection");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");
const port = process.env.PORT || 3000;
const cors = require("cors");

const Menu = require("./routes/menu");
const Pedidos = require("./routes/pedidos");
const Usuarios = require("./routes/usuarios");
const TokenRefresh = require("./routes/tokenrefresh");
const Admin = require("./routes/admin");

// Syncs
require("./asociations");
require("./migrations");

// MiddleWares
app.use(cors());
app.use(bodyParser.json());
app.use("/menu", Menu);
app.use("/pedidos", Pedidos);
app.use("/usuarios", Usuarios);
app.use("/token", TokenRefresh);
app.use("/admin", Admin);

app.get("/", async (req, res) => {
  res.send("hola desde app");
});

app.listen(port, () => {
  console.log(`Conectado al puerto ${port}`);
});
