import { test, expect } from '@playwright/test';

// Declaración de la URL base a nivel de archivo para que sea accesible en todas las pruebas
const baseURL = 'https://reqres.in/api';

test.describe('API Validation - ReqRes Users Service', () => {

  test('Debería obtener una lista de usuarios con código 200 y estructura válida', async ({ request }) => {
    const response = await request.get(`${baseURL}/users?page=2`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('page', 2);
    expect(responseBody.data.length).toBeGreaterThan(0);
    expect(responseBody.data[0]).toHaveProperty('id');
    expect(responseBody.data[0]).toHaveProperty('email');
  });

  test('Debería crear un nuevo usuario exitosamente (POST)', async ({ request }) => {
    const newUser = {
      name: 'QA Engineer',
      job: 'Automation SDET'
    };

    const response = await request.post(`${baseURL}/users`, {
      data: newUser
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody).toMatchObject(newUser);
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
  });

  test('Debería retornar un código 404 al buscar un usuario inexistente', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/99999`);
    console.log(`Estatus recibido para usuario inexistente: ${response.status()}`);
    expect(response.status()).toBe(404);
  });

});