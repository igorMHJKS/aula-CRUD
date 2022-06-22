const express = require ("express");
const app = express();
const port = 3000;
// Importa pacote method-override
// Serve para alterar método da requisição
// Ex: Post vira put, get vira delete, get vira put...
const methodOverride = require("method-override")
const indexRoute =require ("./src/router/indexRoute")
const userRoute = require("./src/router/userRouter")

//Configura pasta estática para acesso extrerno
app.use(express.static(__dirname + "/public"));

//Configura o templante engine, troca do padrão (jade) para ejs
app.set("view engine" , "ejs");

//Configura p caminho para os views, troca o padrão que é no raiz para o src
app.set("views" , __dirname + "/src/views");

//configura o methodOverride no express
app.use(methodOverride("_method"))

//Converte corpo da requisição (body), em objeto literal
app.use(express.json());

//Converte requisição para formato que o json aceita
app.use(express.urlencoded({extended: false}));

app.use("/", indexRoute);

app.use("/user", userRoute);

app.listen(port, () => {
    console.log("Estamos rodando na porta" + port);
})