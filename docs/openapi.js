const openapi = {
  openapi: "3.0.3",
  info: {
    title: "API Backend Proyecto",
    description: "Documentacion de los endpoints de la API (niveles 1 y 2).",
    version: "1.0.0"
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local"
    }
  ],
  paths: {
    "/api/saludo": {
      get: {
        summary: "Saludo de prueba",
        description: "Devuelve un mensaje de bienvenida.",
        responses: {
          200: {
            description: "Saludo correcto",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    mensaje: { type: "string", example: "Hola desde mi API" }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/yo": {
      get: {
        summary: "Datos del estudiante",
        description: "Devuelve el nombre y la carrera del estudiante.",
        responses: {
          200: {
            description: "Datos obtenidos correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    nombre: { type: "string", example: "Luz Vasquez" },
                    carrera: { type: "string", example: "Ing. de Software" }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/edad/{anio}": {
      get: {
        summary: "Calcular edad",
        description: "Calcula la edad a partir del anio de nacimiento.",
        parameters: [
          {
            name: "anio",
            in: "path",
            required: true,
            description: "Anio de nacimiento (entre 1900 y el anio actual)",
            schema: { type: "integer", example: 2000 }
          }
        ],
        responses: {
          200: {
            description: "Edad calculada correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    anioNacimiento: { type: "integer", example: 2000 },
                    edadCalculada: { type: "integer", example: 26 }
                  }
                }
              }
            }
          },
          400: {
            description: "Anio invalido",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: { type: "string", example: "Anio invalido" }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

module.exports = openapi;
