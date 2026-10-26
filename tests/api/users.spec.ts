import { test, expect } from '../fixtures/api.fixture';
import { UsersApiPage } from '../page-objects/users-api.page';

test.describe('API Validation - Users Service', () => {
  test('Debería obtener una lista de usuarios con código 200 y estructura válida', async ({ request, baseURL }) => {
    const userApi = new UsersApiPage(request, baseURL);
    const response = await userApi.listUsers();

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('page', 2);
    expect(responseBody.data.length).toBeGreaterThan(0);
    expect(responseBody.data[0]).toHaveProperty('id');
    expect(responseBody.data[0]).toHaveProperty('email');
  });

  test('Debería crear un nuevo usuario exitosamente (POST)', async ({ request, baseURL }) => {
    const userApi = new UsersApiPage(request, baseURL);
    const newUser = {
      name: 'QA Engineer',
      job: 'Automation SDET'
    };

    const response = await userApi.createUser(newUser);

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody).toMatchObject(newUser);
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
  });

  test('Debería retornar un código 404 al buscar un usuario inexistente', async ({ request, baseURL }) => {
    const userApi = new UsersApiPage(request, baseURL);
    const response = await userApi.getUserById(99999);
    expect(response.status()).toBe(404);
  });
});