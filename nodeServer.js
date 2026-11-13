const express = require('express');
const app = express();
const PORT = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi');

app.use(express.json());

// Documentación de la API con Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ruta raíz / principal de bienvenida
app.get('/', (req, res) => {
  res.json({
    mensaje: "¡Bienvenido a mi API backend!",
    rutasDisponibles: {
      documentacion: "/api-docs",
      usuario: "/api/yo",
      edad: "/api/edad/:anio"
    }
  });
});

// NIVEL 1: GET /api/yo
app.get('/api/yo', (req, res) => {
  res.json({
    nombre: "Luz Vasquez",
    carrera: "Ing. de Software"
  });
});

// NIVEL 2: GET /api/edad/:anio
app.get('/api/edad/:anio', (req, res) => {
  const anioNacimiento = parseInt(req.params.anio);
  const anioActual = new Date().getFullYear();

  if (isNaN(anioNacimiento) || anioNacimiento < 1900 || anioNacimiento > anioActual) {
    return res.status(400).json({ error: "Por favor ingresa un año válido." });
  }

  const edad = anioActual - anioNacimiento;

  res.json({
    anioNacimiento: anioNacimiento,
    edadCalculada: edad
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
