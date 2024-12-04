"use strict";

const express = require("express");
const cors = require("cors");
const path = require("path"); 
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../../docs/swagger");
const usersRoute = require("../routes/usersRoute");
const flagsRoute = require("../routes/flagsRoute");

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/* app.use(cors({
    origin: 'http://localhost:3001', 
    credentials: true, 
})); */
app.use(cors());
app.use("/users", usersRoute);
app.use("/flags", flagsRoute);
app.use(express.static(path.join(__dirname, "../../../public")));

module.exports = app;
