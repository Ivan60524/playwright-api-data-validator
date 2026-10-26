import type { APIRequestContext } from '@playwright/test';

export class UsersApiPage {
  constructor(
    private readonly request: APIRequestContext,
    private readonly baseURL: string
  ) {}

  async listUsers() {
    return this.request.get(`${this.baseURL}/users?page=2`);
  }

  async createUser(data: Record<string, string>) {
    return this.request.post(`${this.baseURL}/users`, { data });
  }

  async getUserById(id: number) {
    return this.request.get(`${this.baseURL}/users/${id}`);
  }
}
