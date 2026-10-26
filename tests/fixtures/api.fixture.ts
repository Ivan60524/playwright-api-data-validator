import { test as base } from '@playwright/test';
import { createMockUsersApiServer } from '../utils/mock-api-server';

export type ApiTestFixtures = {
  baseURL: string;
};

export const test = base.extend<ApiTestFixtures>({
  baseURL: async ({}, use) => {
    const mockApiServer = await createMockUsersApiServer();
    await use(mockApiServer.baseURL);
    await mockApiServer.close();
  }
});

export { expect } from '@playwright/test';
