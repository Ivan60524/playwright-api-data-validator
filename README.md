# 🚀 API Data Validator: Playwright API Testing & SQLite Persistency

Framework automatizado de pruebas de integración de servicios backend y validación de bases de datos relacionales, desarrollado con **TypeScript**, **Playwright (APIRequestContext)** y **SQLite**. Este proyecto forma parte de mi portafolio profesional como SDET / QA Automation Engineer, enfocado en la validación de contratos, servicios REST y persistencia de datos.

## 📌 Resumen Ejecutivo
Este proyecto simula la capa de servicios backend de una plataforma de comercio electrónico o gestión de usuarios. Su objetivo principal es demostrar la capacidad de probar no solo interfaces de usuario (UI), sino también contratos de API REST (métodos GET, POST y validación de errores 404) y verificar que las operaciones realizadas tengan una correspondencia íntegra con el almacenamiento persistente en bases de datos.

La API utilizada en las pruebas es un servidor mock local para evitar errores de `429 Too Many Requests` que ocurren con servicios públicos compartidos como ReqRes.

## 🛠️ Competencias Técnicas Demostradas
- **Pruebas de API REST con Playwright:** Uso del cliente HTTP nativo (`APIRequestContext`) para realizar peticiones asíncronas robustas.
- **Validación de Contratos y Códigos HTTP:** Comprobación de códigos de estado (200, 201, 404) y esquemas de respuesta JSON con tipado estricto.
- **Pruebas Negativas:** Manejo de escenarios de error ante recursos inexistentes.
- **Validación de Persistencia con SQL (SQLite):** Integración de bases de datos relacionales locales para validar inserciones, consultas y consistencia de datos.
- **Mocking local de APIs:** Implementación de un servidor HTTP de prueba para evitar dependencia de APIs públicas y problemas de rate limit.
- **Control de Versiones y Calidad:** Estructura modular de pruebas, tipado en TypeScript y gestión profesional de dependencias.

## 📂 Estructura del Proyecto
```text
playwright-api-data-validator/
├── tests/
│   ├── api/
│   │   └── users.spec.ts            # Pruebas de contrato y endpoints (GET, POST, 404)
│   ├── database/
│   │   └── persistency.spec.ts      # Pruebas de integración y persistencia con SQLite
│   └── utils/
│       └── mock-api-server.ts       # Servidor mock local para evitar rate limiting externo
├── playwright.config.ts             # Configuración global del framework
├── package.json                     # Dependencias y scripts de ejecución
├── .github/workflows/ci.yml         # Pipeline CI para validación automática
├── README.md                        # Documentación del proyecto
└── node_modules/                    # Dependencias instaladas
```