import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
var server = express();
server.use(cors());
server.use(express.json());
//routes
server.use([]);
server.listen(5000, function () { return console.log("Servidor ON na porta", +5000); });
