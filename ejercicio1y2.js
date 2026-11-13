const express = require('express');
const app = express();
const PORT = 3000;

const swaggerUi = require('swagger-ui-express');
const openapi = require('./docs/openapi');

app.use(express.json());

// Documentación de la API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapi));

// Primer ejercicio
app.get("/api/yo", (req, res) => {
  res.json({ nombre: "Luz Vasquez", carrera: "Ing. de Software" });
});

// Segundo ejercicio
app.get("/api/edad/:anio", (req, res) => {
  const anioActual = new Date().getFullYear();
  const anio = parseInt(req.params.anio);

  if (!Number.isInteger(anio) || anio < 1900 || anio > anioActual) {
    return res.status(400).json({ error: "Año inválido" });
  }

  const edad = anioActual - anio;
  res.json({ anioNacimiento: anio, edadCalculada: edad });
});

app.listen(PORT, () => {
  console.log("API lista");
});






