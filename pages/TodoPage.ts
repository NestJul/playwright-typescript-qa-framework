import { expect, type Locator, type Page } from '@playwright/test';

export class TodoPage {
  readonly newTodo: Locator;
  readonly todoItems: Locator;
  readonly todoCount: Locator;
  readonly clearCompleted: Locator;

  constructor(private readonly page: Page) {
    this.newTodo = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.locator('.todo-list li');
    this.todoCount = page.locator('.todo-count');
    this.clearCompleted = page.getByRole('button', { name: 'Clear completed' });
  }

  async open(): Promise<void> {
    await this.page.goto('./');
    await expect(this.newTodo).toBeVisible();
  }

  async addTodo(title: string): Promise<void> {
    await this.newTodo.fill(title);
    await this.newTodo.press('Enter');
    await expect(this.todoItems.filter({ hasText: title })).toHaveCount(1);
  }

  item(title: string): Locator {
    return this.todoItems.filter({ hasText: title });
  }

  async complete(title: string): Promise<void> {
    await this.item(title).getByRole('checkbox').check();
    await expect(this.item(title)).toHaveClass(/completed/);
  }

  async delete(title: string): Promise<void> {
    const item = this.item(title);
    await item.hover();
    await item.locator('.destroy').click();
    await expect(item).toHaveCount(0);
  }

  async filter(name: 'All' | 'Active' | 'Completed'): Promise<void> {
    await this.page.getByRole('link', { name, exact: true }).click();
  }
}
