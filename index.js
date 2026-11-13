const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// arrow function
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde mi API" });
});

// Primer ejercicio
app.get("/api/yo", (req, res) => {
  res.json({ nombre: "Luz Vasquez", carrera: "Ing. de Software" });
});

// Segundo ejercicio
app.get("/api/edad/:anio", (req, res) => {
  const anio = parseInt(req.params.anio);
  const anioActual = new Date().getFullYear();
  
  if (!Number.isInteger(anio) || anio < 1900 || anio > anioActual) {
    return res.status(400).json({ error: "Año inválido" });
  }

  const edad = anioActual - año;
  res.json({ anioNacimiento: anio, edadCalculada: 18 });
});

app.listen(PORT, () => {
  console.log("API lista");
});