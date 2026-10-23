import { test, expect } from '@playwright/test';
import sqlite3 from 'sqlite3';

test.describe('Database Persistency Validation - SQLite', () => {

  test('Debería insertar y consultar un registro exitosamente en la base de datos local', async () => {
    // Crear una base de datos SQLite en memoria para la prueba
    const db = new sqlite3.Database(':memory:');

    // Promesa para manejar la inicialización y operaciones SQL de forma asíncrona
    const runDbOperations = () => {
      return new Promise((resolve, reject) => {
        db.serialize(() => {
          // Crear tabla de usuarios
          db.run("CREATE TABLE users (id INT, name TEXT, role TEXT)", (err) => {
            if (err) reject(err);
          });

          // Insertar un registro de prueba
          db.run("INSERT INTO users VALUES (1, 'Ivan Suarez', 'SDET')", (err) => {
            if (err) reject(err);
          });

          // Consultar el registro insertado
          db.get("SELECT * FROM users WHERE id = 1", (err, row: any) => {
            if (err) {
              reject(err);
            } else {
              resolve(row);
            }
          });
        });
      });
    };

    // Ejecutar las operaciones y capturar el resultado
    const result: any = await runDbOperations();

    // Aserciones de persistencia y calidad de datos
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('Ivan Suarez');
    expect(result.role).toBe('SDET');

    // Cerrar la conexión a la base de datos
    db.close();
  });

});